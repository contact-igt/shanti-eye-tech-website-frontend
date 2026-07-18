import { sendToGoogleSheets } from "@/lib/sheets";

function getRequestIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  const realIp = req.headers["x-real-ip"];
  const cloudflareIp = req.headers["cf-connecting-ip"];
  const rawIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor || realIp || cloudflareIp || req.socket?.remoteAddress || "";

  return String(rawIp).split(",")[0].trim().replace(/^::ffff:/, "");
}

function normalizeContactData(data, req) {
  return {
    fullName: data.fullName || data.name || "",
    mobile: data.mobile || data.mobile_number || "",
    treatment: data.treatment || data.service || "",
    message: data.message || "",
    ip_address: data.ip_address || getRequestIp(req) || "",
    utm_source: data.utm_source || "direct",
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  const { form, data } = req.body || {};
  if (!form || !data || typeof data !== "object") {
    return res.status(400).json({
      ok: false,
      error: "Missing form or data",
    });
  }

  const sheetData = form === "Contact" ? normalizeContactData(data, req) : data;

  try {
    const result = await sendToGoogleSheets(form, sheetData);
    if (!result.ok) {
      return res.status(502).json({
        ok: false,
        error: result.message || "Google Sheets submission failed",
      });
    }

    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.error("Google Sheets submission failed", error);
    return res.status(502).json({
      ok: false,
      error: "Google Sheets submission failed",
    });
  }
}
