"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-background/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-background/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 lg:mb-24 text-center">
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
                <div className="relative h-[400px] lg:h-[500px] group cursor-pointer">
                  {/* Skeleton loader mientras carga */}
                  <div className="absolute inset-0 bg-muted/30 animate-pulse" />
                  <div className="absolute inset-0 border-8 border-background/30 transition-all duration-500 group-hover:border-background/50 shadow-2xl">
                    <div className="absolute inset-[8px] bg-gradient-to-br from-muted/50 to-background overflow-hidden">
                      <Image 
                        src="/estudio-1.png" 
                        alt="Robin La Peluquería - Estudio 1" 
                        fill 
                        loading="eager"
                        className="object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" 
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/10 transition-opacity duration-500 group-hover:opacity-0" />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Smaller images grid - Right */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
                {[2, 3, 4, 5].map((num) => (
                  <ScrollAnimation key={num} delay={(num + 1) * 100}>
                    <div className="relative h-[200px] lg:h-[240px] group cursor-pointer">
                      {/* Skeleton loader mientras carga */}
                      <div className="absolute inset-0 bg-muted/30 animate-pulse" />
                      <div className="absolute inset-0 border-6 border-background/30 transition-all duration-500 group-hover:border-background/50 shadow-xl">
                        <div className="absolute inset-[6px] bg-gradient-to-br from-muted/50 to-background overflow-hidden">
                          <Image 
                            src={`/estudio-${num}.png`}
                            alt={`Robin La Peluquería - Estudio ${num}`}
                            fill
                            loading="lazy"
                            className="object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" 
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/10 transition-opacity duration-500 group-hover:opacity-0" />
                          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>

          {/* Content Row - Below */}
          <ScrollAnimation delay={300}>
            <div className="space-y-10 lg:space-y-12">
              
              {/* Premium Stats Card - Same style as quote section */}
              <div className="relative w-full max-w-5xl mx-auto">
                <div className="relative bg-background/5 backdrop-blur-sm border border-background/20 rounded-lg md:rounded-xl lg:rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/5 rounded-lg md:rounded-xl lg:rounded-2xl pointer-events-none" />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl lg:rounded-2xl border border-background/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] pointer-events-none" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-background/20" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-background/20" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-background/20" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-background/20" />

                  {/* Content */}
                  <div className="relative z-10">
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
                  </div>
                </div>
              </div>

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
