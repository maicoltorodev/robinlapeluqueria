"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Star, ArrowRight, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { products, formatPrice } from "@/lib/products"

const badgeColors: Record<string, string> = {
    "Más Vendido": "bg-foreground text-background",
    "Nuevo": "bg-emerald-600 text-white",
    "Premium": "bg-amber-500 text-white",
    "Oferta": "bg-rose-500 text-white",
    "Favorito": "bg-violet-600 text-white",
}

export function CatalogSection() {
    return (
        <section id="catalogo" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-background relative overflow-hidden">

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:6rem_6rem]" />

            {/* Decorative blurred blobs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-[1600px] mx-auto">

                    {/* Section Header */}
                    <div className="mb-20 lg:mb-32 space-y-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-muted-foreground" />
                            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                                Tienda Robin
                            </p>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
                            <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                                Productos
                            </span>
                            <br />
                            <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                                de Belleza
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                            Selección exclusiva de productos profesionales que usamos en el salón.
                            Lleva el cuidado de cabello de calidad a tu hogar.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                        {products.map((product, index) => (
                            <ScrollAnimation key={product.id} delay={index * 80}>
                                <Link href={`/productos/${product.id}`} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4">
                                    <article className="relative h-full bg-background border border-border/60 hover:border-foreground/30 transition-all duration-500 overflow-hidden flex flex-col">

                                        {/* Hover gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/0 group-hover:to-foreground/[0.03] transition-all duration-500 pointer-events-none z-10" />

                                        {/* Product Image */}
                                        <div className="relative bg-muted/30 overflow-hidden aspect-square">
                                            <div className="absolute inset-0 bg-gradient-to-br from-background/0 to-foreground/5 z-[1]" />
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-3">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <h3 className="text-sm sm:text-base font-bold tracking-tight leading-tight group-hover:text-foreground transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                                                    {product.name}
                                                </h3>
                                                {/* Rating - 5 full stars */}
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 fill-foreground text-foreground"
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="flex flex-col gap-1 pt-2 border-t border-border/50">
                                                <div className="text-lg font-bold tracking-tight">
                                                    {formatPrice(product.price)}
                                                </div>
                                                <span className="text-[9px] text-muted-foreground tracking-wide font-medium uppercase">{product.volume}</span>
                                            </div>
                                        </div>

                                    </article>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <ScrollAnimation delay={400}>
                        <div className="mt-16 sm:mt-20 text-center">
                            <p className="text-muted-foreground text-sm tracking-wide mb-4">
                                ¿Quieres asesoría personalizada sobre qué producto es para ti?
                            </p>
                            <a
                                href="https://wa.me/573108757670?text=Hola!%20Me%20gustaría%20asesoría%20sobre%20los%20productos%20de%20belleza%20disponibles."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors duration-300 group"
                            >
                                Consultar por WhatsApp
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </ScrollAnimation>

                </div>
            </div>
        </section>
    )
}
