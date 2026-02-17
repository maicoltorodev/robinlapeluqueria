"use client"

import { MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GOOGLE_MAPS_URL, WAZE_URL } from "@/lib/constants"
import { FramedImage } from "@/components/ui/framed-image"
import Image from "next/image"

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
              <div className="space-y-4">
                <div className="relative h-[400px] lg:h-[500px] bg-muted/30 border-4 border-foreground rounded-sm overflow-hidden shadow-2xl">
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

                <div className="flex items-center justify-center gap-6 pt-2">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 bg-background border-2 border-foreground rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    title="Ver en Google Maps"
                  >
                    <img src="https://www.google.com/images/branding/product/ico/maps15_bnuw3a_32dp.ico" alt="Google Maps" className="w-7 h-7 group-hover:invert-0 transition-all" />
                  </a>
                  <a
                    href={WAZE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 bg-background border-2 border-foreground rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    title="Ir con Waze"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:invert transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#33CCFF"
                        d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813-.298.025-.547.224-.547.522-.05.82.82 2.31 2.012 3.502.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528 2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21 1.64-.546 2.36-2.409 1.763-3.924a12.84 12.84 0 0 0 1.838-1.465 10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.899 10.899 0 0 0 13.218 0zm0 1.217c2.558 0 4.967.994 6.78 2.807a9.525 9.525 0 0 1 2.807 6.78A9.526 9.526 0 0 1 20 17.585a9.647 9.647 0 0 1-6.78 2.807h-2.46a3.008 3.008 0 0 0-2.93-2.41 3.03 3.03 0 0 0-2.534 1.367v.024a8.945 8.945 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.858 2.858 0 0 0 1.441-.846 2.959 2.959 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861 1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.192 1.192 0 0 0-1.191 1.192 1.192 1.192 0 0 0 1.192 1.193A1.192 1.192 0 0 0 12 8.395a1.192 1.192 0 0 0-1.192-1.192zm7.204 0a1.192 1.192 0 0 0-1.192 1.192 1.192 1.192 0 0 0 1.192 1.193 1.192 1.192 0 0 0 1.192-1.193 1.192 1.192 0 0 0-1.192-1.192zm-7.377 4.769a.596.596 0 0 0-.546.845 4.813 4.813 0 0 0 4.346 2.757 4.77 4.77 0 0 0 4.347-2.757.596.596 0 0 0-.547-.845h-.025a.561.561 0 0 0-.521.348 3.59 3.59 0 0 1-3.254 2.061 3.591 3.591 0 0 1-3.254-2.061.64.64 0 0 0-.546-.348z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </section>
  )
}

