export type MembershipFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type MembershipSubmitResult =
  | { status: "success" }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

const FORMSPREE_ID_PATTERN = /^[A-Za-z0-9]+$/;

export function getMembershipFormEndpoint(
  rawId: string | undefined = import.meta.env.VITE_FORMSPREE_MEMBERSHIP_ID,
): string | null {
  const value = rawId?.trim();
  if (!value) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (!FORMSPREE_ID_PATTERN.test(value)) {
    return null;
  }

  return `https://formspree.io/f/${value}`;
}

export async function submitMembershipForm(
  payload: MembershipFormPayload,
): Promise<MembershipSubmitResult> {
  const endpoint = getMembershipFormEndpoint();
  if (!endpoint) {
    return { status: "unconfigured" };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "First name": payload.firstName,
        "Last name": payload.lastName,
        email: payload.email,
        Phone: payload.phone,
        _replyto: payload.email,
        _subject: "Belize Kids monthly membership signup",
      }),
    });

    if (response.ok) {
      return { status: "success" };
    }

    const data = (await response.json().catch(() => null)) as
      | { error?: string; errors?: Array<{ message?: string }> }
      | null;

    const message =
      data?.error ||
      data?.errors
        ?.map((item) => item.message)
        .filter((item): item is string => Boolean(item))
        .join(" ") ||
      "We could not send your signup. Please try again.";

    return { status: "error", message };
  } catch {
    return {
      status: "error",
      message:
        "We could not send your signup. Check your connection and try again.",
    };
  }
}
