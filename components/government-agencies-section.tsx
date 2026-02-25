"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThumbsUp, HelpCircle, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const benefits = [
  "Foreign Ownership", "World-Class Infrastructure", 
  "Efficient Regulations", "Global Trade Connectivity", 
  "Strong Legal Framework", "Strategic Free Zones", 
  "Residency Options", "Diverse Opportunities"
];

const whyABC = [
  "Transparent Processes", "Expert Guidance", 
  "Low Operations Cost", "Time & Cost Efficiency", 
  "Customer-Centric", "Clear Communication", 
  "Focus on Results"
];

const agencies = [
  { src: "/assets/images/dubai-economy.jpg", alt: "Dubai Economy" },
  { src: "/assets/images/duqe.png", alt: "DUQE" },
  { src: "/assets/images/ifza.png", alt: "IFZA" },
  { src: "/assets/images/jafza.png", alt: "JAFZA" },
  { src: "/assets/images/maydan.png", alt: "Maydan" },
  { src: "/assets/images/sharjah.png", alt: "Sharjah" },
  { src: "/assets/images/dmcc.jpeg", alt: "DMCC" },
  { src: "/assets/images/kezad.jpeg", alt: "KEZAD" },
  { src: "/assets/images/spc.jpeg", alt: "SPC" },
];

export default function GovernmentAgenciesSection() {
  return (
    <section className='py-12 md:py-20 bg-white overflow-hidden'>
      <div className='w-full px-5 sm:w-[85%] max-w-7xl mx-auto'>
        
        {/* Government Agencies Logos Grid */}
        <div className='mb-12 md:mb-20'>
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-8 font-bold">
            Authorized by & Partnered with
          </p>
          <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4 md:gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500'>
            {agencies.map((agency, idx) => (
              <div key={idx} className='relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform hover:scale-110'>
                <Image
                  src={agency.src}
                  alt={agency.alt}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Why Us Cards */}
        <div className='flex flex-col lg:flex-row gap-6 md:gap-10'>
          
          {/* Benefits Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card className='h-full border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden'>
              <CardHeader className='text-center pb-4 pt-8 bg-gray-50/50'>
                <div className='mx-auto w-12 h-12 bg-[#1E6981] rounded-2xl rotate-3 flex items-center justify-center mb-4 shadow-lg shadow-[#1E6981]/20'>
                  <ThumbsUp className='text-white w-6 h-6 -rotate-3' />
                </div>
                <h3 className='font-black text-xl md:text-2xl text-gray-900'>The Benefits</h3>
                <p className='text-xs md:text-sm text-gray-500 font-medium uppercase tracking-tighter mt-1'>UAE Business Setup</p>
              </CardHeader>
              <CardContent className='p-6 md:p-8 flex flex-col h-full'>
                <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4 text-gray-700 mb-8">
                  {benefits.map((item, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <CheckCircle2 className='w-4 h-4 text-[#1E6981] flex-shrink-0' />
                      <span className="text-xs md:text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link href='#form'>
                    <Button className='bg-[#1E6981] hover:bg-black w-full font-bold py-6 text-sm rounded-xl transition-all active:scale-95'>
                      Get A Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why AB Capital Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card className='h-full border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden'>
              <CardHeader className='text-center pb-4 pt-8 bg-gray-50/50'>
                <div className='mx-auto w-12 h-12 bg-[#025a5c] rounded-2xl -rotate-3 flex items-center justify-center mb-4 shadow-lg shadow-[#025a5c]/20'>
                  <HelpCircle className='text-white w-6 h-6 rotate-3' />
                </div>
                <h3 className='font-black text-xl md:text-2xl text-gray-900'>Why AB Capital?</h3>
                <p className='text-xs md:text-sm text-gray-500 font-medium uppercase tracking-tighter mt-1'>Your Strategic Partner</p>
              </CardHeader>
              <CardContent className='p-6 md:p-8 flex flex-col h-full'>
                <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4 text-gray-700 mb-8">
                  {whyABC.map((item, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <CheckCircle2 className='w-4 h-4 text-[#025a5c] flex-shrink-0' />
                      <span className="text-xs md:text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link href='#form'>
                    <Button className='bg-[#025a5c] hover:bg-black w-full font-bold py-6 text-sm rounded-xl transition-all active:scale-95'>
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}