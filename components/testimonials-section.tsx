"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

interface Review {
  id: number | string
  name: string
  rating: number
  comment: string
  date: string
  profilePhoto?: string | null
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Review[]>([])
  const [rating, setRating] = useState<number>(5.0)
  const [totalRatings, setTotalRatings] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1, // Siempre cambiar de 1 en 1
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews")
        const data = await response.json()
        
        if (response.ok) {
          if (data.reviews && data.reviews.length > 0) {
            setTestimonials(data.reviews)
            setRating(data.rating || 5.0)
            setTotalRatings(data.totalRatings || 0)
            setHasError(false)
          } else {
            setHasError(true)
          }
        } else {
          setHasError(true)
        }
      } catch (error) {
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      // Disparar evento personalizado para resetear el autoplay
      window.dispatchEvent(new CustomEvent('resetAutoplay'))
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      // Disparar evento personalizado para resetear el autoplay
      window.dispatchEvent(new CustomEvent('resetAutoplay'))
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

  // Auto-scroll cada 8 segundos con reset al interactuar
  useEffect(() => {
    if (!emblaApi) return

    // Solo activar auto-scroll si hay más de 3 reseñas
    const hasEnoughReviews = testimonials.length > 3
    if (!hasEnoughReviews) return

    let autoplayInterval: NodeJS.Timeout | null = null

    const startAutoplay = () => {
      // Limpiar intervalo anterior si existe
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      
      // Iniciar nuevo intervalo
      autoplayInterval = setInterval(() => {
        emblaApi.scrollNext()
      }, 8000) // 8 segundos
    }

    const resetAutoplay = () => {
      // Reiniciar el contador desde cero
      startAutoplay()
    }

    // Iniciar autoplay
    startAutoplay()

    // Escuchar eventos de interacción del usuario
    const handlePointerDown = () => {
      resetAutoplay()
    }

    const handleSelect = () => {
      // Resetear también cuando cambia la slide (por si el usuario arrastra)
      resetAutoplay()
    }

    // Escuchar evento personalizado desde los botones
    const handleResetEvent = () => {
      resetAutoplay()
    }

    emblaApi.on("pointerDown", handlePointerDown)
    emblaApi.on("select", handleSelect)
    window.addEventListener("resetAutoplay", handleResetEvent)

    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }
      emblaApi.off("pointerDown", handlePointerDown)
      emblaApi.off("select", handleSelect)
      window.removeEventListener("resetAutoplay", handleResetEvent)
    }
  }, [emblaApi])

  // Ocultar la sección si está cargando o si hay error
  if (loading || hasError || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 lg:mb-20 text-center">
            <ScrollAnimation>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold mb-6">Testimonios</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto mb-6">
                <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                  Lo Que Dicen
                </span>
                <br />
                <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                  Nuestros Clientes
                </span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.round(rating) 
                          ? "fill-foreground text-foreground" 
                          : "fill-transparent text-muted-foreground"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold ml-2">{rating.toFixed(1)}</span>
                {totalRatings > 0 && (
                  <span className="text-muted-foreground ml-2">({totalRatings} reseñas) en Google</span>
                )}
                {totalRatings === 0 && (
                  <span className="text-muted-foreground ml-2">en Google</span>
                )}
              </div>
            </ScrollAnimation>
          </div>

          {/* Carousel */}
          {testimonials.length > 0 && (
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                    >
                      <ScrollAnimation>
                        <div className="group relative h-full">
                          {/* Card Container - Estilo premium similar a quote-section */}
                          <div className="relative bg-background/5 backdrop-blur-sm border border-border/20 rounded-lg md:rounded-xl p-8 lg:p-10 h-full flex flex-col shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-all duration-500">
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/2 rounded-lg md:rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-lg md:rounded-xl border border-border/30 shadow-[0_0_20px_rgba(0,0,0,0.05)] pointer-events-none group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] group-hover:border-border/50 transition-all duration-500" />
                            
                            {/* Corner accents */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-border/20 opacity-60" />
                            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-border/20 opacity-60" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-border/20 opacity-60" />
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-border/20 opacity-60" />

                            {/* Quote icon decoration */}
                            <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                              <Quote className="w-20 h-20 text-foreground" strokeWidth={1} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                              {/* Rating */}
                              <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-5 h-5 transition-all duration-300 ${
                                      i < testimonial.rating
                                        ? "fill-foreground text-foreground scale-100"
                                        : "fill-transparent text-muted-foreground/30 scale-90"
                                    }`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm font-semibold text-foreground/70">
                                  {testimonial.rating}.0
                                </span>
                              </div>

                              {/* Comment */}
                              <div className="flex-grow mb-8">
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light relative">
                                  <span className="absolute -top-1 -left-1 text-3xl text-foreground/8 font-serif leading-none">"</span>
                                  <span className="relative z-10 pl-4">{testimonial.comment}</span>
                                  <span className="absolute -bottom-2 -right-1 text-3xl text-foreground/8 font-serif leading-none">"</span>
                                </p>
                              </div>

                              {/* Decorative Line */}
                              <div className="flex items-center gap-2 mb-6">
                                <div className="h-px flex-1 bg-border/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-border/40" />
                                <div className="h-px flex-1 bg-border/30" />
                              </div>

                              {/* Author */}
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  {testimonial.profilePhoto ? (
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                      <Image
                                        src={testimonial.profilePhoto}
                                        alt={testimonial.name}
                                        width={56}
                                        height={56}
                                        className="rounded-full border-2 border-border/30 group-hover:border-border/50 transition-all duration-300 relative z-10"
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-border/30 group-hover:border-border/50 transition-all duration-300 flex items-center justify-center">
                                      <span className="text-lg font-semibold text-foreground/60">
                                        {testimonial.name.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-foreground text-base mb-1 truncate">
                                    {testimonial.name}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                                    <p className="text-sm text-muted-foreground">
                                      {testimonial.date}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border-2 border-border/70 shadow-xl flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground z-10 group"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-300" />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-14 h-14 rounded-full bg-background/95 backdrop-blur-sm border-2 border-border/70 shadow-xl flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground z-10 group"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform duration-300" />
              </button>
            </div>
          )}

          {/* Link to Google Reviews */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=robin+la+peluqueria&oq=robin&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIYCAEQLhgUGIcCGIsDGKgDGLEDGIAEGO4FMgYIAhBFGEAyGAgDEC4YQxiLAxiYAxiaAxioAxiABBiKBTIPCAQQABhDGIsDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEHODc5ajFqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x8e3f9ab1440b0d35:0x64ec7624800ab4b,1,,,, "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <span>Ver todas las reseñas en Google</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
