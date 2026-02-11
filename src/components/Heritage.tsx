"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Heritage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex items-center justify-center overflow-hidden bg-[#101010] text-[#FDFCF8]">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y, scale: 1.1 }}
                    className="absolute inset-0"
                >
                    <img
                        src="/images/upload-2.jpg" // High fidelity fabric/tailoring shot
                        alt="Atelier Detail"
                        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]"></div>
                </motion.div>
            </div>

            {/* Floating content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-24">

                <motion.div
                    style={{ opacity }}
                    className="space-y-8"
                >
                    <span className="block text-xs uppercase tracking-[0.4em] text-[#D4AF37]">The Legacy</span>
                    <h2 className="text-4xl md:text-7xl font-serif leading-none tracking-tight">
                        A Profound<br />Sense of Place
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left items-start pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <p className="text-lg md:text-xl font-light leading-relaxed text-[#FDFCF8]/90 text-balance">
                            Standing proud over Cagliari, the Bastion of Saint Rémy pays tribute to the rich history of Castangia’s home in Sardinia.
                        </p>
                        <p className="text-base md:text-lg font-light leading-relaxed text-[#FDFCF8]/70 text-balance">
                            The nearly 200 year legacy of Castangia predates the Kingdom of Italy itself, and respect for this history is what has allowed the brand to continue to flourish.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative pl-8 border-l border-[#D4AF37]/30"
                    >
                        <blockquote className="text-lg md:text-xl font-serif italic leading-relaxed text-[#FDFCF8]/80 mb-6">
                            &ldquo;Castangia has always been a home for wonderful tailors— not only from Sardinia, but from all over Italy. The diversity of our factory lets us generate the most beautiful cosmopolitan garments for our clients across the world.&rdquo;
                        </blockquote>
                        <cite className="not-italic">
                            <span className="block text-sm font-medium text-[#D4AF37] tracking-widest uppercase mb-1">Alberto Grilletti</span>
                            <span className="block text-xs text-[#FDFCF8]/50 uppercase tracking-wider">CEO, 6th Generation</span>
                        </cite>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
