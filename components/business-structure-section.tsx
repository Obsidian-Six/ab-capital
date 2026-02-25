'use client'

import { Card, CardHeader } from '@/components/ui/card'
import { MapPin, CheckCircle2, Building2, Landmark, Globe2, Briefcase } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const companies = [
  { name: 'Limited Liability Company (LLC)', type: 'Mainland', icon: Building2, bg: '/assets/images/card-bg-img.jpg' },
  { name: 'Free Zone Companies', type: 'Free Zone', icon: Globe2, bg: '/assets/images/card-bg-img.jpg' },
  { name: 'UAE Joint Stock Company', type: 'Corporate', icon: Landmark, bg: '/assets/images/card-bg-img.jpg' },
  { name: 'Trade Representative Office', type: 'Branch', icon: MapPin, bg: '/assets/images/card-bg-img.jpg' },
  { name: 'Dual License Branch Office', type: 'Hybrid', icon: Briefcase, bg: '/assets/images/card-bg-img.jpg' },
  { name: 'Extension Branch Office', type: 'Branch', icon: Landmark, bg: '/assets/images/card-bg-img.jpg' }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring',
      stiffness: 100, 
      damping: 15 
    } 
  }
}

export default function BusinessStructureSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#1F6981] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 text-center lg:text-left"
          >
            <h2 className="text-white font-black text-3xl xs:text-4xl md:text-5xl leading-tight tracking-tight uppercase">
              Business Structures <br />
              <span className="text-teal-200/80 text-2xl xs:text-3xl md:text-4xl">in Dubai</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-teal-400 rounded-full mx-auto lg:mx-0" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-teal-50 text-base md:text-lg leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              We help you choose the right business structure based on your goals, activity, and budget — ensuring a smooth and efficient setup.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              {['Mainland Setup', 'Free Zone Setup', 'Offshore Solutions'].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  key={item} 
                  className="flex items-center gap-2 text-[10px] xs:text-xs font-bold text-teal-100 bg-white/10 px-3 py-2 rounded-lg border border-white/10 whitespace-nowrap"
                >
                  <CheckCircle2 size={14} className="text-teal-300" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {companies.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="group h-full relative overflow-hidden rounded-[2rem] border-none shadow-xl transition-all duration-500">
                {/* Background Image Layer (Hidden on mobile to save performance/clarity unless hovered) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 hidden sm:block"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />
                
                {/* Overlay: White by default, Teal on hover */}
                <div className="absolute inset-0 bg-white group-hover:bg-[#1F6981]/95 transition-all duration-500 ease-in-out" />

                <CardHeader className="relative h-full flex flex-col items-center justify-center space-y-4 md:space-y-6 py-10 md:py-14 z-10 text-center">
                  {/* Floating Badge */}
                  <span className="absolute top-4 right-4 md:top-8 md:right-8 text-[9px] md:text-[10px] font-black tracking-widest uppercase py-1 px-3 md:py-1.5 md:px-3.5 rounded-full bg-[#1F6981]/10 text-[#1F6981] group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    {item.type}
                  </span>

                  {/* Icon Box */}
                  <div className="p-4 md:p-6 bg-[#1F6981] text-white rounded-2xl shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-[#1F6981] group-hover:-translate-y-2">
                    <item.icon size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>

                  {/* Content Area */}
                  <div className="space-y-2">
                    <h3 className="text-base md:text-xl font-bold px-4 text-slate-800 group-hover:text-white transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-20 text-center text-teal-100/40 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase px-4"
        >
          Optimize Ownership • Navigate Regulations • Sustainable Growth
        </motion.p>
      </div>
    </section>
  )
}