"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme } = useTheme()

    // Simplified toggle for now without dropdown if dropdown is not available yet
    // actually, let's just make it a toggle button that cycles since I don't have dropdown-menu primitive yet
    // or I can implement a simple one.
    // The user requested "Modo oscuro/claro (persistente)".

    return (
        <Button variant="ghost" size="icon" onClick={() => {
            const root = window.document.documentElement;
            const isDark = root.classList.contains('dark');
            setTheme(isDark ? "light" : "dark");
        }}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
