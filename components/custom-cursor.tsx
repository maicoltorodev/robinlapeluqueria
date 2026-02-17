"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isOverSensitiveElement, setIsOverSensitiveElement] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        // Check for touch device on mount
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
        setIsTouchDevice(isTouch)

        if (isTouch) return

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)

            const target = e.target as HTMLElement
            // Detect if we are over an iframe or a specifically marked sensitive element
            const isSensitive = target.tagName.toLowerCase() === "iframe" || target.closest("iframe") !== null
            setIsOverSensitiveElement(isSensitive)

            const isInteractive = target.closest("a, button, [role='button'], input, select, textarea")
            setIsHovering(!!isInteractive)
        }

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName.toLowerCase() === "iframe") {
                setIsOverSensitiveElement(true)
            }
        }

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName.toLowerCase() === "iframe") {
                setIsOverSensitiveElement(false)
            }
        }

        const onMouseDown = () => setIsClicking(true)
        const onMouseUp = () => setIsClicking(false)
        const onMouseLeaveWindow = () => setIsVisible(false)
        const onMouseEnterWindow = () => setIsVisible(true)

        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("mouseover", onMouseOver)
        window.addEventListener("mouseout", onMouseOut)
        window.addEventListener("mousedown", onMouseDown)
        window.addEventListener("mouseup", onMouseUp)
        document.documentElement.addEventListener("mouseleave", onMouseLeaveWindow)
        document.documentElement.addEventListener("mouseenter", onMouseEnterWindow)

        return () => {
            window.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("mouseover", onMouseOver)
            window.removeEventListener("mouseout", onMouseOut)
            window.removeEventListener("mousedown", onMouseDown)
            window.removeEventListener("mouseup", onMouseUp)
            document.documentElement.removeEventListener("mouseleave", onMouseLeaveWindow)
            document.documentElement.removeEventListener("mouseenter", onMouseEnterWindow)
        }
    }, [isVisible])

    // Don't render on mobile/touch devices
    if (isTouchDevice) {
        return null
    }

    return (
        <div
            className={cn(
                "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300",
                isVisible && !isOverSensitiveElement ? "opacity-100" : "opacity-0"
            )}
            style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`,
                willChange: "transform",
            }}
        >
            <div
                className={cn(
                    "w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200 ease-out",
                    isClicking ? "scale-75" : "scale-100",
                    isHovering ? "scale-150" : "scale-100"
                )}
            />
        </div>
    )
}
