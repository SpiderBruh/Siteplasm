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
import { PaperPlaneRight, ChatCircleText, CircleNotch, ShieldCheck } from '@phosphor-icons/react';
import { supabase } from '@/lib/supabase';
import { sendInquiryNotification } from '@/lib/resend';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  businessType: z.string().min(1, { message: "Please select your business type." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  description: z.string().min(10, { message: "Tell us a bit more about your project." }),
});

export const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{
          name: values.name,
          email: values.email,
          project_type: values.businessType,
          message: `${values.description} (Budget: ${values.budget})`,
          status: 'new'
        }]);

      if (dbError) throw dbError;

      await sendInquiryNotification({
        name: values.name,
        email: values.email,
        message: values.description,
        projectType: values.businessType
      });

      toast({
        title: "Message Sent Successfully!",
        description: "We've received your inquiry and will get back to you within 24 hours.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleAiInquiry = async () => {
    if (!aiQuery) return;
    setAiLoading(true);
    try {
      const result = await aiProjectInquiryAssistant({ query: aiQuery });
      setAiResponse(result.answer);
      
      await supabase.from('ai_logs').insert([{
        query: aiQuery,
        response: result.answer
      }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "AI Assistant Offline",
        description: "Please check your API keys or try again later.",
      });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-16">
            <div>
              <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
                No Commitment. Just a Conversation.
              </p>
              <h2 className="font-headline font-bold text-6xl md:text-[7vw] text-primary leading-none uppercase tracking-tighter">
                LET'S TALK ABOUT YOUR REVENUE MACHINE.
              </h2>
            </div>
            <p className="font-body font-medium text-2xl text-secondary leading-relaxed max-w-lg">
              Tell us what you're building. We'll respond within 24 hours with a clear scope, exact price, and delivery date. No vague proposals. No "we'll get back to you." A real answer.
            </p>
            <div className="border border-border p-8 bg-surface">
              <p className="font-code font-bold text-sm text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck weight="fill" className="w-5 h-5 text-highlight" /> Our promise to you
              </p>
              <p className="font-body font-medium text-secondary text-base leading-relaxed">
                You'll know the price before we start. You'll have a working prototype in 48 hours. Your site will be live in 5 days. And if you don't see results in 90 days, we rebuild it free.
              </p>
            </div>
            
            <div className="space-y-4 pt-12 border-t border-border">
              <p className="font-code font-bold text-secondary text-xs uppercase tracking-widest">Or email us directly at</p>
              <a href="mailto:hello@siteplasm.com" className="font-headline font-bold text-4xl text-primary hover:text-highlight transition-colors block uppercase tracking-wide">
                hello@siteplasm.com
              </a>
            </div>

            {/* AI Assistant Card */}
            <div className="bg-primary text-background p-8 border border-border mt-16 space-y-6 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-2 border-b border-background/20 pb-6">
                <ChatCircleText weight="fill" className="w-8 h-8 text-highlight" />
                <h3 className="font-headline font-bold text-2xl uppercase tracking-widest">Lead Strategist AI</h3>
              </div>
              <p className="font-body font-medium text-base text-background/80">
                Ready to scale? Ask our AI strategist about your project goals or our 48-hour prototyping process.
              </p>
              <div className="flex gap-0 border border-background">
                <Input 
                  placeholder="e.g., Can you build a prototype in 48 hours?" 
                  className="bg-primary border-none text-background placeholder:text-background/40 focus:ring-0 rounded-none h-14 font-body text-base"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAiInquiry()}
                />
                <Button 
                  onClick={handleAiInquiry} 
                  disabled={aiLoading}
                  className="bg-background text-primary hover:bg-highlight hover:text-primary rounded-none h-14 px-6 border-l border-background"
                >
                  {aiLoading ? <CircleNotch weight="bold" className="animate-spin w-6 h-6" /> : <PaperPlaneRight weight="bold" className="w-6 h-6" />}
                </Button>
              </div>
              {aiResponse && (
                <div className="mt-6 p-6 bg-background text-primary font-body font-medium text-base leading-relaxed border border-border">
                  {aiResponse}
                </div>
              )}
            </div>
          </div>

          <div className="bg-surface p-8 md:p-14 border border-border">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-code font-bold text-xs text-primary uppercase tracking-widest">Name</label>
                  <Input {...form.register("name")} className="bg-background border-border text-primary focus:border-primary rounded-none h-14 font-body" placeholder="Full Name" />
                </div>
                <div className="space-y-3">
                  <label className="font-code font-bold text-xs text-primary uppercase tracking-widest">Email</label>
                  <Input {...form.register("email")} className="bg-background border-border text-primary focus:border-primary rounded-none h-14 font-body" placeholder="Email Address" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-code font-bold text-xs text-primary uppercase tracking-widest">Business Type</label>
                  <Select onValueChange={(v) => form.setValue("businessType", v)}>
                    <SelectTrigger className="bg-background border-border text-primary rounded-none h-14 font-body">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface border-border font-body rounded-none">
                      <SelectItem value="retail">Retail / E-Commerce</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="service">Service-Based</SelectItem>
                      <SelectItem value="saas">SaaS / Startup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <label className="font-code font-bold text-xs text-primary uppercase tracking-widest">Budget Range</label>
                  <Select onValueChange={(v) => form.setValue("budget", v)}>
                    <SelectTrigger className="bg-background border-border text-primary rounded-none h-14 font-body">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface border-border font-body rounded-none">
                      <SelectItem value="tier1">Under ₱15,000</SelectItem>
                      <SelectItem value="tier2">₱15,000–₱30,000</SelectItem>
                      <SelectItem value="tier3">₱30,000–₱60,000</SelectItem>
                      <SelectItem value="tier4">₱60,000+</SelectItem>
                      <SelectItem value="custom">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-code font-bold text-xs text-primary uppercase tracking-widest">Project Description</label>
                <Textarea 
                  {...form.register("description")}
                  className="bg-background border-border text-primary focus:border-primary rounded-none min-h-[180px] font-body resize-none" 
                  placeholder="Tell us about your goals, timeline, and must-have features..." 
                />
              </div>

              <Button type="submit" className="w-full h-20 bg-primary hover:bg-highlight hover:text-primary text-background font-headline font-bold text-2xl uppercase rounded-none tracking-widest transition-colors">
                Send It <PaperPlaneRight weight="bold" className="ml-3 w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
