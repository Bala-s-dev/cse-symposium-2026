"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Award, Users } from "lucide-react"

const workshops = [
  {
    title: "AI & Deep Learning Masterclass",
    speaker: "Dr. Sarah Chen, AI Lead",
    duration: "6 Hours",
    topics: ["CNNs", "Transformers", "Generative AI"],
    badge: "Limited Seats",
    image: "https://picsum.photos/seed/tech1/400/250"
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    speaker: "Alex Rivera, Pentester",
    duration: "4 Hours",
    topics: ["Network Security", "Vulnerability Research"],
    badge: "Trending",
    image: "https://picsum.photos/seed/tech2/400/250"
  },
  {
    title: "Blockchain & Web3",
    speaker: "James Wu, Web3 Dev",
    duration: "5 Hours",
    topics: ["Smart Contracts", "Solidity", "dApps"],
    badge: "Professional",
    image: "https://picsum.photos/seed/tech3/400/250"
  }
]

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-6 transform translate-y-1/2 -z-10" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-gradient mb-6">PREMIUM WORKSHOPS</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Get hands-on experience from industry experts in high-demand domains. Certified certificates for all attendees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.title} className="glass rounded-3xl overflow-hidden group border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-3">
              <div className="relative h-48 overflow-hidden">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-background font-headline uppercase text-[10px] tracking-widest">{workshop.badge}</Badge>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-headline group-hover:text-accent transition-colors leading-tight">{workshop.title}</h3>
                <div className="flex items-center gap-2 text-foreground/50 text-sm">
                  <Users className="w-4 h-4" /> {workshop.speaker}
                </div>
                <div className="flex flex-wrap gap-2 py-2">
                  {workshop.topics.map(t => <Badge key={t} variant="secondary" className="text-[10px] bg-white/5 border-white/10 uppercase tracking-tighter">{t}</Badge>)}
                </div>
                <div className="pt-4 flex justify-between items-center border-t border-white/5">
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Clock className="w-4 h-4" /> {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-secondary text-sm">
                    <Award className="w-4 h-4" /> Certificate
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button className="w-full py-4 rounded-xl border-2 border-accent text-accent font-headline tracking-widest uppercase hover:bg-accent hover:text-background transition-all">
                  BOOK MY SEAT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
