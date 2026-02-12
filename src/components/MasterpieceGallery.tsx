"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "./Typewriter";
import Link from "next/link";

export function MasterpieceGallery() {
    return (
        <div className="bg-[#050505] text-[#FDFCF8]">
            <PreludeSection />
            <TheReveal />
            <AtelierFlow />
            <MosaicGrid />
        </div>
    );
}

// 1. THE PRELUDE: Solid Black "Palate Cleanser"
function PreludeSection() {
    return (
        <div className="h-[80vh] flex items-center justify-center relative z-10 bg-[#050505] px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center space-y-6"
            >
                <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#D4AF37]/60">
                    Est. 1850
                </p>
                <h2 className="text-4xl md:text-7xl font-serif leading-tight text-[#FDFCF8] mix-blend-screen">
                    Predating the<br />Kingdom of Italy.
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-px bg-[#D4AF37] mx-auto mt-8"
                />
                <p className="text-lg md:text-xl font-light text-white/40 max-w-lg mx-auto leading-relaxed pt-8">
                    History is not written. It is tailored.
                </p>
            </motion.div>
        </div>
    );
}

// 2. THE REVEAL: Massive Portrait
function TheReveal() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={ref} className="relative w-full h-[140vh] overflow-hidden flex items-center justify-center">
            <motion.div style={{ scale, y }} className="absolute inset-0 w-full h-full">
                <img
                    src="/images/campaign/2026/IMG_3677.JPG" // Portrait
                    alt="Masterpiece Portrait"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
            </motion.div>

            <div className="absolute bottom-32 left-8 md:object-left-bottom md:left-24 z-20">
                <h3 className="text-7xl md:text-[12rem] font-serif tracking-tighter leading-none text-white mix-blend-overlay">
                    MASTERPIECE
                </h3>
            </div>
        </div>
    );
}

// 3. THE ATELIER FLOW: Horizontal Scroll Gallery
function AtelierFlow() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    const items = [
        {
            id: 1,
            title: "SARTORIAL",
            subtitle: "Uncompromising Structure",
            img: "/images/campaign/2026/IMG_3668.JPG", // New Detail/Portrait
        },
        {
            id: 2,
            title: "TEXTURE",
            subtitle: "Tactile Emotion",
            img: "/images/campaign/2026/IMG_3669.JPG", // New Fabric Detail
        },
        {
            id: 3,
            title: "SILHOUETTE",
            subtitle: "Defined by History",
            img: "/images/campaign/2026/IMG_3675.JPG", // New Full shot
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-12 md:px-32">
                    <div className="w-[30vw] md:w-[20vw] flex-shrink-0 flex items-center justify-center">
                        <h2 className="text-4xl md:text-6xl font-serif writing-mode-vertical text-white/20">
                            The Collection
                        </h2>
                    </div>

                    {items.map((item) => (
                        <div key={item.id} className="relative w-[85vw] md:w-[50vw] aspect-[3/4] flex-shrink-0 group">
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="absolute -bottom-16 left-0">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2">{item.subtitle}</p>
                                <h3 className="text-4xl md:text-6xl font-serif text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}

                    <div className="w-[40vw] flex-shrink-0 flex items-center justify-center">
                        <Link href="/collections" className="group flex items-center gap-4 text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors">
                            <span>View All Works</span>
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// 4. THE MOSAIC: Parallax Grid
function MosaicGrid() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section ref={container} className="py-32 px-6 bg-[#080808] min-h-screen flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-[1600px] mx-auto">

                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="space-y-24 pt-24">
                    <div className="aspect-[3/4] w-full relative group overflow-hidden">
                        <img src="/images/campaign/2026/IMG_3667.JPG" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Fabric Detail" />
                        <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Pure VicuÃ±a</p>
                    </div>
                    <div className="max-w-xs mx-auto text-center">
                        <p className="text-white/60 font-serif italic text-3xl leading-relaxed">&quot;Elegance is not standing out, but being remembered.&quot;</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mt-4">Giorgio Armani</p>
                    </div>
                </motion.div>

                {/* Column 2 (Center - anchors) */}
                <motion.div style={{ y: y2 }} className="space-y-24">
                    <div className="text-center py-12">
                        <CastangiaLogo />
                    </div>
                    <div className="aspect-[3/5] w-full relative group overflow-hidden">
                        <img src="/images/campaign/2026/IMG_3676.JPG" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700" alt="Suit Silhouette" />
                    </div>
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="space-y-24 pt-48 md:pt-0">
                    <div className="aspect-square w-full relative group overflow-hidden bg-[#111]">
                        <img src="/images/campaign/2026/IMG_3671.JPG" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700 mixture-blend-overlay" alt="Texture" />
                    </div>
                    <div className="aspect-[4/5] w-full relative group overflow-hidden">
                        <img src="/images/campaign/2026/IMG_3673.JPG" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Sartorial Fit" />
                        <p className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">Cagliari, 1850<br />The Origin</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function CastangiaLogo() {
    return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto opacity-50 fill-current text-[#D4AF37]">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <text x="50" y="55" fontSize="40" textAnchor="middle" fontFamily="serif">C</text>
        </svg>
    );
}
