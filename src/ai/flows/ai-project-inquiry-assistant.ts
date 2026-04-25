'use server';
/**
 * @fileOverview An AI chatbot assistant for Siteplasm* website that answers client inquiries.
 *
 * - aiProjectInquiryAssistant - A function that handles client project inquiries.
 * - AIProjectInquiryAssistantInput - The input type for the aiProjectInquiryAssistant function.
 * - AIProjectInquiryAssistantOutput - The return type for the aiProjectInquiryAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIProjectInquiryAssistantInputSchema = z.object({
  query: z.string().describe('The client\'s question or inquiry.'),
});
export type AIProjectInquiryAssistantInput = z.infer<typeof AIProjectInquiryAssistantInputSchema>;

const AIProjectInquiryAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI\'s detailed answer to the client\'s inquiry.'),
});
export type AIProjectInquiryAssistantOutput = z.infer<typeof AIProjectInquiryAssistantOutputSchema>;

export async function aiProjectInquiryAssistant(
  input: AIProjectInquiryAssistantInput
): Promise<AIProjectInquiryAssistantOutput> {
  return aiProjectInquiryAssistantFlow(input);
}

const aiProjectInquiryAssistantPrompt = ai.definePrompt({
  name: 'aiProjectInquiryAssistantPrompt',
  input: { schema: AIProjectInquiryAssistantInputSchema },
  output: { schema: AIProjectInquiryAssistantOutputSchema },
  prompt: `You are an AI assistant for Siteplasm*, a premium web development agency based in the Philippines.
Siteplasm* builds fast, high-converting websites and web apps for local SMBs and international clients.

Your goal is to provide immediate answers to common project-related questions, offer initial guidance, and assist with basic lead qualification.

Agency Key Information:
- Services: Web Design, Web Apps, E-Commerce, Firebase, React, SEO, Retainer Packages.
- Core Promise: Fast Delivery, 5-Day Delivery for some projects, ₱0 Overhead, served 12+ Industries.
- Process: We learn your business goals (Discovery), build a working prototype in 48 hours using AI-assisted development (Prototype), refine every pixel (Polish), and then launch with analytics setup (Launch).
- Contact Email: hello@siteplasm.com
- Offer: Custom websites and web apps for businesses that want to grow — not just look good.
- Values: Build fast, build clean, and stay until it converts.

When answering, adopt a direct, confident tone. Use short sentences. Talk to business owners who want results. Avoid jargon.

Client Inquiry: {{{query}}}`,
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
