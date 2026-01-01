"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
            {/* Clean Background - handled in globals.css now as grid pattern */}

            <div className="container relative z-10 flex flex-col items-center gap-8 max-w-4xl">

                {/* Avatar - Smaller, Cleaner, Approachable */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-primary/10 shadow-lg"
                >
                    <Image
                        src={profile.avatar}
                        alt={profile.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Headline - Direct Value Proposition */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                    >
                        Ingeniería de Software <br />
                        <span className="text-primary">Eficaz y Escalable</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
                    >
                        Desarrollador Full Stack especializado en entornos empresariales críticos.
                        Historial probado en <strong>Sectores Estratégicos</strong> (Banca, Defensa, Salud)
                        construyendo soluciones que el negocio necesita.
                    </motion.p>
                </div>

                {/* Key Skills - Minimalist Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2"
                >
                    {["Java", "Spring Boot", "Angular", "React", "Arquitectura Hexagonal"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm font-medium bg-secondary/50 text-secondary-foreground">
                            {tech}
                        </Badge>
                    ))}
                </motion.div>

                {/* Actions - Clear ROI */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                    <Button size="lg" className="rounded-md font-semibold px-8" asChild>
                        <Link href="/projects">
                            Ver Mis Resultados <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-md px-8 bg-background border-input hover:bg-accent" asChild>
                        <Link href="/contact">
                            <Mail className="mr-2 h-4 w-4" /> Hablemos
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
