import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GithubPage() {
    return (
        <div className="container py-20 max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                    <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Mi Código Open Source</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Explora mis contribuciones, repositorios y proyectos personales en GitHub.
                </p>
                <Button asChild size="lg" className="rounded-full">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        Visitar Perfil Completo
                    </a>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Card 1: Pinned/Featured Repo Placeholder */}
                <Card className="hover:border-primary/50 transition-all cursor-pointer group">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            portfolio-premium
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription>Código fuente de este portfolio.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-yellow-400" /> TypeScript</span>
                            <span className="flex items-center gap-1"><Star className="h-4 w-4" /> 5</span>
                            <span className="flex items-center gap-1"><GitFork className="h-4 w-4" /> 2</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 2: Another Repo Placeholder */}
                <Card className="hover:border-primary/50 transition-all cursor-pointer group">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            java-microservices-template
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription>Template base para microservicios con Spring Boot 3.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-red-600" /> Java</span>
                            <span className="flex items-center gap-1"><Star className="h-4 w-4" /> 12</span>
                            <span className="flex items-center gap-1"><GitFork className="h-4 w-4" /> 4</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12 text-center bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Estadísticas de GitHub</h3>
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    <div>
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <div className="text-sm text-muted-foreground">Repositorios</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">120+</div>
                        <div className="text-sm text-muted-foreground">Contribuciones (2024)</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">JavaScript</div>
                        <div className="text-sm text-muted-foreground">Lenguaje Top</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
