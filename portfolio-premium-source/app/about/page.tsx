"use client"

import { profile } from "@/data/profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="container py-10 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Bio Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Sobre mí</h1>
                    <div className="prose dark:prose-invert text-muted-foreground text-lg">
                        <p className="whitespace-pre-line">{profile.bio.long}</p>
                    </div>

                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="/contact">Contactar</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/cv.pdf" download>
                                Descargar CV <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Info & Stats */}
                <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        {profile.stats.map((stat, i) => (
                            <Card key={i}>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Stack Tabs */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Stack Tecnológico</h3>
                        <Tabs defaultValue="Frontend" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
                                {profile.skills.map((skill) => (
                                    <TabsTrigger key={skill.category} value={skill.category}>{skill.category}</TabsTrigger>
                                ))}
                            </TabsList>
                            {profile.skills.map((skill) => (
                                <TabsContent key={skill.category} value={skill.category} className="mt-4">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="flex flex-wrap gap-2">
                                                {skill.tags.map((tag) => (
                                                    <Badge key={tag} className="text-base px-4 py-1">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Achievements Section / Values */}
            <div className="mt-20">
                <h2 className="mb-10 text-3xl font-bold tracking-tight text-center">Valores</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { title: "Calidad", desc: "Código limpio, testeado y mantenible es mi estándar base." },
                        { title: "Comunicación", desc: "Transparencia total y actualizaciones constantes con el equipo/cliente." },
                        { title: "Innovación", desc: "Siempre buscando la mejor herramienta para resolver el problema de forma eficiente." }
                    ].map((val, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <CardTitle>{val.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {val.desc}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
