"use client"

import { profile } from "@/data/profile"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import * as Icons from "lucide-react"

export function ServicesSection() {
    return (
        <section id="services" className="relative py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-10"
                style={{ backgroundImage: "url('/network-bg.png')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background" />

            <div className="container relative z-10">
                <h2 className="mb-10 text-3xl font-bold tracking-tight text-center md:text-4xl text-foreground">
                    Mis Servicios
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {profile.services.map((service, index) => {
                        // @ts-ignore
                        const Icon = Icons[service.icon] || Icons.Code

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-muted/50 bg-background/60 backdrop-blur-md transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
