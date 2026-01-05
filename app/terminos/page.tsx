import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TerminosSection } from "@/components/terminos-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | ROBIN La Peluquería",
  description: "Términos y condiciones de uso de los servicios de Robin La Peluquería.",
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TerminosSection />
      <Footer />
    </main>
  )
}

