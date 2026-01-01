"use client"

import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { Printer, Download, Copy, Check, Mail, Github, Linkedin } from "lucide-react"
import { useState } from "react"

export default function CVPage() {
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="container py-10 md:py-20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 print:hidden">
                <div>
                    <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
                    <p className="text-muted-foreground">{profile.name} - {profile.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="outline" onClick={() => window.print()}>
                        <Printer className="mr-2 h-4 w-4" /> Imprimir
                    </Button>
                    <Button asChild>
                        <a href="/cv.pdf" download>
                            <Download className="mr-2 h-4 w-4" /> Download PDF
                        </a>
                    </Button>
                </div>
            </div>

            {/* HTML Version (Printable) */}
            <div className="bg-background border rounded-lg p-8 md:p-12 shadow-sm space-y-8 print:shadow-none print:border-none print:p-0">
                <header className="flex justify-between items-start border-b pb-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2">{profile.name}</h1>
                        <h2 className="text-xl text-primary font-medium">{profile.role}</h2>
                        <p className="text-muted-foreground mt-4 max-w-md">{profile.bio.short}</p>
                    </div>
                    <div className="text-right space-y-2 text-sm">
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-muted-foreground">{profile.email}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6 print:hidden" onClick={handleCopyEmail}>
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            </Button>
                        </div>
                        <p>{profile.location}</p>
                        <a href={profile.linkedin} className="block hover:underline">{profile.linkedin}</a>
                        <a href={profile.github} className="block hover:underline">{profile.github}</a>
                    </div>
                </header>

                <section>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-2">Experiencia</h3>
                    <div className="space-y-6">
                        {profile.timeline.map((job, i) => (
                            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4">
                                <span className="text-sm text-muted-foreground">{job.year}</span>
                                <div>
                                    <h4 className="font-bold">{job.role}</h4>
                                    <p className="font-medium text-primary mb-2">{job.company}</p>
                                    <p className="text-sm text-muted-foreground/90">{job.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-2">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {profile.skills.map(cat => (
                            <div key={cat.category}>
                                <h4 className="font-semibold text-sm mb-2">{cat.category}</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    {cat.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b pb-2">Educación</h3> {/* Placeholder since not in profile.ts but requested */}
                    <div className="grid md:grid-cols-[200px_1fr] gap-4">
                        <span className="text-sm text-muted-foreground">2015 - 2019</span>
                        <div>
                            <h4 className="font-bold">Computer Science Degree</h4>
                            <p className="font-medium text-primary mb-2">University of Technology</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
