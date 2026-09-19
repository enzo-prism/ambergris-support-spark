// Central Formspree configuration for belizekids.org.
//
// Formspree endpoint IDs are public-by-design (they ship in frontend code).
// Never put Formspree API keys here — endpoints only.

export const FORMSPREE_CONTACT_ENDPOINT =
  "https://formspree.io/f/mbgllwdo";

export const FORMSPREE_MEMBERSHIP_ENDPOINT =
  "https://formspree.io/f/mqpaaneg";

export interface FormspreeResult {
  ok: boolean;
  error?: string;
}

interface FormspreeErrorPayload {
  error?: string;
  errors?: Array<{ message?: string }>;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const extractErrorMessage = (payload: unknown, status: number): string => {
  if (isRecord(payload)) {
    const typed = payload as FormspreeErrorPayload;
    if (Array.isArray(typed.errors)) {
      const messages = typed.errors
        .map((entry) => entry?.message)
        .filter((message): message is string => typeof message === "string");
      if (messages.length > 0) {
        return messages.join(" ");
      }
    }
    if (typeof typed.error === "string") {
      return typed.error;
    }
  }
  return `Submission failed (status ${status}). Please try again.`;
};

export async function submitToFormspree(
  endpoint: string,
  data: Record<string, string>,
): Promise<FormspreeResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { ok: true };
    }

    let payload: unknown = null;
    try {
      payload = await response.json();
    } catch {
      payload = null;
    }
    return { ok: false, error: extractErrorMessage(payload, response.status) };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}
