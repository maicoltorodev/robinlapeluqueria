import Image from "next/image"
import { BLUR_DATA_URL } from "@/lib/constants"

interface FramedImageProps {
  src: string
  alt: string
  className?: string
  borderSize?: 6 | 8
  borderColor?: "foreground" | "background"
  height?: string
  priority?: boolean
}

export function FramedImage({
  src,
  alt,
  className = "",
  borderSize = 8,
  borderColor = "foreground",
  height = "h-[400px] lg:h-[500px]",
  priority = false,
}: FramedImageProps) {
  // Usar clases completas para Tailwind
  const borderClasses = borderSize === 8
    ? borderColor === "foreground"
      ? "border-8 border-foreground group-hover:border-foreground/80"
      : "border-8 border-background group-hover:border-background/90"
    : borderColor === "foreground"
      ? "border-[6px] border-foreground group-hover:border-foreground/80"
      : "border-[6px] border-background group-hover:border-background/90"

  return (
    <div className={`relative ${height} group cursor-pointer`}>
      {/* Skeleton loader mientras carga */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className={`absolute inset-0 ${borderClasses} transition-all duration-500 shadow-2xl overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          loading={priority ? "eager" : "lazy"}
          className={`object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 ${className}`}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/10 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
      </div>
    </div>
  )
}
