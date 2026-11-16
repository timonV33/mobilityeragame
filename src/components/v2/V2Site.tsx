"use client";

import V2Nav from "./Nav";
import V2Hero from "./Hero";
import V2Awards from "./Awards";
import V2WhatIs from "./WhatIs";
import V2Framework from "./Framework";
import { V2Why, V2Package } from "./WhyAndPackage";
import V2Media from "./Media";
import { V2Voices, V2Collaborate } from "./VoicesAndCollaborate";
import V2Footer from "./Footer";

export default function V2Site() {
  return (
    <div className="font-sans-v2 bg-white text-[#0c1017] min-h-screen flex flex-col antialiased selection:bg-[#155eef] selection:text-white">
      <V2Nav />
      <main className="flex-1">
        <V2Hero />
        <V2Awards />
        <V2WhatIs />
        <V2Framework />
        <V2Why />
        <V2Package />
        <V2Media />
        <V2Voices />
        <V2Collaborate />
      </main>
      <V2Footer />
    </div>
  );
}
