"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useCursor } from "./CastangiaCursor";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export function NarrativeEngine() {
    return (
        <div className="bg-[#F4F1EA] text-[#2C2C2C] relative z-10 font-sans">
            <HeritageBlock />
            <SilhouetteFeature />
            <MacroDetails />
            <AuthorityBlock />
            <CuratedWardrobe />
        </div>
    );
}

// SECTION 1: THE HERITAGE & ORIGIN
function HeritageBlock() {
    const { setCursorType, setCursorText } = useCursor();

    return (
        <section className="relative min-h-screen flex flex-col md:flex-row bg-[#F4F1EA]">
            {/* Left: The Visual (Bastion/Landscape Proxy) */}
            <div
                className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden group"
                onMouseEnter={() => { setCursorType("text"); setCursorText("1850"); }}
                onMouseLeave={() => setCursorType("default")}
            >
                <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="/images/upload-4.jpg"
                    alt="Bastion of Saint Rémy"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
            </div>

            {/* Right: The Narrative */}
            <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-8 md:p-24 bg-[#F4F1EA] text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-8 max-w-lg"
                >
                    <p className="text-[#8C7B6C] text-xs tracking-[0.4em] uppercase">The Origin</p>
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#2C2C2C]">
                        The Effortless Intersection of<br />Tradition & Modernity.
                    </h2>
                    <div className="w-12 h-px bg-[#8C7B6C] md:mr-auto my-6 opacity-50 mx-auto" />
                    <p className="text-lg text-[#2C2C2C]/80 font-light leading-relaxed">
                        For nearly 200 years—predating the Kingdom of Italy itself—Castangia has been rooted in the rich soil of Sardinia. Guided by a profound sense of place, our legacy is built on a strict adherence to traditional sartorial practices. We don&apos;t just craft garments; we preserve a cosmopolitan Italian history.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/world"
                            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#8C7B6C] hover:text-[#2C2C2C] transition-colors"
                        >
                            Discover Our Heritage <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}

// SECTION 2: THE SILHOUETTE (Interactive Fit focus)
function SilhouetteFeature() {
    const { setCursorType } = useCursor();
    const [activePoint, setActivePoint] = useState<number | null>(null);

    const hotspots = [
        { id: 1, x: "35%", y: "25%", label: "The Shoulder", text: "Soft and rolling, distinctively Castangia." },
        { id: 2, x: "42%", y: "35%", label: "High Armpit", text: "Maximizes range of motion without sacrificing fit." },
    ];

    return (
        <section className="relative min-h-[120vh] bg-[#F4F1EA] flex items-center justify-center py-24 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6">

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 space-y-12 order-2 md:order-1"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-serif leading-none text-[#2C2C2C]">The Castangia Fit:<br />Uncompromising Elegance.</h2>
                        <p className="text-xl text-[#2C2C2C]/70 font-light leading-relaxed">
                            A contemporary cut that refuses to restrict. Between an exquisitely soft canvas and a higher armhole, Castangia yields a tapered, fitted aesthetic that moves with you.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l border-[#8C7B6C]/40 pl-8 space-y-2">
                            <h4 className="text-lg font-serif italic text-[#2C2C2C]">The Castangia Shoulder</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Soft and rolling, it is the defining attribute of our jackets, metaphorically representing the total comfort of the garment.</p>
                        </div>
                        <div className="border-l border-[#8C7B6C]/40 pl-8 space-y-2">
                            <h4 className="text-lg font-serif italic text-[#2C2C2C]">Weightless Construction</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Tailored so effortlessly, you will almost forget you are wearing a sport coat.</p>
                        </div>
                        <div className="border-l border-[#8C7B6C]/40 pl-8 space-y-2">
                            <h4 className="text-lg font-serif italic text-[#2C2C2C]">Cosmopolitan Styling</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Informed by the diverse expertise of master tailors drawn from every region of Italy to our Sardinian home.</p>
                        </div>
                    </div>

                    <a href="/collections" className="inline-block border text-xs border-[#2C2C2C]/20 text-[#2C2C2C] px-8 py-3 uppercase tracking-widest hover:bg-[#2C2C2C] hover:text-[#F4F1EA] transition-all">
                        Explore the Collection
                    </a>
                </motion.div>

                {/* Visual Side (Interactive) */}
                <div className="md:col-span-7 relative h-[80vh] md:h-screen w-full order-1 md:order-2 overflow-hidden">
                    <div className="relative w-full h-full">
                        <motion.img
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            src="/images/campaign/2026/IMG_3670.JPG"
                            className="w-full h-full object-cover"
                            alt="The Castangia Fit"
                        />

                        {/* Hotspots */}
                        {hotspots.map((spot) => (
                            <button
                                key={spot.id}
                                style={{ left: spot.x, top: spot.y }}
                                className="absolute z-20 w-8 h-8 -ml-4 -mt-4 bg-[#F4F1EA]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#8C7B6C] group hover:scale-125 transition-transform duration-300 shadow-lg"
                                onMouseEnter={() => { setActivePoint(spot.id); setCursorType("hover"); }}
                                onMouseLeave={() => { setActivePoint(null); setCursorType("default"); }}
                            >
                                <Plus size={14} className="text-[#8C7B6C]" />

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {activePoint === spot.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-10 top-0 w-64 bg-[#F4F1EA]/95 p-6 border border-[#8C7B6C]/20 shadow-xl text-left pointer-events-none"
                                        >
                                            <p className="text-[#8C7B6C] text-xs uppercase tracking-widest mb-2">{spot.label}</p>
                                            <p className="text-[#2C2C2C]/80 text-sm leading-relaxed font-light">{spot.text}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

// SECTION 3: EXCELLENCE IN THE UNSEEN (Macro Details)
function MacroDetails() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const { setCursorType, setCursorText } = useCursor();

    // Parallax
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={ref} className="bg-[#F4F1EA] py-32 px-6 overflow-hidden">
            <div className="max-w-[1600px] mx-auto space-y-24">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto space-y-6"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8C7B6C]">The Macro Details</p>
                    <h2 className="text-4xl md:text-7xl font-serif text-[#2C2C2C]">The Sum of Its Parts.</h2>
                    <p className="text-lg text-[#2C2C2C]/70 font-light leading-relaxed">
                        Craftsmanship is about pursuing excellence in the elements that are seen, and passionately executing the ones that are not.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

                    {/* Item 1 */}
                    <motion.div
                        style={{ y }}
                        className="space-y-6 group"
                        onMouseEnter={() => { setCursorType("text"); setCursorText("HERITAGE"); }}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-[#E8E6E1] relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                src="/images/campaign/2026/IMG_3669.JPG"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt="Flower Loop"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-[#2C2C2C] mb-2">The Flower Loop</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">A subtle nod to heritage Italian tradition, hidden beneath the lapel.</p>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <div
                        className="space-y-6 group md:pt-24"
                        onMouseEnter={() => { setCursorType("text"); setCursorText("QUALITY"); }}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-[#E8E6E1] relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                src="/images/campaign/2026/IMG_3668.JPG"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt="Horn Button"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-[#2C2C2C] mb-2">Natural Horn Buttons</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Cut in the perfect orientation to reveal distinctive, one-of-a-kind veins.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <motion.div
                        style={{ y }}
                        className="space-y-6 group md:pt-12"
                        onMouseEnter={() => { setCursorType("text"); setCursorText("FABRIC"); }}
                        onMouseLeave={() => setCursorType("default")}
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-[#E8E6E1] relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                src="/images/campaign/2026/IMG_3667.JPG"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt="Curated Fabrics"
                            />
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-[#2C2C2C] mb-2">Curated Fabrics</h4>
                            <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">The finest textiles chosen specifically to accentuate the qualities of our hand-workmanship.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// SECTION 4: THE MASTER'S VOICE
function AuthorityBlock() {
    return (
        <section className="py-32 bg-[#F4F1EA] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-multiply">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/upload-5.jpg')" }} />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
                <blockquote className="text-2xl md:text-5xl font-serif italic text-[#2C2C2C] leading-relaxed">
                    &quot;Castangia has always been a home for wonderful tailors—not only from Sardinia, but from all over Italy. This is why we can say we adhere strictly to the Italian sartorial process. The diversity of our factory lets us generate the most beautiful cosmopolitan garments for our clients across the world.&quot;
                </blockquote>
                <div>
                    <p className="text-[#8C7B6C] text-sm uppercase tracking-[0.2em] mb-2">Alberto Grilletti</p>
                    <p className="text-[#2C2C2C]/40 text-xs uppercase tracking-widest">CEO, Sartoria Castangia & 6th Generation Family Management</p>
                </div>
            </div>
        </section>
    );
}

// SECTION 5: THE CURATED WARDROBE (Shoppable Grid)
function CuratedWardrobe() {
    const { setCursorType, setCursorText } = useCursor();

    const products = [
        { id: 1, name: "The Double Breasted", collection: "FW 2026", img: "/images/campaign/2026/IMG_3675.JPG" },
        { id: 2, name: "The Sartorial Suit", collection: "Available Now", img: "/images/campaign/2026/IMG_3676.JPG" },
        { id: 3, name: "The Cashmere Coat", collection: "Limited Edition", img: "/images/campaign/2026/IMG_3674.JPG" },
    ];

    return (
        <section className="py-32 bg-[#F4F1EA]">
            <div className="max-w-[1600px] mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif text-[#2C2C2C]">Step Into the<br />Castangia Experience.</h2>
                        <p className="text-[#2C2C2C]/60 font-light max-w-xl">
                            Experience the unique blend of style, comfort, and quality that makes Castangia the most beautiful and enjoyable brand you will wear.
                        </p>
                    </div>
                    <Link href="/collections" className="px-8 py-3 border border-[#2C2C2C]/20 text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-[#F4F1EA] transition-colors uppercase tracking-widest text-xs">
                        Shop the Sartoria
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="group cursor-pointer space-y-4"
                            onMouseEnter={() => { setCursorType("text"); setCursorText("SHOP"); }}
                            onMouseLeave={() => setCursorType("default")}
                        >
                            <div className="aspect-[3/4] overflow-hidden relative bg-[#E8E6E1]">
                                <img
                                    src={p.img}
                                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105"
                                    alt={p.name}
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif text-[#2C2C2C]">{p.name}</h3>
                                    <p className="text-xs text-[#2C2C2C]/50 uppercase tracking-wider mt-1">{p.collection}</p>
                                </div>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8C7B6C]">
                                    <ArrowRight />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
