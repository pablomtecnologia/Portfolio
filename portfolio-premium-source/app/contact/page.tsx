"use client"

import { ContactForm } from "@/components/contact-form"
import { profile } from "@/data/profile"
import { Mail, MapPin, Github, Linkedin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <div className="container py-10 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Contacto</h1>
                        <p className="text-xl text-muted-foreground">
                            Estoy disponible para trabajos freelance y consultoría.
                            Si buscas un partner tecnológico para tu próximo gran proyecto, contáctame.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                                    {profile.email}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Ubicación</p>
                                <p className="text-muted-foreground">{profile.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 space-y-4">
                        <h3 className="text-lg font-bold">Agenda una llamada</h3>
                        <p className="text-muted-foreground">¿Prefieres hablar directamente? Reserva un slot en mi calendario.</p>
                        <Button className="w-full md:w-auto" asChild>
                            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                                <Calendar className="mr-2 h-4 w-4" />
                                Reservar llamada de 30 min
                            </a>
                        </Button>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
