"use client"

import { profile } from "@/data/profile"
import { motion } from "framer-motion"
import Image from "next/image"

export function TimelineSection() {
    return (
        <section className="container py-20">
            <h2 className="mb-14 text-3xl font-bold tracking-tight text-center md:text-4xl">Trayectoria Profesional</h2>
            <div className="relative border-l-2 border-primary/20 ml-6 md:ml-auto md:mx-auto md:max-w-4xl space-y-12 pb-10">
                {profile.timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative ml-8 md:ml-12 group"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[43px] md:-left-[59px] flex h-5 w-5 rounded-full bg-background border-4 border-primary shadow-sm mt-1.5 transition-colors group-hover:bg-primary" />

                        <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/10">
                            {/* Logo Container */}
                            <div className="relative h-16 w-16 min-w-[64px] rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
                                {item.logo ? (
                                    <Image
                                        src={item.logo}
                                        alt={item.company}
                                        width={64}
                                        height={64}
                                        className="object-contain h-full w-full"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-primary/10" />
                                )}
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                                    <span className="text-sm font-semibold text-primary/80 bg-primary/5 px-3 py-1 rounded-full w-fit mt-1 md:mt-0">
                                        {item.year}
                                    </span>
                                </div>

                                <p className="text-lg font-medium text-foreground/80">{item.company}</p>
                                <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
