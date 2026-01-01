"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { profile } from "@/data/profile"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Servicios", href: "/#services" }, // Anchor link for simplicity on home
    { name: "Contacto", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight">{profile.name}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Button asChild size="sm" className="hidden lg:flex">
                        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" /> CV
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 w-full bg-background border-b shadow-lg md:hidden h-[calc(100vh-4rem)] overflow-y-auto"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-border/50",
                                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-4">
                                <Button asChild className="w-full">
                                    <Link href="/cv" onClick={() => setIsOpen(false)}>
                                        Descargar CV
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
