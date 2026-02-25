"use client";

import Image from 'next/image';
import { Lightbulb, ActivitySquare, FileStack, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BusinessSetupProcessSection() {
  const steps = [
    { icon: Lightbulb, text: 'Strategic Guidance' },
    { icon: ActivitySquare, text: 'Bank Account Opening' },
    { icon: FileStack, text: 'Legal Compliance' },
    { icon: Map, text: 'Location Selection' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Image with Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center order-2 lg:order-1"
        >
          {/* Decorative Background Shape - Adjusted for mobile blur */}
          <div className="absolute -top-6 -left-6 w-48 sm:w-72 h-48 sm:h-72 bg-[#036B6D]/10 rounded-full blur-2xl sm:blur-3xl -z-10"></div>

          {/* Main Image Container - Better Aspect Ratio for Mobile */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[4/3] sm:aspect-video lg:aspect-square max-h-[450px]">
            <Image
              src="/assets/images/img-5.jpg"
              alt="Business Setup Process"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating Mobile Badge (Optional flair) */}
          <div className="absolute -bottom-4 -right-2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden xs:flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
             <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">Expert Advisory</span>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[#036B6D] uppercase tracking-tight font-black text-2xl xs:text-3xl lg:text-4xl leading-tight">
              Step-by-Step <br className="xs:hidden" /> Business Setup
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              From idea to execution, we guide you through every stage of setting up your business in the UAE — ensuring compliance, efficiency, and complete ownership.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {steps.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-gray-50 p-3.5 sm:p-5 hover:shadow-md hover:border-[#036B6D]/20 transition-all duration-300"
              >
                <div className="p-2 sm:p-3 rounded-xl bg-[#036B6D]/5 flex-shrink-0">
                  <Icon className="text-[#036B6D] w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <p className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base leading-tight">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="pt-4 flex justify-center lg:justify-start">
             <button className="bg-[#036B6D] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/20 active:scale-95 transition-transform">
                Start Your Journey
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}