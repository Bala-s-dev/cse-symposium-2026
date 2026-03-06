'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    time: '09:00 AM',
    title: 'Participant Verification and Inauguration',
    desc: 'Official commencement of XTREME 26 with the welcome address and lighting of the lamp at FX Main Auditorium.',
  },
  {
    time: '10:30 AM',
    title: 'Morning Arena',
    desc: 'Project Expo, Paperix, and Web Craft competitions kick off across their respective technical zones.',
  },
  {
    time: '01:00 PM',
    title: 'Networking Lunch',
    desc: 'A scheduled break for all participants to refuel and network. Lunch is provided at the venue.',
  },
  {
    time: '01:50 PM',
    title: 'Afternoon Arena',
    desc: 'High-intensity sessions for Bug Bounding, Quiz War, and Prompt Battle begin.',
  },
  {
    time: '03:00 PM',
    title: 'Valedictory & Awards',
    desc: 'The grand closing ceremony where certificates and awards are distributed to the winners.',
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-headline text-gradient text-center mb-16 md:mb-24 uppercase">
          EVENT TIMELINE
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-accent via-primary to-secondary/20 z-0" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 relative z-10 pl-10 md:pl-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-background border-2 md:border-4 border-accent z-20 shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                />

                <div className="w-full md:w-1/2">
                  <div
                    className={`glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-accent/10 transition-all hover:border-accent group ${
                      i % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <div className="text-accent font-headline text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">
                      {item.time}
                    </div>

                    <h3 className="text-lg md:text-2xl font-headline mb-2 md:mb-4 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform">
                      {item.title}
                    </h3>

                    <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
