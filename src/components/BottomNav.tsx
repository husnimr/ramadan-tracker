"use client";

import { Home, BookOpen, User, Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", icon: Home, href: "/" },
        { label: "Quran", icon: BookOpen, href: "/quran" },
        { label: "Qibla", icon: Compass, href: "/qibla" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none">
            <nav className="w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-none px-6 py-3 pb-5 pointer-events-auto flex items-center justify-around transition-colors duration-300">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors duration-300 group ${isActive ? "text-violet-600 dark:text-primary" : "text-slate-400 dark:text-muted-foreground hover:text-violet-500 dark:hover:text-primary"}`}
                        >
                            <item.icon
                                className={`w-6 h-6 transition-all duration-300 ${isActive ? "scale-110 fill-violet-600/20 dark:fill-primary/20" : "group-hover:scale-105"}`}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span className={`text-[10px] font-semibold transition-all duration-300 ${isActive ? "scale-100" : "scale-95 opacity-80"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
