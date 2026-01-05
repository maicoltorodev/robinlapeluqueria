import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookiesSection } from "@/components/cookies-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | ROBIN La Peluquería",
  description: "Política de cookies de Robin La Peluquería. Información sobre el uso de cookies en nuestro sitio web.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CookiesSection />
      <Footer />
    </main>
  )
}

