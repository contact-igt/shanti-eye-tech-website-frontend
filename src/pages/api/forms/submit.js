import { sendToGoogleSheets } from "@/lib/sheets";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { form, data } = req.body || {};
  if (!form || !data || typeof data !== "object") {
    return res.status(400).json({ error: "Missing form or data" });
  }

  try {
    const result = await sendToGoogleSheets(form, data);
    if (!result.ok) {
      return res.status(502).json({
        error: result.message || "Failed to submit form",
        result,
      });
    }

    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.error("Form submission failed", error);
    return res.status(500).json({ error: "Unexpected form submission error" });
  }
}