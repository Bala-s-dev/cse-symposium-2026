
"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  FileText, 
  Globe, 
  ShieldAlert, 
  Trophy, 
  Sparkles,
  ArrowRight
} from "lucide-react"

const technicalEvents = [
  {
    title: "Project Expo",
    desc: "Showcase your hardware or software innovations to industry experts.",
    icon: Cpu,
    tags: ["Innovation", "Hardware", "Software"],
    details: "A grand stage for innovators. Whether it's an IoT prototype, an AI-powered app, or a revolutionary hardware design, present your project and compete for the top spot. Evaluation is based on technical complexity, social impact, and scalability."
  },
  {
    title: "Paperix",
    desc: "Present your technical research papers on cutting-edge technologies.",
    icon: FileText,
    tags: ["Research", "Presentation"],
    details: "The ultimate platform for academic excellence. Submit and present your original research papers in domains like AI, Cybersecurity, Blockchain, or Quantum Computing. Focus on methodology, innovation, and clarity of presentation."
  },
  {
    title: "Web craft",
    desc: "Design and build the most responsive and aesthetic web solutions.",
    icon: Globe,
    tags: ["Frontend", "Backend", "UI/UX"],
    details: "Transform ideas into digital reality. Participants will be given a theme and must build a functional web application within the time limit. Judging criteria include UI/UX design, code efficiency, and feature implementation."
  },
  {
    title: "Bug Bounding",
    desc: "Hunt for vulnerabilities and fix critical errors in complex codebases.",
    icon: ShieldAlert,
    tags: ["Debugging", "Security"],
    details: "Test your analytical skills by diving into buggy codebases. Identify security flaws, logic errors, and performance bottlenecks. The faster and more accurately you patch the system, the higher you climb."
  },
  {
    title: "Quiz war",
    desc: "Battle it out in a high-intensity technical trivia challenge.",
    icon: Trophy,
    tags: ["Knowledge", "Speed"],
    details: "A fast-paced technical quiz covering everything from computer architecture to modern software trends. Multiple rounds including buzzer rounds and rapid-fire questions will determine the ultimate tech wizard."
  },
  {
    title: "Prompt Battle",
    desc: "Master the art of Generative AI by crafting the perfect prompts.",
    icon: Sparkles,
    tags: ["GenAI", "Creativity"],
    details: "Compete in the frontier of AI. Participants are given specific image or text generation tasks and must use LLMs or diffusion models to produce the closest match using expert prompting techniques."
  }
]

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const googleFormUrl = "https://www.google.com/url?q=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4%2Fedit%3Fusp%3Dsharing_eil_se_dm%26ts%3D69a6b308&source=gmail&ust=1772772623658000&usg=AOvVaw06xDHGFj-W_xTf_H2fHc2v";

  return (
    <section id="events" className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 blur-[100px] md:blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <Badge variant="outline" className="border-accent/30 text-accent font-headline mb-4 uppercase tracking-[0.2em] px-3 md:px-4 py-1 text-[10px] md:text-xs">
            Elite Competitions
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-gradient mb-4 md:mb-6 leading-tight">TECHNICAL ARENA</h2>
          <p className="text-foreground/60 text-base md:text-xl leading-relaxed">
            Push your limits across six specialized domains. Where knowledge meets execution in the ultimate test of skill.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {technicalEvents.map((event) => (
            <div 
              key={event.title}
              className="glass p-6 md:p-8 rounded-2xl md:rounded-[2rem] group hover:border-accent border-transparent transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors border border-white/5 group-hover:border-accent/20">
                    <event.icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-headline text-[8px] md:text-[10px] uppercase">
                    TECHNICAL
                  </Badge>
                </div>

                <h3 className="text-xl md:text-2xl font-headline mb-3 md:mb-4 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-foreground/50 text-xs md:text-sm mb-6 md:mb-8 line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2 pt-4">
                  {event.tags.map(tag => (
                    <span key={tag} className="text-[8px] md:text-[10px] font-headline text-foreground/30 uppercase tracking-widest bg-white/5 px-2 py-0.5 md:py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 md:pt-6 flex items-center gap-2 text-accent font-headline text-[10px] md:text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase">
                  View Rules & Reg <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="glass border-accent/20 w-[90vw] md:max-w-2xl bg-background/95 text-foreground backdrop-blur-2xl p-0 overflow-hidden rounded-2xl md:rounded-[2.5rem]">
          <div className="p-6 md:p-12 space-y-6 md:space-y-8 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-6">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-accent/10 border border-accent/20">
                  {selectedEvent?.icon && <selectedEvent.icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />}
                </div>
                <div>
                  <DialogTitle className="text-2xl md:text-4xl font-headline text-foreground">
                    {selectedEvent?.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedEvent?.tags?.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="border-white/10 text-[8px] md:text-[10px] uppercase text-foreground/50">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogDescription className="text-foreground/70 text-base md:text-lg leading-relaxed pt-2">
                {selectedEvent?.details}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex flex-col justify-center text-center">
                <span className="font-headline text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-1">CERTIFICATE</span>
                <span className="font-headline text-xl md:text-2xl text-accent">EXCELLENCE</span>
              </div>
              <div className="p-4 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex flex-col justify-center text-center">
                <span className="font-headline text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-1">ELIGIBILITY</span>
                <span className="font-headline text-base md:text-lg text-foreground">UG/PG Students</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                asChild
                className="flex-1 h-12 md:h-14 bg-accent text-background font-black font-headline tracking-widest uppercase hover:bg-accent/80 transition-all rounded-xl md:rounded-2xl text-base md:text-lg"
              >
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">REGISTER NOW</a>
              </Button>
              <Button variant="outline" className="flex-1 h-12 md:h-14 border-white/10 hover:bg-white/5 font-headline tracking-widest uppercase rounded-xl md:rounded-2xl text-xs">
                RULES BROCHURE
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
