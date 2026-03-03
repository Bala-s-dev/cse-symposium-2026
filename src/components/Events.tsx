"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  BrainCircuit, 
  ShieldAlert, 
  Cpu, 
  Laptop, 
  Terminal, 
  Database, 
  Cloud, 
  Binary, 
  Layers,
  ArrowRight
} from "lucide-react"

const technicalEvents = [
  {
    title: "24h Hackathon",
    desc: "A high-stakes coding marathon to build industry-changing solutions.",
    prize: "₹15,000",
    icon: Terminal,
    tags: ["Development", "AI", "Cloud"],
    details: "Teams of 3-4 will compete to solve real-world problems. Full mentorship and API access provided. Judgment based on innovation, technical depth, and presentation. Start building the future today."
  },
  {
    title: "Code Sprint",
    desc: "Fast-paced competitive programming challenge.",
    prize: "₹5,000",
    icon: Code2,
    tags: ["Algorithms", "DS"],
    details: "Solve complex algorithmic problems within a set time limit. Platform: HackerRank. Languages: C++, Java, Python. Speed and accuracy are your only allies."
  },
  {
    title: "AI Model Build",
    desc: "Build and train models to solve specific data sets.",
    prize: "₹8,000",
    icon: BrainCircuit,
    tags: ["Machine Learning", "Vision"],
    details: "Participants are given a training dataset and must optimize their model for maximum accuracy on a hidden test set. Focus areas include Computer Vision and Natural Language Processing."
  },
  {
    title: "CTF: Cyber Siege",
    desc: "Capture the flag competition focusing on security exploits.",
    prize: "₹7,000",
    icon: ShieldAlert,
    tags: ["Security", "Network"],
    details: "Engage in a series of security challenges involving cryptography, web exploitation, and reverse engineering. Find the hidden flags before the time runs out."
  },
  {
    title: "SQL Maestro",
    desc: "Advanced database query optimization and design challenge.",
    prize: "₹4,000",
    icon: Database,
    tags: ["Data", "SQL"],
    details: "Test your skills in complex query writing, database normalization, and performance tuning. Only the most efficient data manipulators will survive."
  },
  {
    title: "Cloud Architecture",
    desc: "Design scalable and resilient infrastructure for modern apps.",
    prize: "₹6,000",
    icon: Cloud,
    tags: ["Infrastructure", "DevOps"],
    details: "Use cloud-native principles to design a distributed system. Participants will be judged on scalability, cost-effectiveness, and fault tolerance."
  },
  {
    title: "Project Expo",
    desc: "Showcase your hardware or software innovations.",
    prize: "₹10,000",
    icon: Cpu,
    tags: ["Hardware", "Innovation"],
    details: "Open-themed exhibition for students. Prototypes and working models are highly encouraged. Industry experts will evaluate based on commercial viability and impact."
  },
  {
    title: "Bug Bounty",
    desc: "Find and fix critical errors in large-scale codebases.",
    prize: "₹3,000",
    icon: Binary,
    tags: ["Debugging", "Testing"],
    details: "We provide a buggy codebase; you provide the fixes. Multiple levels of difficulty across different tech stacks including React, Node.js, and Python."
  },
  {
    title: "System Design",
    desc: "Architect large-scale distributed systems from scratch.",
    prize: "₹5,000",
    icon: Layers,
    tags: ["Scalability", "Backend"],
    details: "A design-only competition where you architect components for systems like Uber, Netflix, or WhatsApp. Focus on load balancing, caching, and data consistency."
  }
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  return (
    <section id="events" className="py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="border-accent/30 text-accent font-headline mb-4 uppercase tracking-[0.2em] px-4 py-1">
            Elite Competitions
          </Badge>
          <h2 className="text-4xl md:text-7xl font-black font-headline text-gradient mb-6">TECHNICAL ARENA</h2>
          <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
            Where theoretical knowledge meets practical execution. Compete with the best minds in the country across diverse technical domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalEvents.map((event) => (
            <div 
              key={event.title}
              className="glass p-8 rounded-[2rem] group hover:border-accent border-transparent transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors border border-white/5 group-hover:border-accent/20">
                    <event.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-headline text-[10px] uppercase">
                    WIN {event.prize}
                  </Badge>
                </div>

                <h3 className="text-2xl font-headline mb-4 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-foreground/50 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {event.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-headline text-foreground/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-2 text-accent font-headline text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase">
                  View Rules & Reg <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass inline-flex items-center gap-6 p-6 rounded-3xl border-white/5">
            <div className="text-left">
              <div className="text-xs font-headline text-foreground/40 uppercase tracking-widest mb-1">Participation Cap</div>
              <div className="text-xl font-headline text-foreground">50 Teams per Event</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-left">
              <div className="text-xs font-headline text-foreground/40 uppercase tracking-widest mb-1">Mode</div>
              <div className="text-xl font-headline text-accent">On-Campus / Hybrid</div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="glass border-accent/20 max-w-2xl bg-background/95 text-foreground backdrop-blur-2xl p-0 overflow-hidden rounded-[2.5rem]">
          <div className="p-8 md:p-12 space-y-8">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                  {selectedEvent?.icon && <selectedEvent.icon className="w-10 h-10 text-accent" />}
                </div>
                <div>
                  <DialogTitle className="text-3xl md:text-4xl font-headline text-foreground">
                    {selectedEvent?.title}
                  </DialogTitle>
                  <div className="flex gap-2 mt-2">
                    {selectedEvent?.tags?.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="border-white/10 text-[10px] uppercase text-foreground/50">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogDescription className="text-foreground/70 text-lg leading-relaxed pt-2">
                {selectedEvent?.details}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center">
                <span className="font-headline text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-1">TOP PRIZE</span>
                <span className="font-headline text-2xl text-accent">{selectedEvent?.prize}</span>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center">
                <span className="font-headline text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-1">ELGIBILITY</span>
                <span className="font-headline text-lg text-foreground">UG/PG Students</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 h-14 bg-accent text-background font-black font-headline tracking-widest uppercase hover:bg-accent/80 transition-all rounded-2xl text-lg">
                REGISTER NOW
              </Button>
              <Button variant="outline" className="flex-1 h-14 border-white/10 hover:bg-white/5 font-headline tracking-widest uppercase rounded-2xl">
                DOWNLOAD BROCHURE
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
