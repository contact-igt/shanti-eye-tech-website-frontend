const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyeCVcViIO5lOqfb2zAb1ZNhhUQylvHqLk56JY7CBOXnqjRCC-UG25sB0CnX2y8yPd2Q/exec";

export async function sendToGoogleSheets(formName, data) {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    return {
      ok: false,
      message: "GOOGLE_APPS_SCRIPT_URL not configured",
      debug: { formName, data },
    };
  }

  const payload = { form: formName, data };
  const resp = await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await resp.text();
  let response;
  try {
    response = JSON.parse(text);
  } catch {
    response = { raw: text };
  }

  if (!resp.ok || response?.success === false || response?.ok === false) {
    return {
      ok: false,
      status: resp.status,
      message: response?.message || "Google Sheets submission failed",
      response,
    };
  }

  return { ok: true, response };
}