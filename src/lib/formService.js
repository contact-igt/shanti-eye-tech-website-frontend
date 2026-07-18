const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby6iX3bN634qsyT8jNrkw4_AnDr02g116hk20adldbpr-CCuFpBiSaa88uVZJOMBhnw2A/exec";

export async function submitForm(formName, data) {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    throw new Error("NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL not configured");
  }

  const payload = { form: formName, data };

  // Local API submission disabled by request.
  // const res = await fetch("/api/forms/submit", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });

  await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return { ok: true };
}