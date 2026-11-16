"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/navbar-02-utils/logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="text-left mb-6">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Features
          </a>
          <a
            href="#how-to-play"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            How to Play
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Contact Us
          </a>
          <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-border">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
