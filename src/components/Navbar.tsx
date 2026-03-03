"use client"

import { useState, useEffect } from "react"
import { Menu, X, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Workshops", href: "#workshops" },
  { name: "Schedule", href: "#schedule" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3 border-b border-accent/20" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Cpu className="w-8 h-8 text-accent group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-headline font-bold text-2xl tracking-tighter text-gradient">XTREME 26</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-accent transition-colors tracking-widest uppercase hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-background font-headline tracking-widest neon-glow-cyan">
            REGISTER
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 text-accent" /> : <Menu className="w-8 h-8 text-accent" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-headline tracking-widest text-foreground hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-accent text-accent w-64 h-12 font-headline tracking-widest neon-glow-cyan">
            REGISTER
          </Button>
        </div>
      </div>
    </nav>
  )
}
