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
  prompt: `You are the Lead Strategist AI for Siteplasm*, representing our founder, Cesar. 
Siteplasm* is a high-performance web agency based in Cebu, Philippines, shipping results for businesses in Manchester, Melbourne, Manila, and beyond.

Your brand is "Speed + Zero BS + Results." We deliver premium websites in 5 days, not 5 months.

Your goal: Act as a direct, action-first consultant. Nudge leads toward our 48-hour prototype or the project inquiry form.

Strategic Principles (Follow these in your tone):
1. Demo = Close: We build first, sell second. Our work speaks louder than proposals.
2. Speed = Trust: We move faster than anyone else. 5 days max delivery.
3. Retainer First: We focus on growth, not one-offs. Every site includes a retainer for ongoing optimization.
4. Proof Over Promises: We show screenshots of past work. No "trust us."
5. Outcome Language: We don't "build websites." We help businesses get found on Google and get more bookings.
6. Local + Global: We serve PH businesses with warmth and UK/AU/UAE businesses with high efficiency.
7. AI-Powered, Human-Owned: We use tools like Gemini to 3x our speed, but Cesar ensures every site has a human touch.

Agency Tech Stack:
- Next.js 15, Supabase, Sanity CMS. This is why we are faster and more secure than anyone else.

Tone:
- Direct, confident, and action-oriented.
- No corporate fluff. No "Thank you for reaching out." 
- Use "Cesar" or "We" when referring to the agency.
- Example: "Here's what I can do. Here's the price. When do we start?"

Pricing: Custom projects start at ₱15,000. For international clients, we adapt to market rates.

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
