"use client";

import { Check, Star, LineChart, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Sharjah Freezone",
    label: "BASIC",
    price: "AED 5750",
    features: [
      "Business Advisory",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: false,
  },
  {
    name: "Dubai Freezone",
    label: "BASIC",
    price: "AED 12500",
    features: [
      "Setup Consultation",
      "Full Foreign Ownership",
      "License Included",
      "MOA & AOA Provided",
      "Full Profit Transfer",
      "Flexible Desk Option",
      "Personal Account Manager"
    ],
    popular: false,
  },
  {
    name: "Rakez Freezone",
    label: "LIMITED",
    price: "AED 11990",
    features: [
      "Expert Consultation",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA Drafting",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: true,
  },
  {
    name: "Dubai Mainland",
    label: "LIMITED",
    price: "AED 19990",
    features: [
      "Business Consultation",
      "100% Foreign Ownership",
      "Business License",
      "MOA & AOA",
      "0% withhold",
      "100% profit repatriation",
      "Flexi desk",
      "Dedicated Manager"
    ],
    popular: false,
  }
];

export default function PricingSection() {
  return (
    <section className="relative my-12 md:my-20 py-10 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

      <div className="relative w-full px-4 sm:w-[85%] max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 z-10">
        
        {/* --- Business Analysis & Advisory Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1C6880]/5 border border-[#1C6880]/10 rounded-3xl p-6 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#1C6880] text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 uppercase">
                Strategy First
              </div>
              <h2 className="text-[#1C6880] font-bold text-2xl xs:text-3xl md:text-4xl mb-4 md:mb-6 font-[family-name:var(--font-playfair)] leading-tight">
                Business Analysis <br className="hidden xs:block lg:hidden" /> & Advisory
              </h2>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                Get a clear view of your business potential with strategic analysis. We help you make informed decisions using market insights and industry benchmarking.
              </p>
              <Link href="#form" className="group inline-flex items-center gap-2 text-[#1C6880] font-bold hover:gap-4 transition-all text-sm md:text-base">
                Request a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { icon: LineChart, title: "Business Planning Support", desc: "Roadmap for sustainable success." },
                { icon: Target, title: "Structure Optimization", desc: "Maximizing efficiency from day one." },
                { icon: TrendingUp, title: "Growth-Focused Advisory", desc: "Insights designed to scale." }
              ].map((item, i) => (
                <div key={i} className="flex items-center lg:items-start gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 transition-transform active:scale-[0.98]">
                  <div className="bg-[#1C6880]/10 p-2.5 md:p-3 rounded-xl text-[#1C6880] shrink-0">
                    <item.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C6880] text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs text-gray-500 md:mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Pricing Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-2"
        >
          <h2 className="uppercase font-bold text-2xl xs:text-3xl md:text-4xl tracking-tight text-[#1C6880] mb-3">
            Transparent Pricing
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto italic">
            Pick a setup package that fits your goals. <br className="xs:hidden" /> No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'border-[#FFD700] shadow-xl md:scale-105 z-20' 
                  : 'border-[#1C6880]/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-1.5 rounded-full text-[10px] font-black shadow-md uppercase tracking-wider flex items-center gap-1 whitespace-nowrap">
                  <Star size={12} fill="black" /> Best Value Choice
                </div>
              )}

              <div className="mb-5 text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#1C6880] mb-1">{plan.name}</h3>
              </div>

              <div className="mb-6 text-center sm:text-left pb-4 border-b border-gray-50">
                <span className="text-3xl font-black text-[#1C6880]">{plan.price}</span>
                <span className="text-gray-400 text-xs ml-1">/total</span>
              </div>

              {/* Feature list optimized for 2-column on mobile to save vertical space */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-3 mb-8 min-h-0 sm:min-h-[320px]">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[11px] md:text-xs text-gray-600 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link href="#form">
                  <Button className={`w-full font-bold py-6 rounded-2xl transition-all active:scale-95 ${
                    plan.popular 
                      ? 'bg-[#1C6880] text-white shadow-lg shadow-[#1C6880]/20' 
                      : 'bg-white border-2 border-[#1C6880] text-[#1C6880] hover:bg-[#1C6880] hover:text-white'
                  }`}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}