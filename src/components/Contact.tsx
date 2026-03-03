"use client"

import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-gradient mb-6">GET IN TOUCH</h2>
          <p className="text-foreground/50 tracking-widest uppercase font-headline">Contact our organizing committee</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Card */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-headline text-accent uppercase">COORDINATORS</h3>
              <div className="space-y-6">
                <div className="group">
                  <div className="text-foreground/40 text-xs font-headline tracking-widest mb-1">FACULTY IN-CHARGE</div>
                  <div className="text-xl font-headline group-hover:text-accent transition-colors">Dr. L.R. Priya</div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1">
                    <Phone className="w-4 h-4 text-accent" /> +91 94436 45678
                  </div>
                </div>
                <div className="group">
                  <div className="text-foreground/40 text-xs font-headline tracking-widest mb-1">STUDENT CHAIRMAN</div>
                  <div className="text-xl font-headline group-hover:text-secondary transition-colors">Aditya Narayan</div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1">
                    <Phone className="w-4 h-4 text-secondary" /> +91 88705 12345
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a href="#" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent hover:bg-accent hover:text-background hover:neon-glow-cyan transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:neon-glow-purple transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-background transition-all duration-300 shadow-green-400/20 shadow-lg">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2">
            <div className="glass rounded-[3rem] overflow-hidden h-[450px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.918919632871!2d77.72886731478415!3d8.71182249374013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04118c7c945b1d%3A0xc3f9824058d9294a!2sFrancis%20Xavier%20Engineering%20College!5e0!3m2!1sen!2sin!4v1647416345678!5m2!1sen!2sin" 
                className="w-full h-full grayscale invert opacity-60 group-hover:opacity-100 transition-opacity" 
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl pointer-events-none">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <div className="font-headline text-lg">Francis Xavier Engineering College</div>
                    <div className="text-foreground/60 text-sm">Vannarpettai, Tirunelveli, Tamil Nadu 627003</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
