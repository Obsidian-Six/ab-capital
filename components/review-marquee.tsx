"use client";

import React, { useRef, useEffect, useState } from "react";

const reviews = [
    { name: "Ahmed Hassan", content: "AB Capital made establishing my business simple and stress-free.", avatar: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=1D6880&color=fff", stars: 5 },
    { name: "Maria Santos", content: "Professional team, clear guidance, and fast support at every step.", avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=1D6880&color=fff", stars: 5 },
    { name: "Robert Kim", content: "Their consultants explained everything clearly and handled all requirements efficiently.", avatar: "https://ui-avatars.com/api/?name=Robert+Kim&background=1D6880&color=fff", stars: 5 },
    { name: "Lisa Patel", content: "Great service for anyone new to Dubai business operations. Highly recommended!", avatar: "https://ui-avatars.com/api/?name=Lisa+Patel&background=1D6880&color=fff", stars: 5 },
    { name: "Omar Al-Rashid", content: "AB Capital helped me choose the right corporate framework. Very satisfied.", avatar: "https://ui-avatars.com/api/?name=Omar+Al-Rashid&background=1D6880&color=fff", stars: 5 },
    { name: "Anna Kowalski", content: "The process was smooth, and their team was always available to answer my questions.", avatar: "https://ui-avatars.com/api/?name=Anna+Kowalski&background=1D6880&color=fff", stars: 5 },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex space-x-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.393 2.014 10.607 2.014 10.951 2.927l1.286 3.54a1 1 0 00.95.69h3.708c.97 0 1.371 1.24.588 1.81l-3.004 2.19a1 1 0 00-.364 1.118l1.286 3.54c.344.913-.755 1.669-1.54 1.118l-3.004-2.19a1 1 0 00-1.176 0l-3.004 2.19c-.785.551-1.884-.205-1.54-1.118l1.286-3.54a1 1 0 00-.364-1.118l-3.004-2.19c-.783-.57-.382-1.81.588-1.81h3.708a1 1 0 00.95-.69l1.286-3.54z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const lastManualScroll = useRef<number>(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size for rotation logic
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollByAmount = (amount: number) => {
        if (marqueeRef.current) {
            marqueeRef.current.scrollBy({ left: amount, behavior: "smooth" });
            lastManualScroll.current = performance.now();
        }
    };

    useEffect(() => {
        const container = marqueeRef.current;
        if (!container || isMobile) return; // Stop rotation if mobile

        let animationFrame: number;
        const step = (timestamp: number) => {
            if (!isPaused.current && (timestamp - lastManualScroll.current > 3000)) {
                container.scrollLeft += 0.8;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationFrame = requestAnimationFrame(step);
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [isMobile]);

    // Use a smaller set for mobile to improve performance, triple for desktop marquee
    const reviewCards = isMobile ? reviews : [...reviews, ...reviews, ...reviews];

    return (
        <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white py-10 md:py-12 mb-10 md:mb-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-xl xs:text-2xl md:text-3xl font-black text-center mb-8 md:mb-16 text-[#1D6880] tracking-tight uppercase">
                    What Our Clients Say
                </h2>

                <div 
                    className="relative group"
                    onMouseEnter={() => (isPaused.current = true)}
                    onMouseLeave={() => (isPaused.current = false)}
                >
                    {/* Desktop Side Navigation */}
                    <button
                        onClick={() => scrollByAmount(-350)}
                        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-[#1D6880]/20 rounded-full p-4 shadow-xl z-20 hover:bg-[#1D6880] hover:text-white transition-all active:scale-90"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => scrollByAmount(350)}
                        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-[#1D6880]/20 rounded-full p-4 shadow-xl z-20 hover:bg-[#1D6880] hover:text-white transition-all active:scale-90"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Gradient Faders */}
                    <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none hidden xs:block" />
                    <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none hidden xs:block" />

                    <div 
                        ref={marqueeRef} 
                        className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar select-none pb-6 ${isMobile ? 'snap-x snap-mandatory px-4' : 'cursor-grab active:cursor-grabbing'}`}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviewCards.map((review, index) => (
                            <div
                                key={`${review.name}-${index}`}
                                className="bg-white rounded-3xl shadow-sm p-6 md:p-8 flex flex-col 
                                           w-[85vw] xs:w-[300px] md:w-[380px] flex-shrink-0 snap-center
                                           border border-[#1D6880]/10 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <img 
                                        src={review.avatar} 
                                        alt={review.name} 
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1D6880]/5 shadow-inner" 
                                    />
                                    <div>
                                        <div className="font-bold text-[#1D6880] text-sm md:text-base">
                                            {review.name}
                                        </div>
                                        <StarRating count={review.stars} />
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                                    {review.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Control Dock */}
                <div className="flex md:hidden items-center justify-between mt-4 px-4">
                    <button
                        onClick={() => scrollByAmount(-280)}
                        className="bg-white border border-[#1D6880]/10 rounded-2xl p-4 shadow-sm active:scale-90 transition-all text-[#1D6880]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1D6880]/40" />
                        <span className="w-2 h-2 rounded-full bg-[#1D6880]/10" />
                        <span className="w-2 h-2 rounded-full bg-[#1D6880]/10" />
                    </div>

                    <button
                        onClick={() => scrollByAmount(280)}
                        className="bg-white border border-[#1D6880]/10 rounded-2xl p-4 shadow-sm active:scale-90 transition-all text-[#1D6880]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}