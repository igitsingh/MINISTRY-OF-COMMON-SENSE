"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, Compass, Key } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portal", href: "/portal", icon: Compass },
  { name: "Access", href: "/access", icon: Key },
];

export function CapsuleNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 w-max pointer-events-auto">
      <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-black/80 p-1.5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                isActive ? "text-black" : "text-neutral-400 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="capsule-nav-indicator"
                  className="absolute inset-0 rounded-full bg-white shadow-lg pointer-events-none"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2 pointer-events-none">
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline-block">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
