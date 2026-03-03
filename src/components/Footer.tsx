"use client"

import { Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="pt-24 relative overflow-hidden">
      <div className="wave-footer">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>
      
      <div className="bg-background/95 pt-16 pb-8 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <a href="#" className="flex items-center gap-3">
                <Cpu className="w-10 h-10 text-accent" />
                <span className="font-headline font-black text-3xl text-gradient uppercase">XTREME 26</span>
              </a>
              <p className="text-foreground/60 max-w-sm leading-relaxed">
                The premier annual national-level technical symposium of Francis Xavier Engineering College. Empowering innovators since 1999.
              </p>
              <div className="text-sm font-headline tracking-widest text-foreground/40">
                Francis Xavier Engineering College, Tirunelveli
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline text-lg text-accent uppercase tracking-widest">QUICK LINKS</h4>
              <ul className="space-y-3 text-foreground/60">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#events" className="hover:text-accent transition-colors">All Events</a></li>
                <li><a href="#schedule" className="hover:text-accent transition-colors">Timeline</a></li>
                <li><a href="#registration" className="hover:text-accent transition-colors">Register</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline text-lg text-accent uppercase tracking-widest">SUPPORT</h4>
              <ul className="space-y-3 text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sponsorships</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-headline tracking-[0.3em] text-foreground/40 uppercase">
            <div>© 2026 XTREME. ALL RIGHTS RESERVED.</div>
            <div>DESIGNED BY CSE DEPARTMENT</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
