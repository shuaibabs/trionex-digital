
'use server';
/**
 * @fileOverview Summarizes contact form submissions and routes them to the appropriate team member.
 *
 * - summarizeContactFormSubmission - A function that summarizes the contact form submission and determines the best team member to handle it.
 * - SummarizeContactFormSubmissionInput - The input type for the summarizeContactFormSubmission function.
 * - SummarizeContactFormSubmissionOutput - The return type for the summarizeContactFormSubmission function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeContactFormSubmissionInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  companyName: z.string().optional().describe('The company name of the person submitting the form.'),
  phone: z.string().describe('The phone number of the person submitting the form.'),
  interest: z.string().describe('The service or package the user is interested in.'),
  message: z.string().describe('The message from the contact form submission.'),
});
export type SummarizeContactFormSubmissionInput = z.infer<typeof SummarizeContactFormSubmissionInputSchema>;

const SummarizeContactFormSubmissionOutputSchema = z.object({
  summary: z.string().describe('A short summary of the contact form submission.'),
  suggestedTeamMember: z.string().describe('The team member best equipped to handle the submission.'),
});
export type SummarizeContactFormSubmissionOutput = z.infer<typeof SummarizeContactFormSubmissionOutputSchema>;

export async function summarizeContactFormSubmission(
  input: SummarizeContactFormSubmissionInput
): Promise<SummarizeContactFormSubmissionOutput> {
  return summarizeContactFormSubmissionFlow(input);
}

const summarizeContactFormSubmissionPrompt = ai.definePrompt({
  name: 'summarizeContactFormSubmissionPrompt',
  input: {schema: SummarizeContactFormSubmissionInputSchema},
  output: {schema: SummarizeContactFormSubmissionOutputSchema},
  prompt: `You are an AI assistant helping a marketing agency route contact form submissions.  Your job is to summarize the form submission and suggest the best team member to handle the inquiry.

  Here is the contact form submission:
  Name: {{{name}}}
  Email: {{{email}}}
  Company Name: {{{companyName}}}
  Phone: {{{phone}}}
  Interested In: {{{interest}}}
  Message: {{{message}}}

  Respond with a summary of the message, and the name of the suggested team member to handle the submission.  Make sure to respond using the specified output schema.
  `,
});

const summarizeContactFormSubmissionFlow = ai.defineFlow(
  {
    name: 'summarizeContactFormSubmissionFlow',
    inputSchema: SummarizeContactFormSubmissionInputSchema,
    outputSchema: SummarizeContactFormSubmissionOutputSchema,
  },
  async input => {
    const {output} = await summarizeContactFormSubmissionPrompt(input);
    return output!;
  }
);
