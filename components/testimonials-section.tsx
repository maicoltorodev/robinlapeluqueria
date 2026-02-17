"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        name: "Wilmer Fabian Ortiz Velasquez",
        rating: 5,
        text: "Muy buena atención y cortes espectaculares",
    },
    {
        name: "Gabriel Garcia",
        rating: 5,
        text: "Excelente servicio y Robin un muy buen estilista",
    },
    {
        name: "Fernando Dominguez",
        rating: 5,
        badge: "Local Guide",
        text: "I've been a client of Robin for over 20 years. A true professional and a great person. 100% recommended!",
    },
    {
        name: "David R.",
        rating: 5,
        badge: "Local Guide",
        text: "Buena ubicación, muy central cerca a Unicentro. Variedad de opciones para todo tipo de gusto en damas y caballeros. Los precios están bien para la zona. Todo el personal es muy amable. Para caballeros muy recomendado el servicio con el Sr. José Villamil.",
    },
    {
        name: "Marcela Camacho Henao",
        rating: 5,
        badge: "Local Guide",
        text: "Highly recommended! I have known this hair salon and the owner, Robin, for many years, and I wouldn't chance it for anything! The place is spacious, clean, the service is impeccable, the prices are really fair.",
    },
    {
        name: "Fernando Gallo Useche",
        rating: 5,
        badge: "Local Guide",
        text: "Excelente atención, áreas amplias y limpias, servicio al cliente ideal, y por supuesto, super calidad en sus servicios.",
    },
    {
        name: "Mell Daza",
        rating: 5,
        badge: "Local Guide",
        text: "Atención estupenda, saben trabajar muy bien el color y Robin corta excelente el cabello. Muy recomendable",
    },
    {
        name: "AIDA LILIANA GONZALEZ MALAGON",
        rating: 5,
        text: "Buenisimo 👍",
    }
];

export function TestimonialsSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(testimonials.length / itemsPerPage);
    const googleReviewsUrl = "https://www.google.com/search?q=robin+la+peluqueria&oq=&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyCggCEC4YsQMYgAQyCggDEC4YsQMYgAQyCggEEC4YsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg4NzE4ajBqMagCCLACAfEF9v0lhBifWp_xBfb9JYQYn1qf&sourceid=chrome&ie=UTF-8#lrd=0x8e3f9ab1440b0d35:0x64ec7624800ab4b,1,,,,"

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance in pixels
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextPage();
        } else if (isRightSwipe) {
            prevPage();
        }
    };

    const currentTestimonials = testimonials.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <section id="testimonials" className="py-20 sm:py-24 md:py-32 bg-foreground text-background relative overflow-hidden select-none">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-background/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-background/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24">
                        <ScrollAnimation>
                            <p className="text-xs tracking-[0.4em] uppercase text-background/50 font-semibold mb-4">Experiencias Reales</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
                                Lo Que Nuestros<br />
                                <span className="text-background/70 italic">Clientes Dicen</span>
                            </h2>
                            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-sm text-background/40 font-medium">4.6 estrellas basado en opiniones de Google</p>
                        </ScrollAnimation>
                    </div>

                    {/* Navigation and Testimonials Display */}
                    <div className="relative group/nav mb-16">
                        {/* Desktop Navigation Buttons */}
                        <div className="hidden lg:block">
                            <button
                                onClick={prevPage}
                                className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 z-20 group"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:scale-110" />
                            </button>
                            <button
                                onClick={nextPage}
                                className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 z-20 group"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:scale-110" />
                            </button>
                        </div>

                        {/* Testimonials Grid (Current Page) with Swipe Support */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 min-h-[450px] items-stretch touch-pan-y"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {currentTestimonials.map((item, index) => (
                                <div
                                    key={`${currentPage}-${item.name}`}
                                    className="animate-in fade-in slide-in-from-bottom-8 duration-700 h-full"
                                >
                                    <div className="group relative bg-[#1a1a1a] border border-white/10 p-10 lg:p-12 h-full flex flex-col transition-all duration-500 hover:border-white/20 rounded-3xl shadow-2xl">
                                        {/* Quote icon watermark */}
                                        <Quote className="absolute top-8 right-10 w-16 h-16 text-white/5 group-hover:text-white/10 transition-colors" />

                                        <div className="flex flex-col h-full space-y-8">
                                            {/* Stars */}
                                            <div className="flex items-center gap-1.5 text-yellow-500">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-current" />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <div className="flex-1">
                                                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                                                    "{item.text}"
                                                </p>
                                            </div>

                                            {/* Author Info - Re-ensuring visibility */}
                                            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h4 className="text-xl font-bold text-white tracking-tight uppercase">
                                                        {item.name}
                                                    </h4>
                                                    {item.badge && (
                                                        <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-500 font-bold">
                                                            {item.badge}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                    <span className="text-sm font-bold text-white/40">
                                                        {item.name.charAt(0)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots & Mobile Navigation */}
                        <div className="mt-12 flex flex-col items-center gap-6">
                            <div className="flex gap-3">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === i ? "bg-background w-8" : "bg-background/20 hover:bg-background/40"
                                            }`}
                                        aria-label={`Ir a página ${i + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Mobile only buttons */}
                            <div className="flex lg:hidden gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prevPage}
                                    className="w-12 h-12 rounded-full border-background/20 text-background bg-transparent"
                                >
                                    <ChevronLeft />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={nextPage}
                                    className="w-12 h-12 rounded-full border-background/20 text-background bg-transparent"
                                >
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <ScrollAnimation delay={200}>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-background/20 text-background hover:bg-background hover:text-foreground transition-all duration-300 h-14 px-8 rounded-full group shadow-2xl"
                                onClick={() => window.open(googleReviewsUrl, "_blank", "noopener,noreferrer")}
                            >
                                <span className="tracking-[0.2em] font-bold uppercase text-xs">Ver Todas Las Reseñas</span>
                                <ExternalLink className="ml-3 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
        </section>
    )
}
