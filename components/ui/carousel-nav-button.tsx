import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselNavButtonProps {
  direction: "prev" | "next"
  onClick: () => void
  disabled: boolean
  ariaLabel: string
}

export function CarouselNavButton({
  direction,
  onClick,
  disabled,
  ariaLabel,
}: CarouselNavButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  const positionClass = direction === "prev"
    ? "left-2 sm:left-0 sm:-translate-x-4 lg:-translate-x-8"
    : "right-2 sm:right-0 sm:translate-x-4 lg:translate-x-8"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClass} w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/95 md:backdrop-blur-sm border-2 border-border/70 shadow-xl flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 touch-manipulation`}
      aria-label={ariaLabel}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  )
}

