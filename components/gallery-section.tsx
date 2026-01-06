"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { CarouselNavButton } from "@/components/ui/carousel-nav-button"

const galleryImages = [
  { src: "/monita.png", alt: "Trabajo de peluquería - Estilo 1" },
  { src: "/monita2.png", alt: "Trabajo de peluquería - Estilo 2" },
  { src: "/monita3.png", alt: "Trabajo de peluquería - Estilo 3" },
  { src: "/monita4.png", alt: "Trabajo de peluquería - Estilo 4" },
  { src: "/monito1.png", alt: "Trabajo de peluquería - Estilo 5" },
  { src: "/monita6.png", alt: "Trabajo de peluquería - Estilo 6" },
  { src: "/monita7.png", alt: "Trabajo de peluquería - Estilo 7" },
  { src: "/castaña.png", alt: "Trabajo de peluquería - Coloración" },
  { src: "/castaña2.png", alt: "Trabajo de peluquería - Coloración 2" },
]

const AUTOPLAY_DELAY = 3000
const AUTOPLAY_DELAY_MOBILE = 5000 // Slower on mobile

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isAutoplayRef = useRef(false)

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return
    
    // Limpiar intervalo existente
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }
    
    // Detectar si es mobile
    const isMobile = window.innerWidth < 640
    const delay = isMobile ? AUTOPLAY_DELAY_MOBILE : AUTOPLAY_DELAY
    
    // Iniciar nuevo intervalo
    autoplayIntervalRef.current = setInterval(() => {
      isAutoplayRef.current = true
      emblaApi.scrollNext()
      // Resetear flag después de un pequeño delay para permitir que el evento se procese
      setTimeout(() => {
        isAutoplayRef.current = false
      }, 100)
    }, delay)
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    }
  }, [])

  const handleScroll = useCallback((direction: "prev" | "next") => {
    if (!emblaApi) return
    stopAutoplay()
    direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext()
    startAutoplay()
  }, [emblaApi, stopAutoplay, startAutoplay])

  const scrollPrev = useCallback(() => handleScroll("prev"), [handleScroll])
  const scrollNext = useCallback(() => handleScroll("next"), [handleScroll])

  useEffect(() => {
    if (!emblaApi) return

    const updateButtons = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }

    updateButtons()
    emblaApi.on("select", updateButtons)
    emblaApi.on("reInit", updateButtons)

    // Detectar cuando el usuario arrastra manualmente
    const handlePointerDown = () => {
      if (!isAutoplayRef.current) stopAutoplay()
    }

    const handlePointerUp = () => {
      if (!isAutoplayRef.current) startAutoplay()
    }

    // Escuchar eventos de interacción manual
    emblaApi.on("pointerDown", handlePointerDown)
    emblaApi.on("pointerUp", handlePointerUp)

    // Esperar a que Embla esté completamente inicializado
    const initializeCarousel = () => {
      // Usar requestAnimationFrame para asegurar que el DOM esté listo
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (!emblaApi) return
          
          // Iniciar desde índice aleatorio con animación suave
          const randomIndex = Math.floor(Math.random() * galleryImages.length)
          emblaApi.scrollTo(randomIndex, true) // true = con animación
          
          // Iniciar autoplay después de que termine la animación del scroll
          setTimeout(() => {
            startAutoplay()
          }, 600) // Tiempo suficiente para que termine la animación
        }, 150)
      })
    }

    initializeCarousel()

    return () => {
      emblaApi.off("select", updateButtons)
      emblaApi.off("reInit", updateButtons)
      emblaApi.off("pointerDown", handlePointerDown)
      emblaApi.off("pointerUp", handlePointerUp)
      stopAutoplay()
    }
  }, [emblaApi, startAutoplay, stopAutoplay])

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32 space-y-4 sm:space-y-6">
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

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <div className="group relative">
                      <div className="relative h-full bg-background border border-foreground group-hover:shadow-2xl">
                        <div className="relative w-full aspect-[3/4] min-h-[400px] lg:min-h-[500px] bg-black flex items-center justify-center">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            loading={index < 3 ? "eager" : "lazy"}
                            className="object-contain p-6 lg:p-8 group-hover:scale-[1.03] transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <CarouselNavButton
              direction="prev"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              ariaLabel="Imagen anterior"
            />
            <CarouselNavButton
              direction="next"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              ariaLabel="Siguiente imagen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
