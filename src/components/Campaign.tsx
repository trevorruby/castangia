"use client";



export function Campaign() {
    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <p className="text-navy text-xs tracking-[0.3em] uppercase">The Silhouette</p>
                        <h2 className="font-serif text-5xl md:text-7xl text-charcoal">The Unique Fit</h2>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-charcoal/60 font-serif text-lg leading-relaxed text-balance">
                            Slim and tapered yet non-restrictive. Balanced between a soft canvas and shoulder and a higher armpit hole, Castangia yields a fitted aesthetic without compromising range of motion in the day to day.
                        </p>
                    </div>
                </div>

                {/* 
                    GRID LAYOUT
                */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[120vh] md:h-[100vh]">

                    {/* Large Hero Image - The Shoulder */}
                    <div className="md:col-span-8 h-full relative group overflow-hidden">
                        <img
                            src="/images/upload-3.jpg"
                            alt="The Castangia Shoulder"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 text-white z-10 max-w-md">
                            <p className="text-xs uppercase tracking-widest mb-2">Defining Attribute</p>
                            <p className="font-serif text-3xl mb-4">The Soft Shoulder</p>
                            <p className="text-white/80 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Soft and rolling, it metaphorically represents the softness and comfort of the garment as a whole.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-4 flex flex-col gap-4 h-full">
                        <div className="flex-1 relative group overflow-hidden">
                            <img
                                src="/images/upload-4.jpg"
                                alt="Texture Detail"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                                <p className="font-serif text-xl mb-2">Color & Texture</p>
                                <p className="text-xs text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    The subtle interplay between colors and textures is one of the most beautiful aspects of the Castangia experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 relative group overflow-hidden bg-[#FDFCF8] flex items-center justify-center p-8 text-center">
                            <div>
                                <p className="font-serif text-2xl text-charcoal mb-4">The Imperceivable</p>
                                <p className="text-charcoal/60 text-sm leading-relaxed">
                                    "Quality is the sum of the parts, and Castangia is committed to perfecting those parts."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
