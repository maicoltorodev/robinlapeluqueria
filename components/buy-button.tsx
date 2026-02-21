"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, ArrowRight, X, CreditCard, ShieldCheck, Truck } from "lucide-react"

export function BuyButton() {
    const [isOpen, setIsOpen] = useState(false)

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <>
            <div className="space-y-3">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center gap-3 w-full bg-foreground text-background py-5 px-8 text-sm font-bold tracking-[0.2em] uppercase hover:bg-foreground/90 active:scale-[0.98] transition-all duration-300 group shadow-xl hover:shadow-2xl cursor-pointer"
                >
                    <ShoppingBag className="w-5 h-5" />
                    Comprar Ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                    ✨ Pago seguro y envío inmediato garantizado
                </p>
            </div>

            {/* Premium Modal Backdrop */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                />

                {/* Modal Content */}
                <div
                    className={`relative w-full max-w-lg bg-background border border-border shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-500 transform ${isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-95 opacity-0"
                        }`}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors p-2 z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="p-8 sm:p-12">
                        {/* Modal Header */}
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center animate-pulse">
                                <CreditCard className="w-10 h-10" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Procesando Pedido</h2>
                                <div className="h-px w-12 bg-foreground mx-auto" />
                            </div>
                        </div>

                        {/* Main Message */}
                        <div className="mt-10 p-6 bg-muted/40 border border-border/50 text-center rounded-sm">
                            <p className="text-lg font-medium tracking-tight text-foreground italic">
                                "(Aquí se iniciará la pasarela de pago)"
                            </p>
                        </div>

                        {/* Features/Trust badges */}
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center text-center p-4 border border-border/40 rounded-sm space-y-2">
                                <ShieldCheck className="w-5 h-5 text-muted-foreground" />
                                <span className="text-[10px] uppercase tracking-widest font-bold">Pago Seguro</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 border border-border/40 rounded-sm space-y-2">
                                <Truck className="w-5 h-5 text-muted-foreground" />
                                <span className="text-[10px] uppercase tracking-widest font-bold">Envío Express</span>
                            </div>
                        </div>

                        {/* Bottom CTA to simulate next step or close */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-10 w-full py-4 bg-foreground text-background text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground/80 transition-all active:scale-[0.98]"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
