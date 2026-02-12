"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-cream text-charcoal">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/hero.jpg')",
                        filter: "sepia(20%) contrast(90%) brightness(110%)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="mb-8 text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-charcoal/70">
                        Cagliari, Sardinia — 1850
                    </h2>
                    <h1 className="font-serif text-[12vw] leading-none tracking-tighter text-charcoal mix-blend-multiply opacity-90">
                        CASTANGIA
                    </h1>
                    <div className="h-px w-24 bg-charcoal/30 my-8" />
                    <p className="font-light text-xl md:text-2xl tracking-widest text-charcoal/80 uppercase">
                        Unspoken Authority
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest text-charcoal/60">Discover</span>
                <ArrowDown className="h-5 w-5 text-charcoal/60 animate-bounce" strokeWidth={1} />
            </motion.div>
        </section>
    );
}
