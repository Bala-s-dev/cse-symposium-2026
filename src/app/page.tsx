"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Events from "@/components/Events"
import Workshops from "@/components/Workshops"
import Schedule from "@/components/Schedule"
import Registration from "@/components/Registration"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import ParticlesBackground from "@/components/ParticlesBackground"
import ScrollProgress from "@/components/ScrollProgress"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".scroll-reveal")
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, { threshold: 0.1 })

    reveals.forEach(reveal => observer.observe(reveal))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      
      <div className="relative">
        <Hero />
        
        <div className="scroll-reveal">
          <About />
        </div>
        
        <div className="scroll-reveal">
          <Events />
        </div>
        
        <div className="scroll-reveal">
          <Workshops />
        </div>
        
        <div className="scroll-reveal">
          <Schedule />
        </div>
        
        <div className="scroll-reveal">
          <Registration />
        </div>
        
        <div className="scroll-reveal">
          <Contact />
        </div>
        
        <Footer />
      </div>

      <Toaster />

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-50 w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:neon-glow-cyan transition-all opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        id="back-to-top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  )
}
