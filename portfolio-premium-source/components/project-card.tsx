"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/data/projects"

interface ProjectCardProps {
    project: typeof projects[0]
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full group border-0 bg-transparent shadow-none">
            {/* Premium Image Container with Glassmorphism Overlay */}
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-sm">
                <Image
                    src={project.coverImage || "/abstract-code.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-md border-white/10">
                        {project.category}
                    </Badge>
                </div>
            </div>

            <CardHeader className="px-1 pt-4 pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="px-1 flex-1">
                <CardDescription className="line-clamp-2 text-base text-muted-foreground/80">
                    {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs bg-background/50">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="px-1 gap-2 pt-2">
                <Button asChild className="w-full rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    <Link href={`/projects/${project.slug}`}>
                        Ver Caso <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
