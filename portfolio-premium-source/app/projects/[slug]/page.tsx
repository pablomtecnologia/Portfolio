import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectPageProps {
    params: {
        slug: string
    }
}

// Generate static params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const resolvedParams = await params
    const project = projects.find((p) => p.slug === resolvedParams.slug)

    if (!project) {
        notFound()
    }

    return (
        <article className="container py-10 md:py-20">
            <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                <Link href="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos</Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                    <p className="text-xl text-muted-foreground">{project.description}</p>

                    <div className="space-y-6">
                        <section>
                            <h3 className="text-2xl font-bold mb-4">El Problema</h3>
                            <p className="text-muted-foreground/90 leading-relaxed">{project.problem}</p>
                        </section>
                        <section>
                            <h3 className="text-2xl font-bold mb-4">La Solución</h3>
                            <p className="text-muted-foreground/90 leading-relaxed">{project.solution}</p>
                        </section>
                        <section>
                            <h3 className="text-2xl font-bold mb-4">Resultados</h3>
                            <Card className="bg-primary/5 border-primary/10">
                                <CardContent className="pt-6">
                                    <p className="font-medium text-lg text-primary">{project.result}</p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-6">
                        <div>
                            <h4 className="font-semibold mb-2">Links</h4>
                            <div className="flex flex-col gap-2">
                                <Button asChild className="w-full">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        Ver Demo <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="outline" asChild className="w-full">
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                        Ver Código <Github className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Features</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Año</h4>
                            <p className="text-muted-foreground">{project.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
