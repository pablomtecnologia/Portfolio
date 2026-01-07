"use client"

import { profile } from "@/data/profile"
import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

export function EducationSection() {
    return (
        <section className="container py-20 relative overflow-hidden" id="education">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Formación Académica</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {profile.education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-card hover:bg-muted/50 p-6 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-xs font-bold text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/10">
                                    {item.year}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                    {item.degree}
                                </h3>
                                <p className="text-muted-foreground font-medium text-base border-l-2 border-primary/20 pl-3">
                                    {item.school}
                                </p>
                                {item.location && (
                                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground/70">
                                        <MapPin className="w-4 h-4" />
                                        <span>{item.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
