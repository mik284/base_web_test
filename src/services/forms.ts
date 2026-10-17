import { getAttribution } from '@/utils/attribution';

/**
 * Website form submissions. Each form posts to the endpoint configured at
 * build time (FORMS_ENDPOINT). Success is only reported once the endpoint has
 * accepted the submission; without an endpoint, submission fails truthfully.
 */

export type JourneyType =
  | 'merchant'
  | 'collab_application'
  | 'referral_introduction'
  | 'strategic_partnership'
  | 'ai_waitlist'
  | 'hospitality_interest'
  | 'support';

export type EntryMotion =
  | 'self_serve'
  | 'assisted'
  | 'interest_registration'
  | 'application';

export interface Submission {
  form: string;
  journeyType: JourneyType;
  entryMotion: EntryMotion;
  submissionId: string;
  fields: Record<string, unknown>;
}

const ENDPOINT = process.env.FORMS_ENDPOINT as string | undefined;

export class FormsUnavailableError extends Error {}

export const submitForm = async ({
  form,
  journeyType,
  entryMotion,
  submissionId,
  fields,
}: Submission) => {
  if (!ENDPOINT) {
    throw new FormsUnavailableError('No form endpoint is configured.');
  }
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      form,
      journey_type: journeyType,
      entry_motion: entryMotion,
      // Lets the receiving service discard duplicate writes on retry.
      submission_id: submissionId,
      submitted_from: window.location.pathname,
      attribution: getAttribution(),
      fields,
    }),
  });
  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
};
