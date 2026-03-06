'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
    venue: 'Seminar Hall – Block B',
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
    venue: 'Block A - Main Lobby',
    schedule: '10 mins per team',
    teamSize: 'Max 3 members',
    image:
      'https://img.freepik.com/free-vector/isometric-expo-flowchart-composition-with-isolated-s-exhibit-booths-stands-people-stage-performance_1284-27644.jpg?semt=ais_hybrid&w=740&q=80',
    rules: [
      'Maximum 3 members per team.',
      'Participants must present a working model or prototype.',
      'Project must be innovative and problem-solving oriented.',
      'Evaluation: Innovation, practicality, and presentation.',
      'Participants must arrange their own project materials.',
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
      'Internet access may be restricted and AI tools are not allowed.',
      'Judging: Creativity, responsiveness, and functionality.',
    ],
  },
  {
    title: 'Code Debugging',
    subtitle: 'Code Hunt',
    desc: 'Identify and correct errors in programs across various languages.',
    icon: Terminal,
    tags: ['C/Python/Java', 'Logic'],
    details:
      'Find and fix bugs in code snippets within a strict time limit without internet resources.',
    venue: 'Programming Lab',
    schedule: '45 Minutes',
    teamSize: 'Individual',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
    rules: [
      'Individual participation.',
      'Programs will contain errors that need correction.',
      'Identify and correct errors within the time limit.',
      'Languages: C, Java, or Python.',
      'Time limit: 45 minutes.',
      'Participants must not use internet resources.',
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
      'Covers technology, programming, and general engineering.',
      'Must answer within the time limit given by the quiz master.',
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
    venue: 'AI Research Lab',
    schedule: '30 Minutes',
    teamSize: 'Individual',
    image:
      'https://img.freepik.com/premium-psd/ai-powered-video-prompt-generation_930095-3582.jpg?semt=ais_user_personalization&w=740&q=80',
    rules: [
      'Individual participation.',
      'Generate creative prompts using AI tools.',
      'Specific tasks or themes will be assigned.',
      'Time limit: 30 minutes.',
      'Evaluation: Creativity, prompt effectiveness, output quality.',
    ],
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const googleFormUrl =
    'https://docs.google.com/forms/d/1W9KAAuFQ--g223C8v_VN1JH46qBhgnNlVQ4a7sAovR4/viewform';

  return (
    <section
      id="events"
      className="py-24 relative bg-[#030712] text-white overflow-hidden min-h-screen"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-cyan-400" />
            <span className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-black">
              Arena 2026
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              Arena
            </span>
          </h2>
          <p className="text-white/50 text-xl max-w-xl font-light leading-relaxed">
            Push your limits across specialized domains where knowledge meets
            execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalEvents.map((event) => (
            <div
              key={event.title}
              onClick={() => setSelectedEvent(event)}
              className="group relative h-[480px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all duration-500 bg-[#0a0a0a]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="p-3 w-fit rounded-xl bg-cyan-400 text-black mb-4 group-hover:scale-110 transition-transform">
                    <event.icon className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase border-white/20 text-white/60 mb-2"
                  >
                    {event.subtitle}
                  </Badge>
                  <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 font-medium">
                    {event.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-cyan-400 font-black text-xs uppercase tracking-widest pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Full Dossier <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      >
        {/* Added [&>button:last-child]:hidden to remove the default small X icon */}
        <DialogContent className="sm:max-w-4xl bg-[#030712] border-white/10 p-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden text-white outline-none max-h-[90vh] flex flex-col [&>button:last-child]:hidden">
          <button
            onClick={() => setSelectedEvent(null)}
            className="absolute right-6 top-6 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-cyan-400 hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedEvent && (
            <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
              <div className="relative h-64 md:h-96 shrink-0">
                <img
                  src={selectedEvent.image}
                  className="w-full h-full object-cover"
                  alt={selectedEvent.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:left-12 pr-12">
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-400 border-none font-black mb-4">
                    {selectedEvent.subtitle}
                  </Badge>
                  <DialogTitle className="text-4xl md:text-6xl font-black uppercase text-white">
                    {selectedEvent.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-6 md:p-12 pt-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="w-full justify-start bg-white/5 rounded-2xl p-3 mb-8 border border-white/10">
                    <TabsTrigger
                      value="description"
                      className="flex-1 rounded-xl data-[state=active]:bg-cyan-400 data-[state=active]:text-black font-black uppercase text-[14px] tracking-widest"
                    >
                      Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="rules"
                      className="flex-1 rounded-xl data-[state=active]:bg-cyan-400 data-[state=active]:text-black font-black uppercase text-[14px] tracking-widest"
                    >
                      Rules
                    </TabsTrigger>
                    <TabsTrigger
                      value="logistics"
                      className="flex-1 rounded-xl data-[state=active]:bg-cyan-400 data-[state=active]:text-black font-black uppercase text-[14px] tracking-widest"
                    >
                      venue & Time
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="description"
                    className="mt-0 outline-none"
                  >
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                      <Zap className="absolute top-[-20px] right-[-20px] w-32 h-32 text-cyan-400/10 rotate-12" />
                      <p className="text-xl md:text-1xl text-white/90 leading-relaxed italic font-medium relative z-10">
                        "{selectedEvent.details}"
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="rules"
                    className="mt-0 space-y-3 outline-none"
                  >
                    {selectedEvent.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all"
                      >
                        <span className="text-cyan-400 font-black">
                          {idx + 1}.
                        </span>
                        <p className="text-white/70 font-medium">{rule}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent
                    value="logistics"
                    className="mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 outline-none"
                  >
                    {[
                      {
                        icon: MapPin,
                        label: 'Venue',
                        value: selectedEvent.venue,
                      },
                      {
                        icon: Clock,
                        label: 'Time',
                        value: selectedEvent.schedule,
                      },
                      {
                        icon: Users,
                        label: 'Team',
                        value: selectedEvent.teamSize,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center"
                      >
                        <item.icon className="w-6 h-6 text-cyan-400 mx-auto mb-4" />
                        <h4 className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-1">
                          {item.label}
                        </h4>
                        <p className="font-bold text-lg">{item.value}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>

                <Button
                  asChild
                  className="w-full h-16 mt-12 rounded-2xl bg-cyan-400 text-black font-black tracking-widest uppercase hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Initialize Registration
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
