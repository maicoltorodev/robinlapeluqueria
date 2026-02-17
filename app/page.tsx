import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"

// Lazy load components that are below the fold
const QuoteSection = dynamic(() => import("@/components/quote-section").then(mod => ({ default: mod.QuoteSection })), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section").then(mod => ({ default: mod.ServicesSection })), { ssr: true })
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), { ssr: true })
const GallerySection = dynamic(() => import("@/components/gallery-section").then(mod => ({ default: mod.GallerySection })), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), { ssr: true })
const LocationSection = dynamic(() => import("@/components/location-section").then(mod => ({ default: mod.LocationSection })), { ssr: true })
const BookingSection = dynamic(() => import("@/components/booking-section").then(mod => ({ default: mod.BookingSection })), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuoteSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
