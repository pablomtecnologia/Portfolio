import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Geist not in <15
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Martinez | Desarrollador Full Stack",
  description: "Portfolio profesional de desarrollo software y soluciones tecnológicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen bg-background font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* @ts-ignore */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
