"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import { supabase, type InquiryRecord, type InquiryStatus } from "@/lib/supabase";

const STATUS_LABELS: Record<InquiryStatus, { label: string; cls: string }> = {
  new: {
    label: "New",
    cls: "bg-[#b4f48c] text-[#0c1017] font-semibold",
  },
  in_progress: {
    label: "In Progress",
    cls: "bg-[#155eef] text-white font-semibold",
  },
  contacted: {
    label: "Contacted",
    cls: "bg-emerald-100 text-emerald-900 font-semibold",
  },
  archived: {
    label: "Archived",
    cls: "bg-black/[0.07] text-[#0c1017]/60 font-medium",
  },
};

export default function AdminDashboardPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Auth form state
  const [email, setEmail] = useState("admin@mobilityeragame.com");
  const [password, setPassword] = useState("MobilityAdmin2026!");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Inquiries state
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"all" | InquiryStatus>("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSavedToast, setNotesSavedToast] = useState(false);

  // Check session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const fetchInquiries = useCallback(async () => {
    setLoadingData(true);
    setDbError(null);
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    setLoadingData(false);
    if (error) {
      setDbError(error.message);
      return;
    }
    const list = (data || []) as InquiryRecord[];
    setInquiries(list);
    if (list.length > 0 && !selectedId) {
      setSelectedId(list[0].id);
      setNotesDraft(list[0].admin_notes || "");
    }
  }, [selectedId]);

  // Fetch inquiries and subscribe to realtime updates when authenticated
  useEffect(() => {
    if (!session) return;
    fetchInquiries();

    const channel = supabase
      .channel("inquiries-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "inquiries" },
        () => {
          fetchInquiries();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session, fetchInquiries]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSubmitting(true);
    setAuthError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setAuthSubmitting(false);
    if (error) {
      setAuthError(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setInquiries([]);
    setSelectedId(null);
  };

  const handleStatusChange = async (id: string, nextStatus: InquiryStatus) => {
    const prev = [...inquiries];
    setInquiries((list) =>
      list.map((item) => (item.id === id ? { ...item, status: nextStatus } : item))
    );

    const { error } = await supabase
      .from("inquiries")
      .update({ status: nextStatus })
      .eq("id", id);

    if (error) {
      setInquiries(prev);
      alert("Failed to update status: " + error.message);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedInquiry) return;
    setSavingNotes(true);
    const { error } = await supabase
      .from("inquiries")
      .update({ admin_notes: notesDraft })
      .eq("id", selectedInquiry.id);

    setSavingNotes(false);
    if (error) {
      alert("Failed to save notes: " + error.message);
      return;
    }

    setInquiries((list) =>
      list.map((item) =>
        item.id === selectedInquiry.id ? { ...item, admin_notes: notesDraft } : item
      )
    );
    setNotesSavedToast(true);
    setTimeout(() => setNotesSavedToast(false), 2000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this inquiry?")) return;
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) {
      alert("Failed to delete inquiry: " + error.message);
      return;
    }
    const remaining = inquiries.filter((i) => i.id !== id);
    setInquiries(remaining);
    if (selectedId === id) {
      setSelectedId(remaining[0]?.id ?? null);
      setNotesDraft(remaining[0]?.admin_notes ?? "");
    }
  };

  const handleCreateSample = async () => {
    const { error } = await supabase.from("inquiries").insert([
      {
        name: "Dr. Claire Hoffmann",
        school: "Lycée Classique de Diekirch",
        email: "c.hoffmann@lcd.lu",
        country: "Luxembourg",
        role: "Economics & Civics Coordinator",
        message:
          "We would like to order 6 classroom board sets of Mobility Era for our 10th-grade financial literacy module this semester.",
        language: "en",
      },
    ]);
    if (error) {
      alert("Failed to create sample inquiry: " + error.message);
      return;
    }
    fetchInquiries();
  };

  const handleExportCSV = () => {
    if (filteredInquiries.length === 0) return;
    const headers = [
      "ID",
      "Created At",
      "Status",
      "Name",
      "School",
      "Email",
      "Country",
      "Role",
      "Language",
      "Message",
      "Admin Notes",
    ];
    const escape = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = filteredInquiries.map((r) =>
      [
        r.id,
        r.created_at,
        r.status,
        r.name,
        r.school,
        r.email,
        r.country,
        r.role,
        r.language,
        r.message,
        r.admin_notes,
      ]
        .map(escape)
        .join(",")
    );
    const csv = "\uFEFF" + [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mobility-era-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      if (statusFilter !== "all" && item.status !== statusFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.school.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        (item.role && item.role.toLowerCase().includes(q)) ||
        (item.message && item.message.toLowerCase().includes(q))
      );
    });
  }, [inquiries, statusFilter, search]);

  const selectedInquiry = useMemo(
    () => inquiries.find((i) => i.id === selectedId) || filteredInquiries[0] || null,
    [inquiries, selectedId, filteredInquiries]
  );

  const counts = useMemo(() => {
    return {
      all: inquiries.length,
      new: inquiries.filter((i) => i.status === "new").length,
      in_progress: inquiries.filter((i) => i.status === "in_progress").length,
      contacted: inquiries.filter((i) => i.status === "contacted").length,
      archived: inquiries.filter((i) => i.status === "archived").length,
      countries: new Set(inquiries.map((i) => i.country.trim()).filter(Boolean)).size,
    };
  }, [inquiries]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f4f5f8] flex items-center justify-center text-sm text-[#0c1017]/60">
        Loading Admin Portal...
      </div>
    );
  }

  // ─── LOGIN VIEW ───
  if (!session) {
    return (
      <div className="min-h-screen bg-[#f4f5f8] text-[#0c1017] flex flex-col justify-between p-4 sm:p-8">
        <header className="max-w-[1320px] w-full mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-full overflow-hidden bg-white shadow-xs">
              <Image
                src="/images/globe-logo.png"
                alt="Mobility Era"
                fill
                unoptimized
                className="object-contain p-0.5"
              />
            </span>
            <span className="font-display text-2xl leading-none">
              Mobility <em>Era</em> · Admin
            </span>
          </Link>

          <Link
            href="/"
            className="h-9 px-4 rounded-full bg-white text-xs font-medium text-[#0c1017] inline-flex items-center gap-1.5 shadow-2xs hover:bg-black/[0.04]"
          >
            ← Back to Website
          </Link>
        </header>

        <main className="my-auto py-12">
          <div className="max-w-[440px] w-full mx-auto rounded-[32px] bg-white p-8 sm:p-10 shadow-[0_24px_60px_rgba(12,16,23,0.08)] border border-black/[0.05]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b4f48c] text-[11.5px] font-semibold text-[#0c1017]">
              <span>●</span>
              <span>Supabase Auth</span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-[42px] leading-[1.02] tracking-[-0.02em]">
              Admin Portal Sign In
            </h1>
            <p className="mt-2 text-[13.5px] text-[#0c1017]/60 leading-relaxed">
              Manage pilot school inquiries, quote requests, and institutional partnerships.
            </p>

            {authError && (
              <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 p-3.5 text-xs text-red-700 leading-relaxed">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <label className="block">
                <span className="block text-[12px] font-medium text-[#0c1017]/70 mb-1.5">
                  Admin Email
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl bg-[#f4f5f8] border border-black/[0.08] px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#155eef]"
                />
              </label>

              <label className="block">
                <span className="block text-[12px] font-medium text-[#0c1017]/70 mb-1.5">
                  Password
                </span>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl bg-[#f4f5f8] border border-black/[0.08] px-4 py-3 text-sm focus:outline-none focus:bg-white focus:border-[#155eef]"
                />
              </label>

              <button
                type="submit"
                disabled={authSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 pt-2 cursor-pointer disabled:opacity-60"
              >
                <span className="flex-1 h-12 rounded-full bg-[#0c1017] group-hover:bg-[#1a2232] text-white text-sm font-medium inline-flex items-center justify-center transition-colors">
                  {authSubmitting ? "Signing in..." : "Sign In to Dashboard"}
                </span>
                <span className="w-12 h-12 rounded-full bg-[#155eef] text-white grid place-items-center shrink-0">
                  ↗
                </span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-black/[0.07] text-[12px] text-[#0c1017]/55 space-y-1">
              <div className="font-semibold text-[#0c1017]">Default Admin Credentials:</div>
              <div>
                Email: <code className="text-[#155eef]">admin@mobilityeragame.com</code>
              </div>
              <div>
                Password: <code className="text-[#155eef]">MobilityAdmin2026!</code>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center text-xs text-[#0c1017]/40">
          Mobility Era Game · Researchista Admin Portal
        </footer>
      </div>
    );
  }

  // ─── AUTHENTICATED DASHBOARD VIEW ───
  return (
    <div className="min-h-screen bg-[#f4f5f8] text-[#0c1017] pb-16">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative w-8 h-8 rounded-full overflow-hidden bg-[#f4f5f8]">
                <Image
                  src="/images/globe-logo.png"
                  alt="Mobility Era"
                  fill
                  unoptimized
                  className="object-contain p-0.5"
                />
              </span>
              <span className="font-display text-2xl leading-none">
                Mobility <em>Era</em>
              </span>
            </Link>
            <span className="px-2.5 py-0.5 rounded-full bg-[#b4f48c] text-[11px] font-semibold text-[#0c1017]">
              Admin CRM
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="h-9 px-4 rounded-full bg-[#f4f5f8] hover:bg-black/[0.07] text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View Website</span>
              <span>↗</span>
            </Link>
            <span className="hidden md:inline text-xs text-[#0c1017]/50 px-2">
              {session.user.email}
            </span>
            <button
              onClick={handleLogout}
              className="h-9 px-4 rounded-full bg-[#0c1017] hover:bg-red-600 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-8">
        {/* DB Error Alert if SQL migration hasn't been run yet */}
        {dbError && (
          <div className="mb-6 rounded-[24px] bg-amber-50 border border-amber-300 p-6 text-sm text-amber-950">
            <div className="font-semibold text-base">
              Table <code className="font-mono">public.inquiries</code> is not initialized yet
            </div>
            <p className="mt-1 text-xs text-amber-900/80">
              Database response: <code>{dbError}</code>. Please run <code>supabase/schema.sql</code> in the Supabase SQL Editor and click &ldquo;Refresh&rdquo;.
            </p>
          </div>
        )}

        {/* Top Title + Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#155eef]">
              Responses from &ldquo;Let&apos;s Collaborate&rdquo; Form
            </p>
            <h1 className="mt-1 font-display text-4xl sm:text-5xl leading-none tracking-[-0.02em]">
              School &amp; Partner Inquiries
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCreateSample}
              className="h-10 px-4 rounded-full bg-white hover:bg-black/[0.04] border border-black/[0.08] text-xs font-medium transition-colors cursor-pointer"
            >
              + Sample Inquiry
            </button>
            <button
              onClick={handleExportCSV}
              disabled={filteredInquiries.length === 0}
              className="h-10 px-4 rounded-full bg-white hover:bg-black/[0.04] border border-black/[0.08] text-xs font-medium transition-colors cursor-pointer disabled:opacity-40"
            >
              Export CSV ({filteredInquiries.length})
            </button>
            <button
              onClick={fetchInquiries}
              className="h-10 px-5 rounded-full bg-[#155eef] hover:bg-[#114fd1] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {loadingData ? "Refreshing..." : "↻ Refresh"}
            </button>
          </div>
        </div>

        {/* 4 KPI Bento Cards */}
        <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-[24px] bg-white p-5 sm:p-6 shadow-[0_6px_20px_rgba(12,16,23,0.04)]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#0c1017]/55">Total Inquiries</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f4f5f8] text-[11px] font-medium">
                All Time
              </span>
            </div>
            <div className="mt-3 font-display text-5xl leading-none">{counts.all}</div>
          </div>

          <div className="rounded-[24px] bg-white p-5 sm:p-6 shadow-[0_6px_20px_rgba(12,16,23,0.04)]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#0c1017]/55">New Inquiries</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#b4f48c] text-[11px] font-semibold">
                Needs Reply
              </span>
            </div>
            <div className="mt-3 font-display text-5xl leading-none text-[#155eef]">
              {counts.new}
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-5 sm:p-6 shadow-[0_6px_20px_rgba(12,16,23,0.04)]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#0c1017]/55">In Progress / Contacted</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#eaf3ff] text-[#155eef] text-[11px] font-semibold">
                Active
              </span>
            </div>
            <div className="mt-3 font-display text-5xl leading-none">
              {counts.in_progress + counts.contacted}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#eaf3ff] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#0c1017]/65">Geographic Reach</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-semibold text-[#155eef]">
                Countries
              </span>
            </div>
            <div className="mt-3 font-display text-5xl leading-none">{counts.countries}</div>
          </div>
        </div>

        {/* Filter Pills + Search */}
        <div className="mt-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: "all", label: `All (${counts.all})` },
                { id: "new", label: `New (${counts.new})` },
                { id: "in_progress", label: `In Progress (${counts.in_progress})` },
                { id: "contacted", label: `Contacted (${counts.contacted})` },
                { id: "archived", label: `Archived (${counts.archived})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`h-9 px-4 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  statusFilter === tab.id
                    ? "bg-[#0c1017] text-white font-semibold"
                    : "bg-white text-[#0c1017]/70 hover:text-[#0c1017]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, school, email, country..."
              className="w-full h-10 rounded-full bg-white border border-black/[0.08] px-4 text-xs focus:outline-none focus:border-[#155eef]"
            />
          </div>
        </div>

        {/* Main Master-Detail Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Inquiries List */}
          <div className="lg:col-span-7 space-y-2.5">
            {filteredInquiries.length === 0 ? (
              <div className="rounded-[28px] bg-white p-12 text-center">
                <div className="font-display text-3xl text-[#0c1017]">No inquiries found</div>
                <p className="mt-2 text-xs text-[#0c1017]/55 max-w-sm mx-auto">
                  Submit an inquiry through the website form or click &ldquo;+ Sample Inquiry&rdquo; above to test the workflow.
                </p>
              </div>
            ) : (
              filteredInquiries.map((item) => {
                const isSelected = selectedInquiry?.id === item.id;
                const st = STATUS_LABELS[item.status] || STATUS_LABELS.new;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedId(item.id);
                      setNotesDraft(item.admin_notes || "");
                    }}
                    className={`w-full text-left rounded-[22px] p-5 transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-white border-[#155eef] shadow-[0_12px_30px_rgba(21,94,239,0.1)]"
                        : "bg-white/80 hover:bg-white border-black/[0.05]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] ${st.cls}`}>
                          {st.label}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#f4f5f8] text-[10.5px] font-mono uppercase text-[#0c1017]/60">
                          {item.country}
                        </span>
                        <span className="text-[10.5px] font-mono uppercase text-[#0c1017]/40">
                          {item.language}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#0c1017]/45">
                        {new Date(item.created_at).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="mt-3 flex items-baseline justify-between gap-4">
                      <div>
                        <div className="text-[15.5px] font-semibold text-[#0c1017]">
                          {item.name}
                        </div>
                        <div className="text-[12.5px] text-[#0c1017]/65">
                          {item.school}
                          {item.role ? ` · ${item.role}` : ""}
                        </div>
                      </div>
                      <span className="text-xs text-[#155eef] font-medium truncate max-w-[180px]">
                        {item.email}
                      </span>
                    </div>

                    {item.message && (
                      <p className="mt-2.5 text-[12.5px] text-[#0c1017]/60 line-clamp-2">
                        {item.message}
                      </p>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Right: Selected Inquiry Detail Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-22">
            {selectedInquiry ? (
              <div className="rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_14px_40px_rgba(12,16,23,0.06)] border border-black/[0.05]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#155eef]">
                      Inquiry Details
                    </span>
                    <h2 className="mt-1 font-display text-3xl leading-tight text-[#0c1017]">
                      {selectedInquiry.name}
                    </h2>
                    <p className="text-xs text-[#0c1017]/60">
                      {selectedInquiry.school} · {selectedInquiry.country}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(selectedInquiry.id)}
                    className="h-8 px-3 rounded-full bg-red-50 hover:bg-red-100 text-red-600 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                </div>

                {/* Status Switcher */}
                <div className="mt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0c1017]/45 mb-2">
                    Inquiry Status
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {(["new", "in_progress", "contacted", "archived"] as InquiryStatus[]).map(
                      (stKey) => {
                        const active = selectedInquiry.status === stKey;
                        return (
                          <button
                            key={stKey}
                            onClick={() => handleStatusChange(selectedInquiry.id, stKey)}
                            className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                              active
                                ? "bg-[#0c1017] text-white border-[#0c1017]"
                                : "bg-[#f4f5f8] text-[#0c1017]/70 border-transparent hover:bg-black/[0.06]"
                            }`}
                          >
                            {STATUS_LABELS[stKey].label}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Contact Meta */}
                <dl className="mt-6 pt-5 border-t border-black/[0.07] grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-[#0c1017]/45">Email</dt>
                    <dd className="mt-0.5 font-medium text-[#155eef] break-all">
                      <a href={`mailto:${selectedInquiry.email}`}>{selectedInquiry.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#0c1017]/45">Role / Title</dt>
                    <dd className="mt-0.5 font-medium text-[#0c1017]">
                      {selectedInquiry.role || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#0c1017]/45">Country</dt>
                    <dd className="mt-0.5 font-medium text-[#0c1017]">
                      {selectedInquiry.country}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#0c1017]/45">Site Language</dt>
                    <dd className="mt-0.5 font-mono uppercase text-[#0c1017]">
                      {selectedInquiry.language}
                    </dd>
                  </div>
                </dl>

                {/* Message Body */}
                <div className="mt-6 pt-5 border-t border-black/[0.07]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0c1017]/45 mb-2">
                    Message
                  </div>
                  <div className="rounded-2xl bg-[#f4f5f8] p-4 text-[13.5px] leading-relaxed text-[#0c1017]/85 whitespace-pre-wrap">
                    {selectedInquiry.message || "No additional message provided."}
                  </div>
                </div>

                {/* Internal Admin Notes */}
                <div className="mt-6 pt-5 border-t border-black/[0.07]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0c1017]/45">
                      Internal Admin Notes
                    </span>
                    {notesSavedToast && (
                      <span className="text-[11px] font-semibold text-emerald-600">
                        ✓ Saved
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={3}
                    value={notesDraft}
                    onChange={(e) => setNotesDraft(e.target.value)}
                    placeholder="Add internal follow-up notes, call summary, or pilot schedule..."
                    className="w-full rounded-2xl bg-[#f4f5f8] border border-black/[0.08] p-3.5 text-xs focus:outline-none focus:bg-white focus:border-[#155eef] resize-none"
                  />
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={handleSaveNotes}
                      disabled={savingNotes}
                      className="h-9 px-4 rounded-full bg-[#0c1017] hover:bg-[#1a2232] text-white text-xs font-medium cursor-pointer disabled:opacity-50"
                    >
                      {savingNotes ? "Saving..." : "Save Notes"}
                    </button>

                    <a
                      href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
                        `Mobility Era Game — Pilot Inquiry (${selectedInquiry.school})`
                      )}`}
                      className="h-9 px-4 rounded-full bg-[#155eef] hover:bg-[#114fd1] text-white text-xs font-medium inline-flex items-center gap-1.5"
                    >
                      <span>Reply via Email</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] bg-white p-8 text-center text-xs text-[#0c1017]/45">
                Select an inquiry from the list to inspect details
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
