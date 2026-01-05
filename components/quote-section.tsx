"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

export function QuoteSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-background/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-background/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center justify-center py-8 md:py-12">

            {/* Premium Card */}
            <ScrollAnimation delay={100}>
              <div className="relative w-full max-w-5xl">
                {/* Card Container */}
                <div className="relative bg-background/5 backdrop-blur-sm border border-background/20 rounded-lg md:rounded-xl lg:rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/5 rounded-lg md:rounded-xl lg:rounded-2xl pointer-events-none" />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl lg:rounded-2xl border border-background/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6 md:space-y-8">
                    {/* Main Quote */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] px-4">
                      <span className="inline-block text-background animate-slide-in-left animate-float-text" style={{ animationDelay: "0.2s" }}>
                        Donde el estilo
                      </span>
                      <br />
                      <span className="inline-block text-background/90 animate-slide-in-left animate-float-text" style={{ animationDelay: "0.4s" }}>
                        encuentra
                      </span>
                      <br />
                      <span className="inline-block text-background/80 animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.6s" }}>
                        la elegancia
                      </span>
                    </h2>

                    {/* Decorative Line */}
                    <ScrollAnimation delay={300}>
                      <div className="flex items-center justify-center gap-4 pt-2">
                        <div className="h-px w-16 md:w-24 bg-background/30" />
                        <div className="w-2 h-2 rounded-full bg-background/40" />
                        <div className="h-px w-16 md:w-24 bg-background/30" />
                      </div>
                    </ScrollAnimation>

                    {/* Subtitle */}
                    <ScrollAnimation delay={400}>
                      <p className="text-sm md:text-base tracking-[0.2em] uppercase text-background/60 font-light max-w-2xl mx-auto">
                        Cada detalle cuenta, cada momento es único
                      </p>
                    </ScrollAnimation>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-background/20" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-background/20" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-background/20" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-background/20" />
                </div>
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </section>
  )
}
