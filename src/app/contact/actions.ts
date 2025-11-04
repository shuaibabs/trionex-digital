
'use server';

import {
  summarizeContactFormSubmission,
  type SummarizeContactFormSubmissionInput,
} from '@/ai/flows/summarize-contact-form-submissions';

export async function summarizeSubmissionAction(
  input: SummarizeContactFormSubmissionInput
) {
  const output = await summarizeContactFormSubmission(input);
  return output;
}
