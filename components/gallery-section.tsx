"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import useEmblaCarousel from "embla-carousel-react"

const galleryImages = [
  {
    src: "/monita.png",
    alt: "Trabajo de peluquería - Estilo 1",
  },
  {
    src: "/monita2.png",
    alt: "Trabajo de peluquería - Estilo 2",
  },
  {
    src: "/monita3.png",
    alt: "Trabajo de peluquería - Estilo 3",
  },
  {
    src: "/monita4.png",
    alt: "Trabajo de peluquería - Estilo 4",
  },
  {
    src: "/monito1.png",
    alt: "Trabajo de peluquería - Estilo 5",
  },
  {
    src: "/monita6.png",
    alt: "Trabajo de peluquería - Estilo 6",
  },
  {
    src: "/monita7.png",
    alt: "Trabajo de peluquería - Estilo 7",
  },
  {
    src: "/castaña.png",
    alt: "Trabajo de peluquería - Coloración",
  },
  {
    src: "/castaña2.png",
    alt: "Trabajo de peluquería - Coloración 2",
  },
]

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      window.dispatchEvent(new CustomEvent('resetGalleryAutoplay'))
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      window.dispatchEvent(new CustomEvent('resetGalleryAutoplay'))
    }
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  // Iniciar desde un índice aleatorio al cargar
  useEffect(() => {
    if (!emblaApi) return
    
    const randomIndex = Math.floor(Math.random() * galleryImages.length)
    emblaApi.scrollTo(randomIndex, false) // false = sin animación para que sea instantáneo
  }, [emblaApi])

  // Auto-scroll continuo cada 3 segundos
  useEffect(() => {
    if (!emblaApi) return

    let autoplayInterval: NodeJS.Timeout | null = null

    const startAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      
      autoplayInterval = setInterval(() => {
        emblaApi.scrollNext()
      }, 3000) // 3 segundos para movimiento más fluido
    }

    const resetAutoplay = () => {
      startAutoplay()
    }

    startAutoplay()

    const handleResetEvent = () => {
      resetAutoplay()
    }

    const handlePointerDown = () => {
      resetAutoplay()
    }

    emblaApi.on("pointerDown", handlePointerDown)
    emblaApi.on("select", () => {
      resetAutoplay()
    })
    window.addEventListener("resetGalleryAutoplay", handleResetEvent)

    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      emblaApi.off("pointerDown", handlePointerDown)
      window.removeEventListener("resetGalleryAutoplay", handleResetEvent)
    }
  }, [emblaApi])

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="mb-20 lg:mb-32 space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">Portafolio</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl">
              <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                Nuestro Trabajo
              </span>
              <br />
              <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                Habla por Sí Solo
              </span>
          </h2>
        </div>

          {/* Carousel Gallery */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <div className="group relative overflow-hidden">
                      {/* Premium Card Container */}
                      <div className="relative h-full bg-background border border-border/50 group-hover:border-foreground/30 transition-all duration-700 group-hover:shadow-2xl">
                        {/* Image Container */}
                        <div className="relative w-full flex items-center justify-center bg-foreground aspect-[3/4] min-h-[400px] lg:min-h-[500px]">
                          {/* Skeleton loader mientras carga */}
                          <div className="absolute inset-0 bg-muted/30 animate-pulse" />
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            loading={index < 3 ? "eager" : "lazy"}
                            className="object-contain p-6 lg:p-8 transition-all duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
                          />
                          
                          {/* Elegant overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                          
                          {/* Border highlight on hover */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground/20 transition-all duration-700 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border-2 border-border/70 shadow-xl flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground z-10 group"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-300" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border-2 border-border/70 shadow-xl flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground z-10 group"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
