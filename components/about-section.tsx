"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { FramedImage } from "@/components/ui/framed-image"
import { PremiumCard } from "@/components/ui/premium-card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative Elements - optimized blur */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-background/10 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-background/10 rounded-full blur-2xl opacity-15 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-24 text-center">
            <ScrollAnimation>
              <p className="text-xs tracking-[0.3em] uppercase text-background/60 font-semibold mb-6">El Estudio</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
                <span className="inline-block text-background animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                  Un Refugio
                </span>
                <br />
                <span className="inline-block text-background/90 animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                  Para La Belleza
                </span>
              </h2>
            </ScrollAnimation>
          </div>

          {/* Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Main large image - Left */}
            <div className="lg:col-span-8">
              <ScrollAnimation delay={200}>
                <FramedImage
                  src="/estudio-1.png" 
                  alt="Robin La Peluquería - Estudio 1" 
                  borderSize={8}
                  borderColor="background"
                  height="h-[400px] lg:h-[500px]"
                  priority
                />
              </ScrollAnimation>
            </div>

            {/* Smaller images grid - Right */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
                {[2, 3, 4, 5].map((num) => (
                  <ScrollAnimation key={num} delay={(num + 1) * 100}>
                    <FramedImage
                      src={`/estudio-${num}.png`}
                      alt={`Robin La Peluquería - Estudio ${num}`}
                      borderSize={6}
                      borderColor="background"
                      height="h-[200px] lg:h-[240px]"
                    />
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>

          {/* Content Row - Below */}
          <ScrollAnimation delay={300}>
            <div className="space-y-10 lg:space-y-12">
              
              {/* Premium Stats Card */}
              <PremiumCard>
                    <div className="grid grid-cols-3 gap-6 lg:gap-8">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-background">10+</div>
                        <div className="text-xs tracking-[0.15em] uppercase text-background/70 font-medium">Años de Experiencia</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-background">5K+</div>
                        <div className="text-xs tracking-[0.15em] uppercase text-background/70 font-medium">Clientes Felices</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-background">15+</div>
                        <div className="text-xs tracking-[0.15em] uppercase text-background/70 font-medium">Expertos</div>
                      </div>
                    </div>
              </PremiumCard>

              {/* Description */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="h-px w-20 bg-background/30 mx-auto"></div>
                <p className="text-lg md:text-xl lg:text-2xl text-background/90 leading-relaxed font-light text-center">
                  Un espacio diseñado para la creatividad y la elegancia, donde cada detalle ha sido cuidadosamente pensado para brindarte una experiencia única. Nuestro estudio combina diseño contemporáneo con comodidad excepcional.
                </p>
              </div>

            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
