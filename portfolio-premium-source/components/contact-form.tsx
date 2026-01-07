import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus("idle")

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("https://formsubmit.co/ajax/pablomtecnologia@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.user_name,
                    email: data.user_email,
                    subject: data.subject,
                    message: data.message,
                    _template: 'table', // Cleaner email format
                    _subject: `Nuevo mensaje Portfolio: ${data.subject}`
                })
            })

            if (!response.ok) throw new Error("Error sending message")

            setStatus("success")
            e.currentTarget.reset()
        } catch (error) {
            console.error(error)
            setStatus("error")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>
                    ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                        <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                        <p className="text-muted-foreground">Gracias por contactarme. Te responderé lo antes posible.</p>
                        <Button variant="outline" onClick={() => setStatus("idle")}>Enviar otro mensaje</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="user_name">Nombre</Label>
                                <Input id="user_name" name="user_name" placeholder="Tu nombre" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="user_email">Email</Label>
                                <Input id="user_email" name="user_email" type="email" placeholder="tu@email.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Asunto</Label>
                            <Input id="subject" name="subject" placeholder="Proyecto web..." required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" name="message" placeholder="Cuéntame sobre tu proyecto..." className="min-h-[120px]" required />
                        </div>
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                                <AlertCircle className="h-4 w-4" />
                                Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                            </div>
                        )}
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : "Enviar mensaje"}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    )
}
