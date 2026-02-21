import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Check, ShoppingBag, ArrowRight, Package, Droplets, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BuyButton } from "@/components/buy-button"
import { products, getProductById, formatPrice } from "@/lib/products"
import type { Metadata } from "next"

interface Props {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const product = getProductById(id)
    if (!product) return { title: "Producto no encontrado" }
    return {
        title: `${product.name} | Robin La Peluquería`,
        description: product.description,
    }
}

const badgeColors: Record<string, string> = {
    "Más Vendido": "bg-foreground text-background",
    "Nuevo": "bg-emerald-600 text-white",
    "Premium": "bg-amber-500 text-white",
    "Oferta": "bg-rose-500 text-white",
    "Favorito": "bg-violet-600 text-white",
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params
    const product = getProductById(id)

    if (!product) notFound()

    // Related products (exclude current)
    const related = products.filter((p) => p.id !== product.id).slice(0, 3)

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background pt-20">

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="max-w-[1400px] mx-auto">
                        <nav className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors duration-200">Inicio</Link>
                            <span>/</span>
                            <Link href="/#catalogo" className="hover:text-foreground transition-colors duration-200">Catálogo</Link>
                            <span>/</span>
                            <span className="text-foreground">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Back button */}
                <div className="container mx-auto px-4 lg:px-8 mb-8">
                    <div className="max-w-[1400px] mx-auto">
                        <Link
                            href="/#catalogo"
                            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                            Volver al catálogo
                        </Link>
                    </div>
                </div>

                {/* Product Detail */}
                <div className="container mx-auto px-4 lg:px-8 pb-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                            {/* LEFT — Image */}
                            <div className="lg:sticky lg:top-28">
                                <div className="relative bg-muted/30 border border-border/60 overflow-hidden aspect-square group">
                                    {/* Grid background */}
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-6 left-6 z-10">
                                            <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 ${badgeColors[product.badge] ?? "bg-foreground text-background"}`}>
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}

                                    {product.originalPrice && (
                                        <div className="absolute top-6 right-6 z-10">
                                            <span className="text-[10px] font-bold tracking-wide bg-rose-500 text-white px-3 py-1.5">
                                                -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                            </span>
                                        </div>
                                    )}

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-10 sm:p-16 transition-transform duration-700 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Volume chip */}
                                <div className="mt-4 flex items-center gap-2">
                                    <Package className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground font-light">Contenido: <strong className="text-foreground font-semibold">{product.volume}</strong></span>
                                </div>
                            </div>

                            {/* RIGHT — Details */}
                            <div className="space-y-10">

                                {/* Category & Name */}
                                <div className="space-y-4">
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                                        {product.category}
                                    </span>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9]">
                                        {product.name}
                                    </h1>
                                    <p className="text-xl text-muted-foreground font-light italic">
                                        {product.tagline}
                                    </p>
                                </div>

                                {/* Rating - 5 full stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-foreground text-foreground"
                                        />
                                    ))}
                                </div>

                                {/* Price */}
                                <div className="space-y-1">
                                    {product.originalPrice && (
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                                            <span className="text-xs bg-rose-500 text-white font-bold tracking-wide px-2 py-0.5">
                                                Ahorra {formatPrice(product.originalPrice - product.price)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-5xl font-bold tracking-tighter">
                                        {formatPrice(product.price)}
                                    </div>
                                    <p className="text-xs text-muted-foreground tracking-wide">Precio por {product.volume}</p>
                                </div>

                                {/* Short Description */}
                                <div className="border-l-2 border-foreground pl-6">
                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                        {product.longDescription}
                                    </p>
                                </div>

                                {/* BUY BUTTON — Main CTA */}
                                <BuyButton />

                                {/* Divider */}
                                <div className="h-px w-full bg-border" />

                                {/* Benefits */}
                                <div className="space-y-5">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-foreground" />
                                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Beneficios</h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {product.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 bg-foreground rounded-full flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 text-background" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-foreground/80 leading-relaxed">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-border" />

                                {/* Ingredients */}
                                <div className="space-y-5">
                                    <div className="flex items-center gap-2">
                                        <Droplets className="w-4 h-4 text-foreground" />
                                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Ingredientes Clave</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.ingredients.map((ing, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-muted border border-border/60 text-foreground/80 px-3 py-1.5 font-light"
                                            >
                                                {ing}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-border" />

                                {/* How to Use */}
                                <div className="space-y-5">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-foreground" />
                                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase">Modo de Uso</h2>
                                    </div>
                                    <ol className="space-y-3">
                                        {product.howToUse.map((step, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="flex-shrink-0 w-7 h-7 border-2 border-foreground/20 text-foreground font-bold text-xs flex items-center justify-center">
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <span className="text-sm text-foreground/80 leading-relaxed pt-1">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="bg-muted/30 border-t border-border/50 py-16 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="mb-12 space-y-2">
                                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">También te puede interesar</p>
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">Otros Productos</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {related.map((rp) => (
                                    <Link
                                        key={rp.id}
                                        href={`/productos/${rp.id}`}
                                        className="group flex gap-4 border border-border/60 hover:border-foreground/30 bg-background p-4 transition-all duration-300"
                                    >
                                        <div className="relative w-20 h-20 flex-shrink-0 bg-muted/50 overflow-hidden">
                                            <Image
                                                src={rp.image}
                                                alt={rp.name}
                                                fill
                                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-1">
                                            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{rp.category}</span>
                                            <h3 className="text-sm font-bold leading-snug group-hover:text-foreground transition-colors duration-300 line-clamp-2">
                                                {rp.name}
                                            </h3>
                                            <p className="text-sm font-bold">{formatPrice(rp.price)}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 self-center" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}
