"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Palette, Code, Rocket, Headphones } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Descubrimiento",
        icon: Lightbulb,
        description: "Análisis profundo de requerimientos, objetivos de negocio y necesidades del usuario final."
    },
    {
        id: 2,
        title: "Diseño (UI/UX)",
        icon: Palette,
        description: "Creación de wireframes y prototipos de alta fidelidad centrados en la usabilidad y la marca."
    },
    {
        id: 3,
        title: "Desarrollo",
        icon: Code,
        description: "Implementación de código limpio, escalable y testado utilizando las mejores prácticas del stack."
    },
    {
        id: 4,
        title: "Despliegue",
        icon: Rocket,
        description: "Configuración de CI/CD, optimización de rendimiento y puesta en producción segura."
    },
    {
        id: 5,
        title: "Soporte",
        icon: Headphones,
        description: "Mantenimiento continuo, monitoreo y actualizaciones para asegurar la longevidad del producto."
    }
]

export function ProcessSection() {
    const [activeStep, setActiveStep] = useState(1)

    return (
        <section className="container py-20 bg-muted/20">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-center md:text-4xl">Mi Proceso de Trabajo</h2>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                {/* Steps List */}
                <div className="space-y-4">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={cn(
                                "p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4",
                                activeStep === step.id ? "bg-card border-primary shadow-lg scale-105" : "bg-transparent border-transparent hover:bg-muted"
                            )}
                            onClick={() => setActiveStep(step.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === "Enter") setActiveStep(step.id) }}
                        >
                            <div className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full font-bold",
                                activeStep === step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            )}>
                                {step.id}
                            </div>
                            <span className={cn("font-medium text-lg", activeStep === step.id && "text-primary")}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Step Details Display */}
                <div className="h-full min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <Card>
                                <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
                                    {(() => {
                                        const StepIcon = steps[activeStep - 1].icon
                                        return <StepIcon className="h-16 w-16 text-primary mb-4" />
                                    })()}
                                    <h3 className="text-2xl font-bold">{steps[activeStep - 1].title}</h3>
                                    <p className="text-muted-foreground text-lg">
                                        {steps[activeStep - 1].description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
