import Link from "next/link"
import { profile } from "@/data/profile"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            {profile.name}
                        </a>
                        . The source code is available on{" "}
                        <a
                            href={profile.github} // Assuming repo is on github profile
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <Link href={profile.github} target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href={profile.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
