'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, School, Terminal } from 'lucide-react';

const stats = [
  { label: 'PARTICIPANTS', value: 300, icon: Users, suffix: '+' },
  { label: 'EVENTS', value: 6, icon: Trophy, suffix: '' },
  { label: 'COLLEGES', value: 10, icon: School, suffix: '+' },
  { label: 'INNOVATIONS', value: 50, icon: Terminal, suffix: '+' },
];

export default function About() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;

              if (start >= end) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-headline text-gradient mb-4 md:mb-6">
            ABOUT XTREME 26
          </h2>

          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            Xtreme 26 is the flagship national-level technical symposium of the
            Computer Science and Engineering department at Francis Xavier
            Engineering College. We bring together the brightest minds to
            explore, compete, and innovate across the frontiers of modern
            technology.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="glass p-5 md:p-8 rounded-xl md:rounded-2xl group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              <stat.icon className="w-6 h-6 md:w-10 md:h-10 text-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform" />

              <div className="text-xl sm:text-3xl md:text-5xl font-black font-headline text-foreground mb-1 md:mb-2">
                {counts[i].toLocaleString()}
                {stat.suffix}
              </div>

              <div className="text-[8px] sm:text-xs tracking-[0.2em] font-headline text-foreground/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl md:rounded-3xl border-white/5 text-center"
        >
          <p className="text-lg md:text-2xl font-headline text-foreground/80 leading-relaxed italic">
            "Pushing the boundaries of technical innovation through
            collaboration and competition."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
