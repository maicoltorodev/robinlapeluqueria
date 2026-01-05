import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacidadSection } from "@/components/privacidad-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | ROBIN La Peluquería",
  description: "Política de privacidad de Robin La Peluquería. Conoce cómo protegemos y utilizamos tu información personal.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PrivacidadSection />
      <Footer />
    </main>
  )
}

