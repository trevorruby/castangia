"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STORES, Store } from "@/data/stores";
import { MapPin, Clock, Phone, Search, ArrowRight } from "lucide-react";

export function StoreLocator() {
    const [selectedStore, setSelectedStore] = useState<Store>(STORES[0]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStores = STORES.filter(store =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-cream text-charcoal flex flex-col pt-32 pb-20 px-6 max-w-[1400px] mx-auto relative overflow-hidden">

            {/* Global Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-multiply z-0" />

            <header className="mb-16 space-y-6 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl text-charcoal/90"
                >
                    Ateliers
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex items-center gap-4 text-charcoal/50 text-xs tracking-[0.2em] uppercase font-medium"
                >
                    <div className="h-px w-12 bg-charcoal/20" />
                    <p>Global Directory</p>
                </motion.div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 h-full relative z-10">

                {/* Left Column: The Search & List */}
                <div className="lg:col-span-5 flex flex-col gap-10 h-[65vh] lg:h-[75vh]">

                    {/* Refined Search Input */}
                    <div className="relative group">
                        <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30 group-focus-within:text-navy transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by city or name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent pl-8 py-4 border-b border-charcoal/10 focus:border-navy focus:outline-none placeholder-charcoal/20 font-serif text-xl transition-colors duration-500 text-charcoal/80"
                        />
                    </div>

                    {/* Elegant Typography List */}
                    <div className="flex-1 overflow-y-auto pr-4 space-y-1 custom-scrollbar mask-gradient-b">
                        {filteredStores.map((store, index) => (
                            <motion.button
                                key={store.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedStore(store)}
                                className={`w-full text-left py-5 px-4 group flex items-baseline justify-between transition-all duration-500 rounded-sm ${selectedStore.id === store.id
                                    ? "pl-6 bg-charcoal/5"
                                    : "pl-0 hover:pl-4 hover:bg-charcoal/[0.02]"
                                    }`}
                            >
                                <div className="space-y-1">
                                    <h3 className={`font-serif text-xl sm:text-2xl transition-colors duration-300 ${selectedStore.id === store.id ? "text-charcoal" : "text-charcoal/40 group-hover:text-charcoal/70"
                                        }`}>
                                        {store.name}
                                    </h3>
                                    <p className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${selectedStore.id === store.id ? "text-navy" : "text-charcoal/20 group-hover:text-charcoal/40"
                                        }`}>
                                        {store.location}
                                    </p>
                                </div>

                                {/* Arrow Indicator */}
                                <span className={`transition-all duration-500 transform ${selectedStore.id === store.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                                    <ArrowRight className="w-4 h-4 text-navy" strokeWidth={1} />
                                </span>
                            </motion.button>
                        ))}

                        {filteredStores.length === 0 && (
                            <p className="text-charcoal/30 font-serif italic py-8 text-center text-lg">
                                No locations found.
                            </p>
                        )}
                    </div>
                </div>

                {/* Right Column: The "Stationery" Card */}
                <div className="lg:col-span-7 relative hidden lg:block perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedStore.id}
                            initial={{ opacity: 0, rotateX: 5, y: 20 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            exit={{ opacity: 0, rotateX: -5, y: -20 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="sticky top-32 w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            {/* The Card - Stacking Effect handled via Shadows */}
                            <div className="w-full max-w-2xl bg-[#fffefc] p-12 md:p-20 relative overflow-hidden transition-shadow duration-500
                                      shadow-[0_2px_4px_rgba(0,0,0,0.02),0_10px_20px_rgba(0,0,0,0.03),0_30px_50px_rgba(0,0,0,0.04)]
                                      after:absolute after:inset-0 after:bg-noise after:opacity-[0.02] after:pointer-events-none"
                            >

                                {/* Texture: Subtle Border at bottom to suggest thickness */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-black/5 to-transparent" />

                                {/* Watermark */}
                                <div className="absolute -top-10 -right-10 opacity-[0.04] pointer-events-none mix-blend-multiply">
                                    <h1 className="font-serif text-[12rem] leading-none text-charcoal">1850</h1>
                                </div>

                                <div className="relative z-10 text-center space-y-14">

                                    <div className="space-y-6">
                                        <div className="inline-block border-b border-navy/30 pb-1 mb-2">
                                            <p className="text-charcoal/40 text-[9px] tracking-[0.4em] uppercase font-medium">Official Retailer</p>
                                        </div>
                                        <h2 className="font-serif text-5xl md:text-6xl leading-tight text-charcoal">
                                            {selectedStore.name}
                                        </h2>
                                    </div>

                                    <div className="grid gap-10 text-left max-w-sm mx-auto">
                                        <div className="flex gap-6 group">
                                            <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border border-charcoal/10 text-charcoal/30 group-hover:border-navy/50 group-hover:text-navy transition-colors duration-500">
                                                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal/30">Address</p>
                                                <p className="font-serif text-xl text-charcoal/80 leading-relaxed">
                                                    {selectedStore.address}
                                                </p>
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStore.address)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-charcoal/40 hover:text-navy transition-colors mt-1"
                                                >
                                                    Open Map <ArrowRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border border-charcoal/10 text-charcoal/30 group-hover:border-navy/50 group-hover:text-navy transition-colors duration-500">
                                                <Clock className="w-3 h-3" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal/30">Hours</p>
                                                <p className="font-serif text-lg text-charcoal/70 leading-relaxed">
                                                    {selectedStore.hours}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border border-charcoal/10 text-charcoal/30 group-hover:border-navy/50 group-hover:text-navy transition-colors duration-500">
                                                <Phone className="w-3 h-3" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal/30">Contact</p>
                                                <a href={`tel:${selectedStore.phone}`} className="font-serif text-lg text-charcoal/70 hover:text-navy transition-colors block">
                                                    {selectedStore.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex justify-center">
                                        <button className="text-charcoal px-8 py-3 text-[10px] uppercase tracking-[0.3em] border border-charcoal/10 hover:border-navy hover:text-navy transition-all duration-500">
                                            Request Appointment
                                        </button>
                                    </div>

                                </div>
                            </div>

                            {/* Shadow stack effect behind the card */}
                            <div className="absolute top-36 w-[85%] max-w-xl h-full bg-white shadow-xl -z-10 rotate-1 opacity-40 rounded-sm" />
                            <div className="absolute top-40 w-[80%] max-w-lg h-full bg-white shadow-lg -z-20 rotate-[-1deg] opacity-20 rounded-sm" />

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Detail (Refined) */}
                <div className="lg:hidden mt-8 mb-12">
                    <div className="bg-[#fffefc] p-8 shadow-xl border-t-2 border-navy relative">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-multiply" />
                        <p className="text-[9px] uppercase tracking-[0.3em] text-charcoal/40 mb-4">Official Retailer</p>
                        <h2 className="font-serif text-3xl mb-4 text-charcoal">{selectedStore.name}</h2>
                        <p className="text-charcoal/70 mb-8 font-serif leading-relaxed">{selectedStore.address}</p>
                        <div className="flex flex-col gap-3">
                            <a href={`tel:${selectedStore.phone}`} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] border border-charcoal/10 p-4 justify-center hover:bg-charcoal hover:text-cream transition-colors duration-300">
                                Call Atelier
                            </a>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedStore.address)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] bg-charcoal text-cream p-4 justify-center hover:bg-navy transition-colors duration-300">
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
