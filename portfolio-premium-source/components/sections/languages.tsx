"use client"

import { profile } from "@/data/profile"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LanguagesSection() {
    return (
        <section className="container py-12">
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-center">Idiomas</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {profile.languages.map((lang, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30 border border-border min-w-[120px]">
                        <span className="font-bold text-lg">{lang.language}</span>
                        <Badge variant="secondary" className="text-sm">{lang.level}</Badge>
                    </div>
                ))}
            </div>
        </section>
    )
}
