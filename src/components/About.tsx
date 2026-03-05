"use client"

import { useEffect, useState, useRef } from "react"
import { getTechTrendSpotlight } from "@/ai/flows/ai-driven-tech-trend-spotlight"
import { Sparkles, Users, Trophy, School, Terminal } from "lucide-react"

const stats = [
  { label: "PARTICIPANTS", value: 1000, icon: Users, suffix: "+" },
  { label: "EVENTS", value: 25, icon: Trophy, suffix: "+" },
  { label: "COLLEGES", value: 10, icon: School, suffix: "+" },
  { label: "PRIZE POOL", value: 50000, icon: Terminal, prefix: "₹", suffix: "+" },
]

export default function About() {
  const [insight, setInsight] = useState<string>("Loading future insights...")
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    async function fetchInsight() {
      try {
        const result = await getTechTrendSpotlight({ 
          focusAreas: ["AI & Machine Learning", "Cybersecurity", "Blockchain", "Quantum Computing"] 
        })
        setInsight(result.insight)
      } catch (err) {
        setInsight("Innovation is the heartbeat of Xtreme 26, where the next generation of tech leaders is born.")
      }
    }
    fetchInsight()

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        stats.forEach((stat, i) => {
          let start = 0
          const end = stat.value
          const duration = 2000
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[i] = end
                return newCounts
              })
              clearInterval(timer)
            } else {
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[i] = Math.floor(start)
                return newCounts
              })
            }
          }, 16)
        })
        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-headline text-gradient mb-4 md:mb-6">ABOUT XTREME 26</h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            Xtreme 26 is the flagship national-level technical symposium of the Computer Science and Engineering department at Francis Xavier Engineering College. We bring together the brightest minds to explore, compete, and innovate across the frontiers of modern technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass p-5 md:p-8 rounded-xl md:rounded-2xl group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
              <stat.icon className="w-6 h-6 md:w-10 md:h-10 text-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-3xl md:text-5xl font-black font-headline text-foreground mb-1 md:mb-2">
                {stat.prefix}{counts[i].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-[8px] sm:text-xs tracking-[0.2em] font-headline text-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AI Insight Box */}
        <div className="glass p-6 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden border-accent/20">
          <div className="md:absolute md:top-0 md:right-0 p-0 md:p-4 mb-6 md:mb-0">
            <div className="bg-accent/20 text-accent w-fit px-3 py-1 rounded-full text-[10px] font-headline tracking-widest flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> AI GENERATED TREND
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl md:text-3xl font-headline text-accent mb-2 md:mb-4">Tech Spotlight</h3>
              <p className="text-foreground/60 text-xs md:text-sm">Our intelligent system curates daily insights for symposium attendees.</p>
            </div>
            <div className="w-full md:w-2/3">
              <div className="text-base md:text-2xl font-medium italic border-l-4 border-accent pl-4 md:pl-6 py-1 md:py-2 leading-relaxed text-foreground/90">
                "{insight}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}