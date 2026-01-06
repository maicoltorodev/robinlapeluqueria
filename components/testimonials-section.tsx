"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, Quote } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { CarouselNavButton } from "@/components/ui/carousel-nav-button"
import { GOOGLE_REVIEWS_URL } from "@/lib/constants"

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
    slidesToScroll: 1,
    duration: 35, // Duración de la animación en frames (más alto = más suave, default es 20)
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

  const handleScroll = useCallback((direction: "prev" | "next") => {
    if (!emblaApi) return
    direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext()
    window.dispatchEvent(new CustomEvent('resetAutoplay'))
  }, [emblaApi])

  const scrollPrev = useCallback(() => handleScroll("prev"), [handleScroll])
  const scrollNext = useCallback(() => handleScroll("next"), [handleScroll])

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
    if (!emblaApi || testimonials.length <= 3) return

    let autoplayInterval: NodeJS.Timeout | null = null

    const startAutoplay = () => {
      if (autoplayInterval) clearInterval(autoplayInterval)
      autoplayInterval = setInterval(() => emblaApi.scrollNext(), 8000)
    }

    const resetAutoplay = () => startAutoplay()
    const handleResetEvent = () => resetAutoplay()

    startAutoplay()
    emblaApi.on("pointerDown", resetAutoplay)
    emblaApi.on("select", resetAutoplay)
    window.addEventListener("resetAutoplay", handleResetEvent)

    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval)
      emblaApi.off("pointerDown", resetAutoplay)
      emblaApi.off("select", resetAutoplay)
      window.removeEventListener("resetAutoplay", handleResetEvent)
    }
  }, [emblaApi, testimonials.length])

  // Ocultar la sección si está cargando o si hay error
  if (loading || hasError || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
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
              <div className="overflow-hidden" ref={emblaRef} style={{ scrollBehavior: 'smooth' }}>
                <div className="flex gap-6">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                    >
                      <ScrollAnimation>
                        <div className="group relative h-full">
                          {/* Card Container - Estilo premium similar a quote-section */}
                          <div className="relative bg-background/5 md:backdrop-blur-sm border border-border/20 rounded-lg md:rounded-xl p-6 sm:p-8 lg:p-10 h-full flex flex-col shadow-2xl md:hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-all duration-300 md:duration-500">
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
                                      {/* Skeleton loader mientras carga */}
                                      <div className="absolute inset-0 rounded-full bg-muted/30 animate-pulse" />
                                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-sm md:blur-md opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                                      <Image
                                        src={testimonial.profilePhoto}
                                        alt={testimonial.name}
                                        width={56}
                                        height={56}
                                        className="rounded-full border-2 border-border/30 group-hover:border-border/50 transition-all duration-300 relative z-10"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
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

              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden md:block">
                <CarouselNavButton
                  direction="prev"
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  ariaLabel="Reseña anterior"
                />
                <CarouselNavButton
                  direction="next"
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  ariaLabel="Siguiente reseña"
                />
              </div>
            </div>
          )}

          {/* Link to Google Reviews */}
          <div className="text-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
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
