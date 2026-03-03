"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

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
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      <div className="z-10 max-w-5xl mx-auto space-y-6">
        <h2 className="text-accent font-headline tracking-[0.5em] text-sm md:text-lg animate-pulse">
          DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING PRESENTS
        </h2>
        
        <div className="space-y-2">
          <h1 className="text-6xl md:text-9xl font-black font-headline tracking-tighter text-gradient leading-none drop-shadow-[0_0_15px_rgba(138,43,226,0.6)]">
            XTREME 26
          </h1>
          <p className="text-xl md:text-3xl font-medium text-foreground/80 tracking-wide min-h-[1.5em] typing-cursor">
            {text}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg md:text-2xl font-headline text-accent/80 tracking-widest uppercase">
            Francis Xavier Engineering College
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground/60 text-sm md:text-base font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary neon-glow-purple" />
              MARCH 2026
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent neon-glow-cyan" />
              TIRUNELVELI, TN
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Button className="h-14 px-10 text-lg font-headline tracking-widest bg-accent hover:bg-accent/80 text-background rounded-full neon-glow-cyan transition-all duration-300 transform hover:scale-105">
            REGISTER NOW
          </Button>
          <Button variant="outline" className="h-14 px-10 text-lg font-headline tracking-widest border-primary text-primary hover:bg-primary/10 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => document.getElementById('about')?.scrollIntoView()}>
            EXPLORE EVENTS
          </Button>
        </div>
      </div>

      {/* Parallax elements */}
      <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-foreground/40 hover:text-accent transition-colors">
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown />
      </a>
    </section>
  )
}
