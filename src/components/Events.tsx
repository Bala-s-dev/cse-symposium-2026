"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, BrainCircuit, ShieldAlert, Cpu, Laptop, Terminal, Gamepad2, Camera, Palette, Quote, Search } from "lucide-react"

const technicalEvents = [
  {
    title: "24h Hackathon",
    desc: "A high-stakes coding marathon to build industry-changing solutions.",
    prize: "₹15,000",
    icon: Terminal,
    category: "Technical",
    details: "Teams of 3-4 will compete to solve real-world problems. Full mentorship and API access provided. Judgment based on innovation, technical depth, and presentation."
  },
  {
    title: "Code Sprint",
    desc: "Fast-paced competitive programming challenge.",
    prize: "₹5,000",
    icon: Code2,
    category: "Technical",
    details: "Solve complex algorithmic problems within a set time limit. Platform: HackerRank. Languages: C++, Java, Python."
  },
  {
    title: "AI Model Build",
    desc: "Build and train models to solve specific data sets.",
    prize: "₹8,000",
    icon: BrainCircuit,
    category: "Technical",
    details: "Participants are given a training dataset and must optimize their model for maximum accuracy on a hidden test set. Focus: Computer Vision / NLP."
  },
  {
    title: "Project Expo",
    desc: "Showcase your hardware or software innovations.",
    prize: "₹10,000",
    icon: Cpu,
    category: "Technical",
    details: "Open-themed exhibition for students. Prototypes and working models are highly encouraged. Industry experts will evaluate."
  },
  {
    title: "Paper Presentation",
    desc: "Present your research in emerging tech domains.",
    prize: "₹5,000",
    icon: Laptop,
    category: "Technical",
    details: "Topics: IoT, Edge Computing, Bioinformatics, Cybersecurity. Submit your abstracts early for shortlisting."
  },
  {
    title: "Bug Debugging",
    desc: "Find and fix critical errors in various codebases.",
    prize: "₹3,000",
    icon: ShieldAlert,
    category: "Technical",
    details: "Multiple levels of code debugging across different languages. The fastest debugger wins."
  }
]

const nonTechnicalEvents = [
  { title: "Valorant Tournament", icon: Gamepad2, desc: "5v5 competitive tactical shooter battle.", prize: "₹5,000" },
  { title: "Tech Meme Contest", icon: Quote, desc: "Show off your tech humor and creativity.", prize: "₹2,000" },
  { title: "Photography", icon: Camera, desc: "Capture the essence of tech and human interaction.", prize: "₹2,000" },
  { title: "UI/UX Design", icon: Palette, desc: "Design a futuristic app interface in 2 hours.", prize: "₹3,000" },
  { title: "Tech Quiz", icon: Search, desc: "Test your general awareness in the tech world.", prize: "₹2,000" }
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  return (
    <section id="events" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-gradient mb-4">TECHNICAL EVENTS</h2>
          <p className="text-foreground/50 tracking-widest uppercase text-sm font-headline">Pushing your technical limits</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {technicalEvents.map((event) => (
            <div 
              key={event.title}
              className="glass p-8 rounded-2xl group hover:border-accent border-transparent transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
              <event.icon className="w-12 h-12 text-accent mb-6 group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
              <h3 className="text-2xl font-headline mb-3 group-hover:text-accent transition-colors">{event.title}</h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{event.desc}</p>
              <div className="flex justify-between items-center">
                <Badge className="bg-primary/20 text-primary border-primary/30 font-headline text-[10px] uppercase py-1">PRIZE: {event.prize}</Badge>
                <Button variant="ghost" className="text-xs font-headline text-accent group-hover:translate-x-2 transition-transform uppercase tracking-widest">DETAILS →</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-gradient mb-4">NON-TECHNICAL</h2>
          <p className="text-foreground/50 tracking-widest uppercase text-sm font-headline">Beyond the code</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {nonTechnicalEvents.map((event) => (
            <div key={event.title} className="glass p-6 rounded-2xl text-center group hover:bg-white/10 transition-all border-white/5">
              <event.icon className="w-10 h-10 text-secondary mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <h4 className="text-lg font-headline mb-2 group-hover:text-secondary transition-colors">{event.title}</h4>
              <p className="text-xs text-foreground/50 mb-4">{event.desc}</p>
              <Badge variant="outline" className="border-secondary/30 text-secondary text-[10px] font-headline uppercase">WIN {event.prize}</Badge>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="glass border-accent/20 max-w-2xl bg-background/95 text-foreground backdrop-blur-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-headline text-accent flex items-center gap-4">
              {selectedEvent?.icon && <selectedEvent.icon className="w-8 h-8" />}
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription className="text-foreground/70 text-lg py-4">
              {selectedEvent?.details}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="font-headline text-sm text-foreground/50">WINNING PRIZE</span>
              <span className="font-headline text-accent text-lg">{selectedEvent?.prize}</span>
            </div>
            <Button className="w-full h-12 bg-accent text-background font-headline tracking-widest uppercase hover:bg-accent/80 neon-glow-cyan mt-4">
              REGISTER FOR THIS EVENT
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
