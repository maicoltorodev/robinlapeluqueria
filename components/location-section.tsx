"use client"

import { MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GOOGLE_MAPS_URL } from "@/lib/constants"
import { FramedImage } from "@/components/ui/framed-image"

export function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
            <ScrollAnimation>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold mb-6">Ubicación</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
                <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                  Visítanos
                </span>
                <br />
                <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                  En Nuestro Estudio
                </span>
              </h2>
            </ScrollAnimation>
          </div>

          {/* Location Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Address Info */}
            <ScrollAnimation delay={200}>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Dirección</h3>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Cl. 118 #15-45
                      <br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>

                {/* Facade Image */}
                <FramedImage
                  src="/fachada.png"
                  alt="Robin La Peluquería - Fachada"
                  borderSize={8}
                  borderColor="foreground"
                  height="h-[300px] lg:h-[400px]"
                />

                <div className="pt-8 border-t border-border">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold mb-4">Cómo Llegar</h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Estamos ubicados al lado del centro comercial Unicentro, fácilmente accesible en transporte público y privado. 
                    Contamos con estacionamiento disponible para tu comodidad.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors font-medium"
                  >
                    <span>Abrir en Google Maps</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Map */}
            <ScrollAnimation delay={300}>
              <div className="relative h-[400px] lg:h-[500px] bg-muted/30 border border-border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4169103901404!2d-74.0461535241866!3d4.6974044416843945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab1440b0d35%3A0x64ec7624800ab4b!2sRobin%20La%20Peluquer%C3%ADa!5e0!3m2!1ses-419!2sco!4v1767646751861!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Ubicación de Robin La Peluquería"
                />
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </section>
  )
}

