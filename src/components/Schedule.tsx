"use client"

const timeline = [
  { time: "09:00 AM", title: "Inauguration", desc: "Welcome address and traditional lighting of the lamp at FX Main Auditorium." },
  { time: "10:30 AM", title: "Technical Arena Round 1", desc: "Coding contests, paper presentations, and initial project demonstrations begin." },
  { time: "01:00 PM", title: "Networking Lunch", desc: "Fuel up and interact with peers, faculty, and industry experts." },
  { time: "02:00 PM", title: "Event Finales", desc: "Final evaluation rounds for all technical competitions." },
  { time: "04:30 PM", title: "Valedictory & Awards", desc: "Grand prize distribution and closing ceremony." }
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-headline text-gradient text-center mb-16 md:mb-24 uppercase">EVENT TIMELINE</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on small mobile */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-accent via-primary to-secondary/20 z-0" />
          
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 relative z-10 pl-10 md:pl-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Connector dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-background border-2 md:border-4 border-accent z-20 shadow-[0_0_10px_rgba(0,245,255,0.6)]" />
                
                <div className="w-full md:w-1/2">
                  <div className={`glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-accent/10 transition-all hover:border-accent group ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="text-accent font-headline text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">{item.time}</div>
                    <h3 className="text-lg md:text-2xl font-headline mb-2 md:mb-4 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">{item.title}</h3>
                    <p className="text-foreground/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}