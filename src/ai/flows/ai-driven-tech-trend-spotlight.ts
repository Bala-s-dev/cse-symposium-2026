'use server';
/**
 * @fileOverview This file defines a Genkit flow to generate a dynamic tech trend spotlight.
 *
 * - getTechTrendSpotlight - A function that fetches a brief, engaging insight related to tech trends.
 * - TechTrendSpotlightInput - The input type for the getTechTrendSpotlight function.
 * - TechTrendSpotlightOutput - The return type for the getTechTrendSpotlight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TechTrendSpotlightInputSchema = z.object({
  focusAreas: z.array(z.string()).describe('List of symposium focus areas.'),
});
export type TechTrendSpotlightInput = z.infer<typeof TechTrendSpotlightInputSchema>;

const TechTrendSpotlightOutputSchema = z.object({
  insight: z.string().describe('A brief, engaging insight related to a tech trend.'),
});
export type TechTrendSpotlightOutput = z.infer<typeof TechTrendSpotlightOutputSchema>;

export async function getTechTrendSpotlight(
  input: TechTrendSpotlightInput
): Promise<TechTrendSpotlightOutput> {
  return techTrendSpotlightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'techTrendSpotlightPrompt',
  input: {schema: TechTrendSpotlightInputSchema},
  output: {schema: TechTrendSpotlightOutputSchema},
  prompt: `You are an AI assistant generating daily tech trend insights for a computer science symposium.
Generate a brief, engaging, and inspiring insight (1-2 sentences) related to one of the following focus areas:
{{#each focusAreas}}- {{this}}
{{/each}}

Ensure the insight is suitable for a professional and innovative tech conference. It should highlight a current or emerging trend within the chosen topic, encouraging thought and discussion.

Example: "Artificial Intelligence is rapidly evolving beyond predictive models, now empowering creative applications that push the boundaries of human-machine collaboration."

Now, generate the insight:`,
});

const techTrendSpotlightFlow = ai.defineFlow(
  {
    name: 'techTrendSpotlightFlow',
    inputSchema: TechTrendSpotlightInputSchema,
    outputSchema: TechTrendSpotlightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
