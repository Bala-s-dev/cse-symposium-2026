"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock, Calendar, Rocket } from "lucide-react"
import Countdown from "./Countdown"

export default function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    "Where Innovation Meets Intelligence",
    "Empowering Future Engineers",
    "Unleashing Digital Creativity"
  ]

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length
      const fullText = phrases[current]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 pb-12">
      <div className="z-10 max-w-5xl mx-auto space-y-6 md:space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-headline tracking-widest uppercase animate-pulse">
            <Rocket className="w-3 h-3" /> LAUNCHING MARCH 27, 2026
          </div>
          <h2 className="text-foreground/60 font-headline tracking-[0.3em] md:tracking-[0.5em] text-[10px] sm:text-xs md:text-sm uppercase">
            Department of Computer Science & Engineering Presents
          </h2>
        </div>
        
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-headline tracking-tighter text-gradient leading-none drop-shadow-[0_0_20px_rgba(138,43,226,0.6)]">
            XTREME 26
          </h1>
          <p className="text-base sm:text-xl md:text-3xl font-medium text-foreground/80 tracking-wide min-h-[1.5em] typing-cursor px-4">
            {text}
          </p>
        </div>

        <div className="py-2 md:py-6 w-full overflow-hidden">
          <div className="text-[10px] font-headline text-accent/40 uppercase tracking-[0.5em] mb-4">Countdown to Launch</div>
          <Countdown />
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-sm sm:text-lg md:text-2xl font-headline text-accent/80 tracking-widest uppercase">
            Francis Xavier Engineering College
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-10 text-foreground/60 text-xs sm:text-sm md:text-base font-medium">
            <span className="flex items-center gap-2 text-secondary">
              <Calendar className="w-4 h-4 shrink-0" />
              MARCH 27, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              09:00 AM
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              FX MAIN AUDITORIUM
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8">
          <Button 
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-headline tracking-widest bg-accent hover:bg-accent/80 text-background rounded-full neon-glow-cyan transition-all duration-300 transform hover:scale-105"
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-headline tracking-widest border-primary text-primary hover:bg-primary/10 rounded-full transition-all duration-300 transform hover:scale-105" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE ARENA
          </Button>
        </div>
      </div>

      {/* Parallax elements */}
      <div className="hidden sm:block absolute top-[20%] left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-[20%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <a href="#about" className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-foreground/40 hover:text-accent transition-colors">
        <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  )
}
