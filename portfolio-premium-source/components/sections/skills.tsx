"use client"

import { profile } from "@/data/profile"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function SkillsSection() {
    return (
        <section className="container py-20">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center md:text-4xl">Habilidades Tecnológicas</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {profile.skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4 rounded-lg border p-6 bg-card text-card-foreground shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
