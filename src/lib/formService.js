const BACKEND_BASE_URL = (
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL || "http://localhost:8000"
).replace(/\/+$/, "");
const BACKEND_CLIENT_KEY =
  process.env.NEXT_PUBLIC_BACKEND_CLIENT_KEY || "shanti_eye_tech";

export async function registerContactLead(data) {
  const endpoint = `${BACKEND_BASE_URL}/api/v1/shanti-eye-tech/register`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  let response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Client-Key": BACKEND_CLIENT_KEY,
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error("Backend request timed out. Please try again.");
    }
    throw new Error(`Unable to connect to the backend at ${BACKEND_BASE_URL}.`);
  } finally {
    clearTimeout(timeout);
  }

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    const details = Array.isArray(result?.details) ? result.details.join(" ") : "";
    throw new Error(details || result?.message || "Failed to submit contact form");
  }

  return result;
}

export async function submitContactLeadToGoogleSheets(data) {
  const response = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      form: "Contact",
      data: {
        fullName: data.name,
        mobile: data.mobile_number,
        treatment: data.service,
        message: data.message,
        ip_address: data.ip_address,
        utm_source: data.utm_source,
      },
    }),
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.error || "Google Sheets submission failed");
  }

  return result;
}
