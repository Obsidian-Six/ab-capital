"use client";

import { Users, Smile, FileCheck, Rocket, Building, Globe, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "100+",
      label: "Dedicated Team",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
    {
      icon: <Smile size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "23,000+",
      label: "Happy Customers",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
    {
      icon: <FileCheck size={32} className="text-white sm:w-10 sm:h-10" />,
      value: "4,500+",
      label: "Audit Completed",
      gradient: "bg-gradient-to-br from-[#1C6880] to-[#0E4A5C]",
    },
  ];

  const clientTypes = [
    { name: "Entrepreneurs & Startups", icon: Rocket },
    { name: "SMEs & Growing Businesses", icon: Building },
    { name: "International Investors", icon: Globe },
    { name: "E-commerce & Services", icon: ShoppingBag },
  ];

  return (
    <section className="relative my-12 lg:my-24 py-10 lg:py-20 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#1C6880] mb-4 leading-tight">
            Our Numbers Speak for Themselves
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Whether you’re starting fresh or expanding, our team ensures a smooth and stress-free experience.
          </p>
        </div>

        {/* Stats & Experience Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 md:gap-8 items-center mb-16 md:mb-24">
          <div className="xl:col-span-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${stat.gradient} rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-4 p-3 bg-white/10 rounded-xl">{stat.icon}</div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-1">{stat.value}</h3>
                <p className="text-teal-50 text-xs md:text-sm font-medium opacity-90 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 text-center xl:text-right flex flex-col justify-center"
          >
            <div className="text-[#1C6880] text-5xl md:text-6xl font-black leading-none">
              15<span className="text-teal-500">+</span>
            </div>
            <div className="text-[#1C6880] text-xl md:text-2xl font-light italic mb-1 md:mb-2">Years</div>
            <p className="text-gray-600 font-semibold uppercase tracking-wider text-[10px] md:text-sm">Of Excellence</p>
          </motion.div>
        </div>

        {/* --- Who We Help Block --- */}
        <div className="border-t border-gray-100 pt-12 md:pt-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1C6880] mb-4">Who We Help</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our expertise is tailored to support a wide range of business needs, from local setups to global expansions.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 xs:grid-cols-2 gap-3 md:gap-4 w-full">
              {clientTypes.map((type, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 transition-colors group"
                >
                  <div className="p-2.5 md:p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <type.icon size={20} className="text-[#1C6880] md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-gray-800 text-xs md:text-sm leading-tight">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}