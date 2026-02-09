"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Typewriter } from "./Typewriter";

export function CinematicNarrative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // SCENE 1: THE MATERIAL (Parallax Fabric)
    const scene1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
    const scene1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);
    const scene1TextY = useTransform(scrollYProgress, [0, 0.25], [0, 50]);

    // PARALLAX DRIFT SPEEDS (The Floating Feed)
    const driftFast = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const driftSlow = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={containerRef} className="relative bg-[#151515] text-[#FDFCF8]">

            {/* 
                SCENE 1: THE MATERIAL 
            */}
            <div className="h-[120vh] relative z-10">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <motion.div style={{ opacity: scene1Opacity, scale: scene1Scale }} className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2148&auto=format&fit=crop"
                            alt="The Material"
                            className="w-full h-full object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151515]/20 to-[#151515]"></div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: scene1Opacity, y: scene1TextY }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <h2 className="text-[10vw] md:text-[8vw] font-serif leading-none tracking-tight text-center mix-blend-overlay opacity-80">
                            The authority<br />of the cut.
                        </h2>
                    </motion.div>
                </div>
            </div>


            {/* 
                SCENE 2: THE SCATTER STREAM (Solomei AI Interface Style)
            */}
            <div className="relative z-20 pb-64 px-6 md:px-0">
                <div className="max-w-screen-xl mx-auto">

                    {/* Thought Cluster 1: Right Align (Fast Drift) */}
                    <motion.div style={{ y: driftFast }} className="flex justify-end pr-0 md:pr-20 mb-32 md:mb-48">
                        <div className="max-w-lg text-right">
                            <div className="mb-8 min-h-[4rem]">
                                <Typewriter
                                    text="&quot;Sardinia doesn't ask for attention. It commands it.&quot;"
                                    className="text-xl md:text-3xl font-serif font-light leading-relaxed text-white/90"
                                    speed={40}
                                    delay={0.5}
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full aspect-[4/5] relative overflow-hidden group rounded-sm"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                                    alt="The Portrait"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Thought Cluster 2: Left Align (Slow Drift) */}
                    <motion.div style={{ y: driftSlow }} className="flex justify-start pl-0 md:pl-32 mb-40 md:mb-64">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full aspect-video relative overflow-hidden group rounded-sm mb-6"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2695&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                                    alt="The Atmosphere"
                                />
                            </motion.div>
                            <div className="min-h-[2rem]">
                                <Typewriter
                                    text="THE SILENT LANGUAGE"
                                    className="text-sm tracking-[0.2em] text-[#D4AF37] uppercase"
                                    speed={80}
                                    delay={0.2}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Thought Cluster 3: Center (Anchor) */}
                    <div className="flex justify-center mb-40">
                        <div className="max-w-md text-center">
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                whileInView={{ opacity: 0.5, height: 64 }}
                                transition={{ duration: 1 }}
                                className="w-px bg-white mx-auto mb-8"
                            />
                            <div className="min-h-[6rem]">
                                <Typewriter
                                    text="Elegance is not an option. It is a discipline."
                                    className="text-xl leading-loose text-white/80 font-serif"
                                    speed={40}
                                    delay={0.5}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Thought Cluster 4: Large Feature */}
                    <div className="flex justify-center mb-32 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            className="w-full max-w-4xl aspect-[21/9] relative overflow-hidden group rounded-sm"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1594938291221-94f18c9560e5?q=80&w=2080&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-1000"
                                alt="Detail"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl md:text-5xl font-serif text-white/0 group-hover:text-white/90 transition-colors duration-700 transform translate-y-4 group-hover:translate-y-0">
                                    The Signet
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* 
                THE PERSISTENT ORACLE 
                Sticky bottom interface. Glassmorphism + Glow.
            */}
            <div className="fixed bottom-8 left-6 right-6 z-50 flex justify-center pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                    className="w-full max-w-2xl pointer-events-auto"
                >
                    <div className="relative group rounded-full">
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

                        {/* Glass Container - Breathing Effect */}
                        <motion.div
                            animate={{ boxShadow: ["0 0 0px rgba(212, 175, 55, 0)", "0 0 20px rgba(212, 175, 55, 0.1)", "0 0 0px rgba(212, 175, 55, 0)"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative flex items-center bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl transition-all duration-300 focus-within:ring-1 focus-within:ring-[#D4AF37]/30 focus-within:bg-[#1a1a1a]"
                        >
                            <Sparkles className="w-5 h-5 text-[#D4AF37] mr-4 animate-pulse" />
                            <input
                                type="text"
                                placeholder="Consult the Archive..."
                                className="w-full bg-transparent text-lg font-serif text-white/90 placeholder:text-white/30 focus:outline-none focus:placeholder:text-white/10 transition-colors"
                            />
                            <button className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors">
                                <ArrowRight className="w-5 h-5 text-white/50 hover:text-white" />
                            </button>
                        </motion.div>
                    </div>
                    <p className="text-center mt-3 text-[9px] uppercase tracking-[0.3em] text-white/20">
                        Castangia 1850 • Neural Interface
                    </p>
                </motion.div>
            </div>

        </div>
    );
}
