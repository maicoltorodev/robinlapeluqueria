"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { WHATSAPP_URL } from "@/lib/constants"

export function BookingSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column - CTA */}
            <div className="lg:col-span-7 space-y-10">
            <ScrollAnimation>
            <div className="space-y-4 sm:space-y-6">
                <p className="text-xs tracking-[0.3em] uppercase text-background/60 font-semibold">Contáctanos</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter leading-[0.9]">
                  <span className="inline-block text-background animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                    Comienza Tu
                  </span>
                  <br />
                  <span className="inline-block text-background animate-slide-in-left animate-float-text" style={{ animationDelay: "0.3s" }}>
                    Transformación
                  </span>
                  <br />
                  <span className="inline-block text-background/50 animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.5s" }}>
                    Hoy
                  </span>
              </h2>
            </div>

              <div className="space-y-6 max-w-2xl mt-8 md:mt-12">
                <p className="text-lg md:text-xl lg:text-2xl text-background/80 leading-relaxed font-light">
                  Reserva tu cita y ven a vivir una experiencia única. Estamos aquí para hacerte sentir increíble y ayudarte a descubrir tu mejor versión.
            </p>

            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-xs tracking-[0.2em] uppercase font-semibold px-8 sm:px-10 py-6 sm:py-7 mt-6 w-full sm:w-auto touch-manipulation"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Reservar Cita
            </Button>
              </div>
            </ScrollAnimation>
          </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-5">
              <ScrollAnimation delay={200}>
              <div className="space-y-6 sm:space-y-8 bg-background/5 p-6 sm:p-8 lg:p-12 border border-background/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-background/20">
                    <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-background/80" />
                    </div>
                <div>
                      <h3 className="text-xs tracking-wider uppercase font-semibold mb-2 text-background/60">Ubicación</h3>
                  <p className="text-background leading-relaxed">
                        Cl. 118 #15-45, Bogotá.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-background/20">
                    <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-background/80" />
                    </div>
                <div>
                      <h3 className="text-xs tracking-wider uppercase font-semibold mb-2 text-background/60">Teléfono</h3>
                  <p className="text-background">+57 310 8757670</p>
                </div>
              </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-background/80" />
                    </div>
                <div>
                      <h3 className="text-xs tracking-wider uppercase font-semibold mb-2 text-background/60">Horarios</h3>
                  <p className="text-background leading-relaxed">
                        Lunes a Sábado: 9:00 a.m. - 6:00 p.m.
                    <br />
                        Domingo: Cerrado.
                  </p>
                    </div>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
