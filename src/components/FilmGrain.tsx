"use client";

import { useEffect, useState } from "react";

export function FilmGrain() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Fade in to avoid flash
        const timer = setTimeout(() => setOpacity(0.05), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[9990] pointer-events-none mix-blend-overlay"
            style={{ opacity }}
        >
            <div className="absolute inset-0 w-full h-full animate-grain bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <style jsx global>{`
                @keyframes grain {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -5%); }
                    20% { transform: translate(-10%, 5%); }
                    30% { transform: translate(5%, -10%); }
                    40% { transform: translate(-5%, 15%); }
                    50% { transform: translate(-10%, 5%); }
                    60% { transform: translate(15%, 0); }
                    70% { transform: translate(0, 10%); }
                    80% { transform: translate(-15%, 0); }
                    90% { transform: translate(10%, 5%); }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                }
            `}</style>
        </div>
    );
}
