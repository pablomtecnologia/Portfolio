"use client"

import { useState, useMemo } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

export default function ProjectsPage() {
    const [search, setSearch] = useState("")
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        projects.forEach(p => p.tags.forEach(t => tags.add(t)))
        return Array.from(tags).sort()
    }, [])

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase())
        const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true
        return matchesSearch && matchesTag
    })

    return (
        <div className="container py-10 md:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter">Proyectos</h1>
                    <p className="text-muted-foreground mt-2">Explora mis trabajos recientes y casos de estudio.</p>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar proyectos..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
                <Button
                    variant={selectedTag === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(null)}
                >
                    Todos
                </Button>
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h3 className="text-xl font-bold">No se encontraron proyectos</h3>
                    <p className="text-muted-foreground">Intenta con otra búsqueda o filtro.</p>
                    <Button
                        variant="link"
                        onClick={() => { setSearch(""); setSelectedTag(null) }}
                        className="mt-4"
                    >
                        Limpiar filtros
                    </Button>
                </div>
            )}
        </div>
    )
}
