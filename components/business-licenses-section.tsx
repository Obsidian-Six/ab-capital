"use client";

import { FileCog, Building2, Factory, Calculator, Receipt, Users2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BusinessLicensesSection() {
  const supportServices = [
    {
      icon: Calculator,
      title: "Financial Management",
      desc: "Accurate financial records to track your growth and maintain professional standards."
    },
    {
      icon: Receipt,
      title: "Regulatory Filings",
      desc: "Expert guidance on local registration requirements and corporate reporting standards."
    },
    {
      icon: Users2,
      title: "Payroll & Operations",
      desc: "Seamless payroll management and administrative operational support."
    }
  ];

  return (
    <section className="my-12 md:my-24 font-[family-name:var(--font-poppins)] overflow-hidden">
      <div className="w-full px-5 sm:w-[90%] lg:w-[85%] max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
        
        {/* --- Business Operations Support --- */}
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-3 px-2">
            <h2 className="text-[#1E6981] uppercase font-bold text-xl xs:text-2xl md:text-3xl tracking-widest leading-tight">
              Business Operations Support
            </h2>
            <p className="text-gray-500 text-xs sm:text-base max-w-2xl mx-auto italic leading-relaxed">
              AB Capital ensures your venture is positioned within the right professional framework to operate effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
            {/* Service Sector Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 items-center p-6 md:p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group order-2 md:order-1"
            >
              <FileCog className="text-[#1E6981] w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg text-gray-900 text-center">Service Sector Support</h3>
              <p className="text-xs md:text-sm text-center text-gray-500 leading-relaxed">
                For service providers and consultants. We assist specialists in establishing their presence while maintaining full control.
              </p>
            </motion.div>

            {/* Commercial Support - Highlighted */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 items-center p-8 md:p-10 rounded-[2rem] shadow-xl md:shadow-2xl bg-[#1E6981] text-white md:scale-105 z-10 order-1 md:order-2"
            >
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-teal-200" />
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide">Commercial Operations</h3>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                  Our team assists trading businesses with their structural setup, ensuring your import/export and trading workflow is seamless.
                </p>
              </div>
            </motion.div>

            {/* Industrial Support */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 items-center p-6 md:p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group order-3"
            >
              <Factory className="text-[#1E6981] w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg text-gray-900 text-center">Industrial Logistics</h3>
              <p className="text-xs md:text-sm text-center text-gray-500 leading-relaxed">
                For manufacturing and production. We advise on operational safety, environmental standards, and facility approvals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- Ongoing Support Section --- */}
        <div className="bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h3 className="text-[#1E6981] font-bold text-2xl md:text-3xl mb-4 leading-tight">
                Management & <br className="hidden md:block" /> Ongoing Support
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                Establishment is just the beginning. Our professional support services keep your operations smooth and organized so you can scale with confidence.
              </p>
              <Link href="#form" className="inline-flex items-center gap-2 text-[#1E6981] font-bold text-sm hover:gap-4 transition-all">
                Learn About Support <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
              {supportServices.map((service, idx) => (
                <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#1E6981]/30 transition-colors">
                  <service.icon className="text-[#1E6981] mb-3 md:mb-4" size={24} />
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{service.title}</h4>
                  <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}