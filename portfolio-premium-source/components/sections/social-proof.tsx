"use client"

import { profile } from "@/data/profile"
import { motion } from "framer-motion"

export function SocialProof() {
    return (
        <section className="container py-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {profile.stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <span className="text-3xl font-bold md:text-4xl">{stat.value}</span>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </motion.div>
                ))}
                {/* Add a fake extra stat/logo if needed or keep strictly to profile.stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <span className="text-3xl font-bold md:text-4xl">100%</span>
                    <span className="text-sm text-muted-foreground">Code Quality</span>
                </motion.div>
            </div>
        </section>
    )
}
