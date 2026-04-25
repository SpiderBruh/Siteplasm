
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { aiProjectInquiryAssistant } from '@/ai/flows/ai-project-inquiry-assistant';
import { Send, MessageSquareText, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  businessType: z.string().min(1, { message: "Please select your business type." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  description: z.string().min(10, { message: "Tell us a bit more about your project." }),
});

export const Contact: React.FC = () => {
  const { toast } = useToast();
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      budget: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  const handleAiInquiry = async () => {
    if (!aiQuery) return;
    setAiLoading(true);
    try {
      const result = await aiProjectInquiryAssistant({ query: aiQuery });
      setAiResponse(result.answer);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "AI Assistant Offline",
        description: "Please try again later or email us.",
      });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
                [ GET IN TOUCH ]
              </p>
              <h2 className="font-headline text-6xl md:text-9xl text-primary leading-[0.85]">
                READY TO BUILD SOMETHING GREAT?
              </h2>
            </div>
            <p className="font-body text-xl text-secondary leading-relaxed max-w-lg">
              Tell us about your project. We'll get back to you within 24 hours with a scope and quote.
            </p>
            
            <div className="space-y-4 pt-12 border-t border-border">
              <p className="font-code text-secondary text-sm">Or email us directly at</p>
              <a href="mailto:hello@siteplasm.com" className="font-subheading text-2xl text-primary hover:text-highlight transition-colors block underline underline-offset-8">
                hello@siteplasm.com
              </a>
            </div>

            {/* AI Assistant Card */}
            <div className="bg-surface p-8 border border-border mt-12 space-y-4 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquareText className="w-5 h-5 text-highlight" />
                <h3 className="font-subheading text-lg text-primary uppercase">Project Assistant</h3>
              </div>
              <p className="font-body text-sm text-secondary">
                Got a quick question about our services or process? Ask our AI.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="e.g., How much for a landing page?" 
                  className="bg-background border-border text-primary focus:ring-highlight rounded-none"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAiInquiry()}
                />
                <Button 
                  onClick={handleAiInquiry} 
                  disabled={aiLoading}
                  className="bg-highlight hover:bg-accent text-background rounded-none"
                >
                  {aiLoading ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
              {aiResponse && (
                <div className="mt-4 p-4 bg-background border border-highlight/20 text-secondary font-body text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {aiResponse}
                </div>
              )}
            </div>
          </div>

          <div className="bg-surface p-8 md:p-12 border border-border">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-code text-xs text-secondary uppercase">Name</label>
                  <Input {...form.register("name")} className="bg-background border-border text-primary focus:border-highlight rounded-none h-12" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-code text-xs text-secondary uppercase">Email</label>
                  <Input {...form.register("email")} className="bg-background border-border text-primary focus:border-highlight rounded-none h-12" placeholder="Email Address" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-code text-xs text-secondary uppercase">Business Type</label>
                  <Select onValueChange={(v) => form.setValue("businessType", v)}>
                    <SelectTrigger className="bg-background border-border text-primary rounded-none h-12">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface border-border">
                      <SelectItem value="retail">Retail / E-Commerce</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="service">Service-Based</SelectItem>
                      <SelectItem value="saas">SaaS / Startup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="font-code text-xs text-secondary uppercase">Budget Range</label>
                  <Select onValueChange={(v) => form.setValue("budget", v)}>
                    <SelectTrigger className="bg-background border-border text-primary rounded-none h-12">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface border-border">
                      <SelectItem value="tier1">Under ₱15,000</SelectItem>
                      <SelectItem value="tier2">₱15,000–₱30,000</SelectItem>
                      <SelectItem value="tier3">₱30,000–₱60,000</SelectItem>
                      <SelectItem value="tier4">₱60,000+</SelectItem>
                      <SelectItem value="custom">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-code text-xs text-secondary uppercase">Project Description</label>
                <Textarea 
                  {...form.register("description")}
                  className="bg-background border-border text-primary focus:border-highlight rounded-none min-h-[150px]" 
                  placeholder="Tell us about your goals, timeline, and must-have features..." 
                />
              </div>

              <Button type="submit" className="w-full h-16 bg-highlight hover:bg-accent text-background font-headline text-2xl uppercase rounded-none tracking-widest transition-all">
                Send It →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
