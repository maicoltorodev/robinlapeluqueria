"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { WHATSAPP_URL } from "@/lib/constants"

export function HeroSection() {
  const [logoPosition, setLogoPosition] = useState({ left: 0, top: 0 })
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const [logoSize, setLogoSize] = useState({ width: 144, height: 144, padding: 6 })
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const getLogoSize = () => {
      const isMobile = window.innerWidth < 640
      return {
        width: isMobile ? 80 : 144,
        height: isMobile ? 80 : 144,
        padding: isMobile ? 3 : 6,
      }
    }

    const updateLogoSize = () => {
      const size = getLogoSize()
      setLogoSize(size)
      setIsMobile(size.width === 80)
    }

    // Función de easing suave para transiciones fluidas (smoothstep)
    const smoothEase = (t: number): number => t * t * (3 - 2 * t)

    const updateLogoPosition = () => {
      if (!imageContainerRef.current || !heroRef.current) return

      const containerRect = imageContainerRef.current.getBoundingClientRect()
      const heroRect = heroRef.current.getBoundingClientRect()
      const currentLogoSize = getLogoSize()

      // Posición inicial sobre la foto (relativa al contenedor en viewport)
      const startLeft = containerRect.right - 32 - currentLogoSize.width
      const startTop = containerRect.bottom - 32 - currentLogoSize.width

      // Posición final (esquina inferior derecha de la ventana)
      const endLeft = window.innerWidth - 24 - currentLogoSize.width
      const endTop = window.innerHeight - 24 - currentLogoSize.width

      // Calcular progreso basado en la posición del hero section
      const viewportHeight = window.innerHeight
      const thresholdStart = viewportHeight
      const thresholdEnd = viewportHeight * 0.3
      const heroBottom = heroRect.bottom

      // Calcular progreso (0 a 1)
      const rawProgress = heroBottom < thresholdStart
        ? Math.min(1, Math.max(0, (thresholdStart - heroBottom) / (thresholdStart - thresholdEnd)))
        : 0

      // Aplicar función de easing suave para transición más fluida
      const easedProgress = smoothEase(rawProgress)

      // Interpolación con puntos intermedios más suaves
      // Usar interpolación cúbica para movimiento más natural
      const currentLeft = startLeft + (endLeft - startLeft) * easedProgress
      const currentTop = startTop + (endTop - startTop) * easedProgress

      // Redondear a 1 decimal para mejor rendimiento y evitar micro-saltos
      setLogoPosition({
        left: Math.round(currentLeft * 10) / 10,
        top: Math.round(currentTop * 10) / 10,
      })

      // Mostrar WhatsApp cuando progress > 0.5
      setShowWhatsApp(easedProgress > 0.5)

      // Mostrar logo con fade-in cuando la posición está calculada
      if (!logoVisible && containerRect.width > 0) {
        setTimeout(() => setLogoVisible(true), 600) // Delay para que aparezca después de la animación inicial
      }
    }

    // Inicializar tamaño del logo y estado mobile
    const currentIsMobile = window.innerWidth < 768
    updateLogoSize()
    setIsMobile(currentIsMobile)

    if (currentIsMobile) {
      setLogoVisible(true)
      setShowWhatsApp(true)
      setLogoPosition({
        left: window.innerWidth - 16 - 80,
        top: window.innerHeight - 16 - 80
      })
      return
    }

    // Pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(() => {
      updateLogoPosition()
    }, 100)

    const handleResize = () => {
      updateLogoSize()
      updateLogoPosition()
    }

    // Usar requestAnimationFrame para animaciones más fluidas
    let rafId: number | null = null
    let lastUpdateTime = 0
    const minUpdateInterval = 16 // 60fps en desktop

    const handleScroll = () => {
      const now = performance.now()

      if (rafId === null && (now - lastUpdateTime) >= minUpdateInterval) {
        rafId = requestAnimationFrame(() => {
          updateLogoPosition()
          lastUpdateTime = performance.now()
          rafId = null
        })
      }
    }

    // Throttle resize para mejor rendimiento
    let resizeTimeout: NodeJS.Timeout | null = null
    const handleResizeThrottled = () => {
      if (resizeTimeout) return
      resizeTimeout = setTimeout(() => {
        handleResize()
        resizeTimeout = null
      }, 150)
    }

    window.addEventListener("resize", handleResizeThrottled, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener("resize", handleResizeThrottled)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [logoVisible])

  const handleFloatingClick = () => {
    window.open(WHATSAPP_URL, "_blank")
  }

  return (
    <>
      <section ref={heroRef} className="relative min-h-[75vh] sm:min-h-screen flex items-start sm:items-center justify-center overflow-x-hidden overflow-y-visible bg-background pt-28 sm:pt-0">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-0 pb-12 sm:py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto">
            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

              {/* 1. Title - Order 1 on mobile, 7 cols on desktop */}
              <div className="lg:col-span-7 order-1">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85] sm:leading-[0.9] text-center lg:text-left">
                  <span className="inline-block text-foreground animate-float-text allow-animation-mobile" style={{ animationDelay: "0.1s" }}>
                    ESTÉTICA
                  </span>
                  <br />
                  <span className="inline-block text-muted-foreground animate-float-text allow-animation-mobile" style={{ animationDelay: "0.4s" }}>
                    Y BELLEZA
                  </span>
                </h1>
              </div>

              {/* 2. Visual Element (Image) - Order 2 on mobile, 5 cols & 2 rows span on desktop */}
              <div ref={imageContainerRef} className="lg:col-span-5 lg:row-span-2 order-2 relative mx-auto lg:mx-0 w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center items-center lg:block">
                <div className="relative group w-full">
                  <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/10 rounded-lg blur-sm md:blur-xl opacity-30 md:opacity-50 md:group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative border-4 border-foreground/20 shadow-2xl rounded-sm overflow-hidden bg-background p-2 sm:p-3 transition-all duration-500 group-hover:border-foreground/30">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/title-image.png"
                        alt="Robin La Peluquería"
                        width={800}
                        height={600}
                        className="w-full h-auto max-w-full transition-transform duration-700 group-hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Description & CTA - Order 3 on mobile (swapped internally), 7 cols on desktop */}
              <div className="lg:col-span-7 order-3 flex flex-col space-y-8">
                {/* Buttons - Order 1 on mobile, Order 2 on desktop */}
                <div className="flex flex-col sm:flex-row gap-4 order-1 lg:order-2">
                  <Button
                    size="lg"
                    className="text-xs tracking-[0.2em] uppercase font-bold px-8 py-7 group w-full sm:w-auto shadow-xl"
                    onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  >
                    Reservar Cita
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xs tracking-[0.2em] uppercase font-bold px-8 py-7 w-full sm:w-auto border-2"
                    onClick={() => {
                      window.location.href = "/#gallery"
                    }}
                  >
                    Ver Trabajos
                  </Button>
                </div>

                {/* Description Text - Order 2 on mobile, Order 1 on desktop */}
                <div className="space-y-4 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
                  <div className="h-px w-20 bg-foreground hidden lg:block" />
                  <p className="text-lg sm:text-xl lg:text-2xl tracking-wide leading-relaxed text-foreground/70 font-light">
                    En Robin La Peluquería transformamos tu cabello en una obra de arte. Cada corte y color es creado con pasión para que brilles con tu mejor versión.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 z-20 hidden lg:flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-border animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground -rotate-90 origin-left translate-y-8 whitespace-nowrap">
            Profesionalismo
          </span>
        </div>
      </section>

      {/* Single Logo Element - Moves continuously based on scroll position */}
      <button
        ref={logoRef}
        onClick={handleFloatingClick}
        className={`fixed z-50 bg-background rounded-full shadow-2xl cursor-pointer hover:scale-110 active:scale-95 touch-manipulation block group logo-floating-action allow-animation-mobile ${isMobile ? "" : "animate-logo-rotate-float"}`}
        style={{
          left: `${logoPosition.left - logoSize.padding}px`,
          top: `${logoPosition.top - logoSize.padding}px`,
          width: `${logoSize.width}px`,
          height: `${logoSize.height}px`,
          padding: `${logoSize.padding}px`,
          opacity: logoVisible ? 1 : 0,
          willChange: "left, top, opacity",
          transition: isMobile ? "none" : "left 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in",
          animation: isMobile ? "logo-float 4s ease-in-out infinite" : "logo-float 4s ease-in-out infinite",
        }}
        aria-label={showWhatsApp ? "Contactar por WhatsApp" : "Logo"}
      >
        {/* Tooltip message - Desktop only */}
        {!isMobile && (
          <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-full text-xs font-bold tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl">
            ¡Agenda tu cita aquí!
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
          </div>
        )}

        {/* Optimized Pulse Effect - Using separate element for better performance */}
        {showWhatsApp && !isMobile && (
          <div
            className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none"
            style={{
              animation: "whatsapp-pulse 2s ease-out infinite",
              willChange: "transform, opacity",
            }}
          />
        )}

        {/* Inner black circle with logo */}
        <div className="relative w-full h-full bg-foreground border-2 border-border rounded-full flex items-center justify-center z-10">
          <Image
            src="/logo.png"
            alt="Robin La Peluquería"
            width={140}
            height={140}
            className="object-contain"
            style={{ width: "75%", height: "75%" }}
          />
        </div>
      </button>
    </>
  )
}
