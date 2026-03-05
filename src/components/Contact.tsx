"use client"

import { Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-headline text-gradient mb-4 md:mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-foreground/50 tracking-widest text-[10px] md:text-sm uppercase font-headline">
            Contact our organizing committee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Info Card */}
          <div className="space-y-6 md:space-y-8">
            <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl space-y-6">
              <h3 className="text-xl md:text-2xl font-headline text-accent uppercase">
                COORDINATORS
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <div className="text-foreground/40 text-[10px] font-headline tracking-widest mb-1">
                    FACULTY IN-CHARGE
                  </div>
                  <div className="text-lg md:text-xl font-headline group-hover:text-accent transition-colors">
                    Dr. E. MANOHAR
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1 text-sm">
                    <Phone className="w-4 h-4 text-accent" /> +91 9443670173
                  </div>
                </div>
                <div className="group">
                  <div className="text-foreground/40 text-[10px] font-headline tracking-widest mb-1">
                    STUDENT CO-ORDINATOR
                  </div>
                  <div className="text-lg md:text-xl font-headline group-hover:text-secondary transition-colors">
                    IYYAPPAN V G
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1 text-sm">
                    <Phone className="w-4 h-4 text-secondary" /> +91 9443670173
                  </div>
                  <div className="text-lg md:text-xl font-headline group-hover:text-secondary transition-colors">
                    HARRISH M
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 mt-1 text-sm">
                    <Phone className="w-4 h-4 text-secondary" /> +91 6385485754
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4 md:gap-6">
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass flex items-center justify-center text-accent hover:bg-accent hover:text-background hover:neon-glow-cyan transition-all duration-300"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:neon-glow-purple transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-background transition-all duration-300 shadow-green-400/10 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2">
            <div className="glass rounded-[2rem] md:rounded-[3.5rem] overflow-hidden h-[300px] sm:h-[400px] md:h-[450px] relative group border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5724246391424!2d77.72153007501535!3d8.732086991317866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411f2fd003b89%3A0xcbfcb2bcc6823787!2sFrancis%20Xavier%20Engineering%20College%2C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1772714469584!5m2!1sen!2sin"
                className="w-full h-full grayscale invert opacity-50 md:opacity-60 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 glass p-4 md:p-6 rounded-xl md:rounded-2xl pointer-events-none border-white/20">
                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent mt-0.5 md:mt-1 shrink-0" />
                  <div>
                    <div className="font-headline text-sm md:text-lg">
                      Francis Xavier Engineering College
                    </div>
                    <div className="text-foreground/60 text-[10px] md:text-sm">
                      Vannarpettai, Tirunelveli, Tamil Nadu 627003
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}