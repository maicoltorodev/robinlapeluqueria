import { ReactNode } from "react"

interface PremiumCardProps {
  children: ReactNode
  className?: string
  maxWidth?: string
}

export function PremiumCard({ 
  children, 
  className = "",
  maxWidth = "max-w-5xl"
}: PremiumCardProps) {
  return (
    <div className={`relative w-full ${maxWidth} mx-auto ${className}`}>
      {/* Card Container */}
      <div className="relative bg-background/5 md:backdrop-blur-sm border border-background/20 rounded-lg md:rounded-xl lg:rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/5 rounded-lg md:rounded-xl lg:rounded-2xl pointer-events-none" />
        
        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-lg md:rounded-xl lg:rounded-2xl border border-background/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] pointer-events-none" />
        
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-background/20" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-background/20" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-background/20" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-background/20" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}

