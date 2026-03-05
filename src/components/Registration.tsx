"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  college: z.string().min(2, "College name is required"),
  department: z.string().min(2, "Department is required"),
  phone: z.string().min(10, "Valid phone required"),
  email: z.string().email("Invalid email"),
  event: z.string().min(1, "Please select an event"),
})

export default function Registration() {
  const { toast } = useToast()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", college: "", department: "", phone: "", email: "", event: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSuccess(true)
    toast({
      title: "Success!",
      description: "Registration completed successfully.",
    })
    setTimeout(() => setIsSuccess(false), 5000)
    form.reset()
  }

  return (
    <section id="registration" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="glass p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[3rem] relative overflow-hidden border-accent/20">
          <div className="absolute -top-12 sm:-top-24 -right-12 sm:-right-24 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 blur-[80px] sm:blur-[100px] rounded-full" />
          <div className="absolute -bottom-12 sm:-bottom-24 -left-12 sm:-left-24 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[80px] sm:blur-[100px] rounded-full" />
          
          <div className="relative z-10 text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline text-gradient mb-3 md:mb-4 uppercase">SECURE YOUR SPOT</h2>
            <p className="text-foreground/60 tracking-widest text-[10px] md:text-sm uppercase font-headline">Limited registrations available</p>
          </div>

          {isSuccess ? (
            <div className="text-center space-y-6 py-10 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-16 md:w-24 h-16 md:h-24 text-accent mx-auto" />
              <h3 className="text-2xl md:text-3xl font-headline">Registration Successful!</h3>
              <p className="text-foreground/60 text-sm md:text-base">Check your email for the confirmation ticket and event details.</p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-accent text-accent font-headline tracking-widest text-xs h-10 px-6">REGISTER ANOTHER</Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline tracking-widest text-[10px] uppercase opacity-60">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} className="h-11 md:h-12 bg-white/5 border-white/10 focus:border-accent rounded-xl text-base md:text-lg" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline tracking-widest text-[10px] uppercase opacity-60">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="name@college.edu" {...field} className="h-11 md:h-12 bg-white/5 border-white/10 focus:border-accent rounded-xl text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline tracking-widest text-[10px] uppercase opacity-60">College Name</FormLabel>
                        <FormControl>
                          <Input placeholder="College of Engineering" {...field} className="h-11 md:h-12 bg-white/5 border-white/10 focus:border-accent rounded-xl text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-headline tracking-widest text-[10px] uppercase opacity-60">Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 00000 00000" {...field} className="h-11 md:h-12 bg-white/5 border-white/10 focus:border-accent rounded-xl text-base" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="event"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline tracking-widest text-[10px] uppercase opacity-60">Primary Event Selection</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 md:h-12 bg-white/5 border-white/10 focus:border-accent rounded-xl text-foreground text-sm">
                            <SelectValue placeholder="Select an event to participate" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="glass border-white/10 text-foreground">
                          <SelectItem value="project-expo">Project Expo</SelectItem>
                          <SelectItem value="paperix">Paperix</SelectItem>
                          <SelectItem value="web-craft">Web craft</SelectItem>
                          <SelectItem value="bug-bounding">Bug Bounding</SelectItem>
                          <SelectItem value="quiz-war">Quiz war</SelectItem>
                          <SelectItem value="prompt-battle">Prompt Battle</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-14 md:h-16 bg-accent hover:bg-accent/80 text-background font-black font-headline tracking-widest text-lg md:text-xl rounded-xl md:rounded-2xl neon-glow-cyan transform hover:scale-[1.01] transition-all flex items-center justify-center gap-3">
                  COMPLETE REGISTRATION <Send className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  )
}