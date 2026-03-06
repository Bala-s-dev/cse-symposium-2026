'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Rocket,
  FileText,
  Globe,
  Terminal,
  BrainCircuit,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  LucideIcon,
  Zap,
  X,
  Trophy,
} from 'lucide-react';

type EventType = {
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
  details: string;
  rules: string[];
  venue: string;
  schedule: string;
  teamSize: string;
  image: string;
  prizes?: {
    first: string;
    second: string;
  };
};

const technicalEvents: EventType[] = [
  {
    title: 'Paper Presentation',
    subtitle: 'Innovators Forum',
    desc: 'Present research papers in IEEE format on emerging technologies.',
    icon: FileText,
    tags: ['IEEE Format', 'Research'],
    details:
      'A platform for students to present original research. Submit your research paper in PDF format prepared in IEEE standards.',
    venue: 'FX Main Auditorium',
    schedule: '8 mins + 2 mins Q&A',
    teamSize: 'Max 2 members',
    image:
      'https://img.freepik.com/free-vector/business-meeting-project-presentation-people-corporate-seminar-team-group-vector-illustration_1284-47646.jpg',
    rules: [
      'Maximum 3 participants per team.',
      'Presentation time: 8 minutes + 2 minutes for questions.',
      'Must bring presentation in PPT format',
      "Judges' decision will be final and binding.",
    ],
  },
  {
    title: 'Project Expo',
    subtitle: 'Innovation Showcase',
    desc: 'Showcase working models and innovative hardware/software solutions.',
    icon: Rocket,
    tags: ['Working Model', 'Innovation'],
    details:
      'Present technically innovative or problem-solving oriented projects to a panel of experts.',
    venue: 'CSE Classroom',
    schedule: '10 mins per team',
    teamSize: 'Max 3 members',
    image:
      'https://img.freepik.com/free-vector/isometric-expo-flowchart-composition-with-isolated-s-exhibit-booths-stands-people-stage-performance_1284-27644.jpg?semt=ais_hybrid&w=740&q=80',
    prizes: { first: '₹2000', second: '₹1000' },
    rules: [
      'Maximum 3 members per team.',
      'Participants must present a working model or prototype.',
      'Project must be innovative and problem-solving oriented.',
      'Evaluation: Innovation, practicality, and presentation.',
    ],
  },
  {
    title: 'Web Designing',
    subtitle: 'Web Crafting',
    desc: 'Design and develop responsive websites based on a surprise theme.',
    icon: Globe,
    tags: ['HTML/CSS', 'JavaScript'],
    details:
      'A high-pressure design challenge to create functional and aesthetic web interfaces.',
    venue: 'Computer Lab 1',
    schedule: '60 Minutes',
    teamSize: '1 or 2 members',
    image:
      'https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80',
    rules: [
      'Individual or team of 2 members allowed.',
      'Design a website based on the given theme.',
      'Judging: Creativity, responsiveness, and functionality.',
    ],
  },
  {
    title: 'Code Debugging',
    subtitle: 'Code Hunt',
    desc: 'Identify and correct errors in programs across various languages.',
    icon: Terminal,
    tags: ['C/Python/Java', 'Logic'],
    details: 'Find and fix bugs in code snippets within a strict time limit.',
    venue: 'CSE Lab 1',
    schedule: '45 Minutes',
    teamSize: 'Individual',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
    rules: [
      'Individual participation.',
      'Programs will contain errors that need correction.',
      'Languages: C, Java, or Python.',
      'Time limit: 45 minutes.',
    ],
  },
  {
    title: 'Technical Quiz',
    subtitle: 'Brain Byte Quiz',
    desc: 'Compete in an intense multi-round technical quiz challenge.',
    icon: BrainCircuit,
    tags: ['Rapid Fire', 'General Engg'],
    details:
      'Test your knowledge across technology, programming, and general engineering concepts.',
    venue: 'Main Auditorium',
    schedule: '3 Rounds',
    teamSize: 'Team of 2',
    image:
      'https://i.ytimg.com/vi/eBUWqcuu58c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUnzZg24L1N8Kqr1epNVuZDLLiNA',
    rules: [
      'Team of 2 participants.',
      'Rounds: Technical, Rapid Fire, and Visual.',
      "Judges' decision is final.",
    ],
  },
  {
    title: 'Prompt Battle',
    subtitle: 'AI Event',
    desc: 'Master prompt engineering to generate creative AI outputs.',
    icon: Sparkles,
    tags: ['GenAI', 'Prompt Engg'],
    details:
      'Generate creative outputs using AI tools based on specific tasks or themes provided.',
    venue: 'CSE Lab',
    schedule: '30 Minutes',
    teamSize: 'Individual',
    image:
      'https://img.freepik.com/premium-psd/ai-powered-video-prompt-generation_930095-3582.jpg?semt=ais_user_personalization&w=740&q=80',
    rules: [
      'Individual participation.',
      'Generate creative prompts using AI tools.',
      'Evaluation: Creativity, prompt effectiveness, output quality.',
    ],
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [activeTab, setActiveTab] = useState('description');

  const googleFormUrl =
    'https://docs.google.com/forms/d/1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4/viewform';

  return (
    <section
      id="events"
      className="py-12 md:py-24 relative bg-[#030712] text-white overflow-hidden min-h-screen"
    >
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12 md:mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 md:w-12 bg-cyan-400" />
            <span className="text-cyan-400 uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
              Arena 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              Arena
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedEvent(event);
                setActiveTab('description');
              }}
              className="group relative h-[400px] md:h-[480px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all bg-[#0a0a0a]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="p-3 w-fit rounded-xl bg-cyan-400 text-black mb-4 transition-transform duration-300 group-hover:scale-110">
                    <event.icon className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase border-white/20 text-white/70 mb-2"
                  >
                    {event.subtitle}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 font-medium">
                    {event.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-cyan-400 font-black text-xs uppercase tracking-widest pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Full Dossier <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      >
        <DialogContent className="w-[95vw] md:max-w-4xl bg-[#030712] border-white/10 p-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden text-white outline-none max-h-[90vh] flex flex-col sm:gap-0">
          <button
            onClick={() => setSelectedEvent(null)}
            className="absolute right-4 top-4 md:right-8 md:top-8 z-[100] p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-cyan-400 hover:text-black transition-all border border-white/10"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="overflow-y-auto w-full h-full scrollbar-hide">
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col"
              >
                <div className="relative h-56 md:h-96 shrink-0">
                  <img
                    src={selectedEvent.image}
                    className="w-full h-full object-cover"
                    alt={selectedEvent.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 pr-12">
                    <Badge className="bg-cyan-400 text-black font-black mb-2 md:mb-4 px-3 py-1">
                      {selectedEvent.subtitle}
                    </Badge>
                    <DialogTitle className="text-3xl md:text-6xl font-black uppercase text-white leading-tight">
                      {selectedEvent.title}
                    </DialogTitle>
                    <DialogDescription className="text-white/60 text-sm mt-2 hidden md:block">
                      Technical event details, rules, and logistics for{' '}
                      {selectedEvent.title}.
                    </DialogDescription>
                  </div>
                </div>

                <div className="p-5 md:p-12 pt-8">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full flex-wrap h-auto justify-start bg-white/5 rounded-2xl p-1 md:p-2 mb-8 border border-white/10 relative">
                      {['description', 'rules', 'logistics'].map((tab) => (
                        <TabsTrigger
                          key={tab}
                          value={tab}
                          className="flex-1 min-w-[80px] z-10 rounded-xl data-[state=inactive]:text-white/60 data-[state=active]:text-black font-black uppercase text-[10px] md:text-[14px] tracking-widest py-3 md:py-4 transition-all duration-300 relative overflow-hidden"
                        >
                          <span className="relative z-20">
                            {tab === 'description'
                              ? 'Info'
                              : tab === 'logistics'
                                ? 'Venue'
                                : 'Rules'}
                          </span>
                          {activeTab === tab && (
                            <motion.div
                              layoutId="activeTabGlow"
                              className="absolute inset-0 bg-cyan-400 -z-10"
                              transition={{
                                type: 'spring',
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    <div className="min-h-[220px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TabsContent
                            value="description"
                            className="mt-0 outline-none space-y-6"
                          >
                            <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 border-l-4 border-cyan-400 relative overflow-hidden group">
                              <Zap className="absolute top-[-20px] right-[-20px] w-32 h-32 text-cyan-400/5 rotate-12 group-hover:text-cyan-400/10 transition-colors" />
                              {/* FONT SIZE IMPROVED HERE */}
                              <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium relative z-10">
                                {selectedEvent.details}
                              </p>
                            </div>
                            {selectedEvent.prizes && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <PrizeCard
                                  label="1st Prize"
                                  amount={selectedEvent.prizes.first}
                                  color="yellow"
                                />
                                <PrizeCard
                                  label="2nd Prize"
                                  amount={selectedEvent.prizes.second}
                                  color="slate"
                                />
                              </div>
                            )}
                          </TabsContent>

                          <TabsContent
                            value="rules"
                            className="mt-0 space-y-3 outline-none"
                          >
                            {selectedEvent.rules.map((rule, idx) => (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={`${selectedEvent.title}-rule-${idx}`}
                                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all"
                              >
                                <span className="text-cyan-400 font-black text-xl">
                                  {idx + 1}.
                                </span>
                                <p className="text-white font-medium text-sm md:text-lg self-center">
                                  {rule}
                                </p>
                              </motion.div>
                            ))}
                          </TabsContent>

                          <TabsContent
                            value="logistics"
                            className="mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 outline-none"
                          >
                            <LogisticsCard
                              icon={MapPin}
                              label="Venue"
                              value={selectedEvent.venue}
                            />
                            <LogisticsCard
                              icon={Clock}
                              label="Time"
                              value={selectedEvent.schedule}
                            />
                            <LogisticsCard
                              icon={Users}
                              label="Team"
                              value={selectedEvent.teamSize}
                            />
                          </TabsContent>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </Tabs>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="mt-10 md:mt-16"
                  >
                    <Button
                      asChild
                      className="w-full h-16 md:h-20 rounded-2xl md:rounded-3xl bg-cyan-400 text-black font-black tracking-[0.2em] uppercase hover:bg-cyan-300 transition-all shadow-[0_20px_40px_rgba(34,211,238,0.2)] text-base md:text-xl"
                    >
                      <a
                        href={googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Initialize Registration
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

/**
 * Sub-components
 */

function PrizeCard({
  label,
  amount,
  color,
}: {
  label: string;
  amount: string;
  color: 'yellow' | 'slate';
}) {
  const isYellow = color === 'yellow';
  return (
    <div
      className={`p-5 rounded-2xl bg-gradient-to-br border flex items-center gap-5 transition-all hover:scale-[1.02] ${
        isYellow
          ? 'from-yellow-500/20 border-yellow-500/30 text-yellow-500'
          : 'from-slate-400/20 border-slate-400/30 text-slate-300'
      }`}
    >
      <div
        className={`p-3 rounded-xl text-black ${isYellow ? 'bg-yellow-500' : 'bg-slate-400'}`}
      >
        <Trophy className="w-6 h-6" />
      </div>
      <div>
        <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-1">
          {label}
        </p>
        <p className="text-2xl font-black text-white">{amount}</p>
      </div>
    </div>
  );
}

function LogisticsCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-cyan-400/40 transition-all group">
      <div className="w-12 h-12 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h4 className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em] mb-2">
        {label}
      </h4>
      <p className="font-bold text-white text-base md:text-lg leading-tight">
        {value}
      </p>
    </div>
  );
}
