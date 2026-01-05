"use client"

import { Scissors, Palette, Sparkles, User, Hand, Circle, Heart } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Scissors,
    number: "01",
    title: "Corte y Estilo",
    description: "Cortes que se adaptan a tu personalidad y estilo de vida. Trabajamos con técnicas modernas y clásicas para crear el look perfecto para ti.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Coloración",
    description: "Desde mechas sutiles hasta transformaciones completas. Utilizamos productos de la más alta calidad para lograr el color de tus sueños.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Tratamientos",
    description: "Recupera la salud y el brillo de tu cabello con nuestros tratamientos especializados. Nutrición, hidratación y reparación profunda.",
  },
  {
    icon: Hand,
    number: "04",
    title: "Masajes",
    description: "Relájate y rejuvenece con nuestros masajes terapéuticos y relajantes en un espacio completamente adecuado para tu tranquilidad. Perfectos para aliviar tensiones y mejorar tu bienestar general.",
  },
  {
    icon: Circle,
    number: "05",
    title: "Uñas",
    description: "Manicure y pedicure profesional con las últimas tendencias en esmaltado y decoración. Cuidamos cada detalle para que tus uñas luzcan perfectas.",
  },
  {
    icon: Heart,
    number: "06",
    title: "Cosmetología",
    description: "Tratamientos faciales y cuidado de la piel con productos premium. Limpieza profunda, hidratación y rejuvenecimiento para una piel radiante.",
  },
  {
    icon: User,
    number: "07",
    title: "Asesoría Personalizada",
    description: "Te escuchamos y te asesoramos para encontrar el estilo que mejor se adapta a ti. Tu satisfacción es nuestra prioridad.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="mb-20 lg:mb-32 space-y-6 max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">Nuestros Servicios</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
              <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                Experiencia
              </span>
              <br />
              <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                Completa
              </span>
          </h2>
        </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
            <div
                className="group relative bg-background border border-border/50 hover:border-foreground/30 transition-all duration-700 ease-out overflow-hidden"
            >
                {/* Premium gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/0 group-hover:from-foreground/2 group-hover:via-foreground/1 group-hover:to-foreground/0 transition-all duration-700 pointer-events-none" />
                
                {/* Subtle shadow that intensifies on hover */}
                <div className="absolute inset-0 shadow-sm group-hover:shadow-xl transition-shadow duration-700 pointer-events-none" />
                
                {/* Icon Watermark Background */}
                <div className="absolute top-10 right-10 text-muted-foreground/12 group-hover:text-muted-foreground/20 transition-all duration-700 select-none">
                  <service.icon className="w-36 h-36 lg:w-44 lg:h-44" strokeWidth={0.3} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 lg:p-14 space-y-8">
                  <div className="flex items-start gap-6">
                    {/* Icon Circle - Premium style */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                        <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-foreground/20 blur-xl group-hover:bg-foreground/30 transition-all duration-500 -z-10" />
                    </div>
                    
                    <div className="flex-1 pt-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 group-hover:text-foreground transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground/80 leading-relaxed text-base md:text-lg lg:text-xl font-light">
                    {service.description}
                  </p>
                    </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
