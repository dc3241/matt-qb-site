import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  level?: string;
  focus?: string;
  message?: string;
  company?: string; // honeypot — must stay empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real users never see this field, so any value means a bot.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    // Pretend success so bots get no signal.
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const level = (body.level ?? "").trim();
  const focus = (body.focus ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A name and valid email are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form is missing required environment variables.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Player age / grade", level || "—"],
    ["Looking for", focus || "—"],
    ["Message", message || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 16px">New QB training inquiry</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 14px 6px 0;font-weight:bold;vertical-align:top">${esc(
                k
              )}</td><td style="padding:6px 0">${esc(v).replace(
                /\n/g,
                "<br />"
              )}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New QB inquiry — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send the message." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send the message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
