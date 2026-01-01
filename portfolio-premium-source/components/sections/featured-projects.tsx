"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function FeaturedProjects() {
    const [filter, setFilter] = useState("Todos")

    // Categorías traducidas
    const categories = ["Todos", "Corporativo", "Tecnología", "Web"]

    const filtered = filter === "Todos"
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <section id="projects" className="container py-24 space-y-12">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
                <p className="text-muted-foreground max-w-2xl">
                    Selección de casos de éxito donde he aportado valor técnico y de negocio.
                    Desde plataformas gubernamentales hasta sistemas de defensa.
                </p>
            </div>

            {/* Filter Tabs - Simple & Clean */}
            <div className="flex justify-center flex-wrap gap-2">
                {categories.map(cat => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "ghost"}
                        onClick={() => setFilter(cat)}
                        className="rounded-full px-6"
                        size="sm"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}
