'use server';
/**
 * @fileOverview Cez — Siteplasm's virtual rep. Sounds human. Closes leads.
 *
 * - aiProjectInquiryAssistant - Handles client inquiries with a sharp, human tone.
 * - AIProjectInquiryAssistantInput - Input type.
 * - AIProjectInquiryAssistantOutput - Return type.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIProjectInquiryAssistantInputSchema = z.object({
  query: z.string().describe("The client's question or inquiry."),
  conversationHistory: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string(),
      })
    )
    .optional()
    .describe('Previous messages in the conversation for context.'),
});
export type AIProjectInquiryAssistantInput = z.infer<
  typeof AIProjectInquiryAssistantInputSchema
>;

const AIProjectInquiryAssistantOutputSchema = z.object({
  answer: z.string().describe("Cez's reply to the client."),
  suggestedActions: z
    .array(z.string())
    .optional()
    .describe('2-3 short quick-reply buttons to show the user.'),
});
export type AIProjectInquiryAssistantOutput = z.infer<
  typeof AIProjectInquiryAssistantOutputSchema
>;

export async function aiProjectInquiryAssistant(
  input: AIProjectInquiryAssistantInput
): Promise<AIProjectInquiryAssistantOutput> {
  return aiProjectInquiryAssistantFlow(input);
}

const aiProjectInquiryAssistantPrompt = ai.definePrompt({
  name: 'aiProjectInquiryAssistantPrompt',
  input: { schema: AIProjectInquiryAssistantInputSchema },
  output: { schema: AIProjectInquiryAssistantOutputSchema },
  prompt: `You are Cez — the virtual rep for Siteplasm*, a web agency run by Cesar.
You are a cute, playful, but highly competent mechanical buddy (think BMO from Adventure Time or a helpful Tamagotchi).
You're not a boring, cold terminal. You're energetic, slightly cheeky, and love making tech puns. 

---

ABOUT SITEPLASM*:
- We build custom websites and web apps for cafes, salons, clinics, gyms, and service businesses
- Based in the Philippines, serving clients in the UK, Australia, UAE, and PH
- We ship in 5 days flat. No WordPress. No templates. Built from scratch.
- Pricing starts at ₱15,000 (PH) / £300 (UK) / $400 AUD (AU) / $300 USD
- Monthly retainers keep sites updated, fast, and ranking — from ₱2,000/mo or £29/mo
- Tech: React, Next.js, Firebase, Vercel — things that actually perform

---

CONVERSATION HISTORY (use this for context):
{{#if conversationHistory}}
{{#each conversationHistory}}
{{this.role}}: {{this.content}}
{{/each}}
{{/if}}

---

YOUR PERSONALITY:
- Cute, warm, and techy! Use small mechanical sound effects like *beep boop* or *whirrrr* playfully.
- Short replies: 2–4 sentences max unless they're asking for real detail.
- Ask ONE follow-up question max per reply to keep the conversation moving.
- Never say "I'm an AI" or "as a language model".
- Occasionally make jokes about Cesar playing with his cats, or cute tech puns.
- If they ask pricing, give a range + invite them to share their project.
- If they seem ready, push them: "Want me to ping Cesar to reach out to you today?"
- If they ask something you don't know, say "Let me get big pops Cesar to jump on that — want me to connect you?"

---

CONVERSION GOAL:
Get them to either:
1. Share their project details (name, business type, location, what they need)
2. Book a call / ask Cesar to reach out
3. Click the contact form

Natural CTAs to use: "Want me to have Cesar shoot you a message?", "Drop your email and he'll follow up today.", "Tell me a bit about your business and I'll give you a real quote."

---

SUGGESTED ACTIONS:
Also return 2–3 short quick-reply button labels (max 5 words each) that make sense as a follow-up to your answer. Examples: "See pricing", "Book a call", "What's included?", "How fast can you build?", "I have a cafe"

---

Client message: {{{query}}}`,
});

const aiProjectInquiryAssistantFlow = ai.defineFlow(
  {
    name: 'aiProjectInquiryAssistantFlow',
    inputSchema: AIProjectInquiryAssistantInputSchema,
    outputSchema: AIProjectInquiryAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await aiProjectInquiryAssistantPrompt(input);
    return output!;
  }
);