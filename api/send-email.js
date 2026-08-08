/**
 * Serverless Email Dispatcher using Resend API
 * Compatible with Vercel, Netlify, and standard Node.js serverless runtimes.
 */

// Helper to escape HTML characters in user input to prevent injection
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateAdminEmailHtml({ name, email, phone, postcode, interest, windowCount, message, notes, formType, submittedAt }) {
  const isProduct = formType === "product_measure";
  const title = isProduct ? "New Product In-Home Measure Request" : "New Website Consultation Request";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f7f6f2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #22201e; -webkit-font-smoothing: antialiased; }
    .wrapper { width: 100%; max-width: 620px; margin: 30px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e4dc; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
    .header { background-color: #22201e; padding: 36px 40px; text-align: center; border-bottom: 3px solid #b8860b; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 600; color: #f7f6f2; letter-spacing: 0.05em; text-transform: uppercase; font-family: Georgia, 'Times New Roman', serif; }
    .header p { margin: 8px 0 0; font-size: 11px; color: #b8860b; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600; }
    .content { padding: 36px 40px; }
    .badge { display: inline-block; padding: 6px 14px; background-color: #f2ece1; color: #6b5016; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; border-radius: 20px; margin-bottom: 20px; }
    .headline { font-size: 22px; font-weight: 600; color: #22201e; margin: 0 0 10px; font-family: Georgia, 'Times New Roman', serif; }
    .subtext { font-size: 14px; color: #666; margin-bottom: 28px; line-height: 1.5; }
    .data-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 28px; border-radius: 10px; overflow: hidden; border: 1px solid #eeebe3; background-color: #fcfbfa; }
    .data-table tr:not(:last-child) td { border-bottom: 1px solid #eeebe3; }
    .data-table td { padding: 14px 18px; font-size: 14px; }
    .label-col { width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; }
    .val-col { color: #1c1b1a; font-weight: 500; }
    .message-box { background-color: #f7f5f0; border-left: 3px solid #b8860b; padding: 16px 20px; margin-bottom: 28px; border-radius: 0 8px 8px 0; }
    .message-box h4 { margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #6b5016; }
    .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #2e2c29; white-space: pre-line; }
    .cta-container { text-align: center; margin: 32px 0 12px; }
    .cta-btn { display: inline-block; background-color: #22201e; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em; }
    .cta-btn-alt { display: inline-block; margin-left: 10px; background-color: #b8860b; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em; }
    .footer { background-color: #f7f6f2; padding: 24px 40px; text-align: center; font-size: 12px; color: #8a867e; border-top: 1px solid #e7e4dc; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Solarium</h1>
      <p>Shutters &amp; Blinds · Lead Alert</p>
    </div>
    <div class="content">
      <span class="badge">${isProduct ? "Product Specific Enquiry" : "General Consultation"}</span>
      <h2 class="headline">${sanitize(name)} requested a free measure</h2>
      <p class="subtext">A new quote enquiry was submitted on <strong>${submittedAt}</strong>. Full details below:</p>

      <table class="data-table">
        <tr>
          <td class="label-col">Customer Name</td>
          <td class="val-col"><strong>${sanitize(name)}</strong></td>
        </tr>
        <tr>
          <td class="label-col">Telephone</td>
          <td class="val-col"><a href="tel:${sanitize(phone)}" style="color: #b8860b; text-decoration: none; font-weight: 600;">${sanitize(phone)}</a></td>
        </tr>
        <tr>
          <td class="label-col">Email Address</td>
          <td class="val-col"><a href="mailto:${sanitize(email)}" style="color: #22201e; text-decoration: underline;">${sanitize(email)}</a></td>
        </tr>
        <tr>
          <td class="label-col">Postcode / Area</td>
          <td class="val-col"><strong>${sanitize(postcode)}</strong></td>
        </tr>
        <tr>
          <td class="label-col">Interest / Product</td>
          <td class="val-col">${sanitize(interest || "Plantation Shutters")}</td>
        </tr>
        ${windowCount ? `
        <tr>
          <td class="label-col">Estimated Windows</td>
          <td class="val-col">${sanitize(windowCount)}</td>
        </tr>` : ""}
      </table>

      ${(message || notes) ? `
      <div class="message-box">
        <h4>Customer Notes / Requirements:</h4>
        <p>${sanitize(message || notes)}</p>
      </div>` : ""}

      <div class="cta-container">
        <a href="tel:${sanitize(phone)}" class="cta-btn-alt">📞 Call Customer</a>
        <a href="mailto:${sanitize(email)}?subject=Your Solarium Quote Request" class="cta-btn">✉️ Reply by Email</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">Solarium Shutters &amp; Blinds · 4 Broadhalgh Road, Rochdale, England · +44 (745) 123-45-67</p>
    </div>
  </div>
</body>
</html>
  `;
}

function generateCustomerConfirmationHtml({ name, interest }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for choosing Solarium</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f7f6f2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #22201e; }
    .wrapper { width: 100%; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e4dc; }
    .header { background-color: #22201e; padding: 40px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 500; color: #f7f6f2; letter-spacing: 0.08em; text-transform: uppercase; font-family: Georgia, 'Times New Roman', serif; }
    .header p { margin: 8px 0 0; font-size: 10px; color: #b8860b; letter-spacing: 0.28em; text-transform: uppercase; }
    .content { padding: 40px; }
    .greeting { font-size: 22px; font-family: Georgia, 'Times New Roman', serif; color: #22201e; margin: 0 0 16px; }
    .lead { font-size: 15px; line-height: 1.65; color: #4a4843; margin-bottom: 24px; }
    .steps-box { background-color: #faf8f5; border: 1px solid #eee8dc; border-radius: 12px; padding: 24px; margin: 28px 0; }
    .steps-box h3 { margin: 0 0 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; color: #b8860b; }
    .step-item { display: flex; margin-bottom: 14px; font-size: 14px; color: #383632; line-height: 1.5; }
    .step-num { font-weight: 700; color: #b8860b; margin-right: 12px; font-family: Georgia, serif; }
    .contact-card { text-align: center; padding: 24px; background-color: #22201e; border-radius: 12px; color: #f7f6f2; margin-top: 32px; }
    .contact-card p { margin: 0 0 12px; font-size: 13px; color: #d0ccc3; }
    .contact-phone { display: inline-block; font-size: 18px; font-weight: 600; color: #b8860b; text-decoration: none; font-family: Georgia, serif; }
    .footer { background-color: #f7f6f2; padding: 24px 40px; text-align: center; font-size: 11px; color: #8a867e; border-top: 1px solid #e7e4dc; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Solarium</h1>
      <p>Bespoke Plantation Shutters &amp; Blinds</p>
    </div>
    <div class="content">
      <h2 class="greeting">Dear ${sanitize(name)},</h2>
      <p class="lead">
        Thank you for contacting Solarium Shutters &amp; Blinds regarding <strong>${sanitize(interest || "bespoke window treatments")}</strong>.
      </p>
      <p class="lead">
        We have received your enquiry and our design team is currently reviewing your details.
      </p>

      <div class="steps-box">
        <h3>What Happens Next:</h3>
        <div class="step-item">
          <span class="step-num">01.</span>
          <span><strong>Personal Contact:</strong> A senior shutter specialist will contact you within 24 hours to understand your window specifications.</span>
        </div>
        <div class="step-item">
          <span class="step-num">02.</span>
          <span><strong>Free In-Home Laser Measure:</strong> We bring full-size timber and material samples directly to your home at a time that suits you.</span>
        </div>
        <div class="step-item">
          <span class="step-num">03.</span>
          <span><strong>Transparent Quotation:</strong> You receive an itemised, all-inclusive quote with no hidden extras and zero hard sales pressure.</span>
        </div>
      </div>

      <div class="contact-card">
        <p>Prefer to speak with our specialists right away?</p>
        <a href="tel:+447451234567" class="contact-phone">+44 (745) 123-45-67</a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px;">© ${new Date().getFullYear()} Solarium Shutters &amp; Blinds. All rights reserved.</p>
      <p style="margin: 0;">Workshop &amp; Studio: 4 Broadhalgh Road, Rochdale, England · hello@solariumshutters.co.uk</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Main HTTP Handler for Serverless Environments
 */
export default async function handler(req, res) {
  // Set CORS headers for browser compatibility
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed. Use POST." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, postcode, interest, windowCount, message, notes, formType } = body || {};

    // Validate essential fields
    if (!name || !email || !phone || !postcode) {
      return res.status(400).json({
        error: "Missing required fields. Please provide name, email, phone, and postcode."
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@solariumshutters.co.uk";
    const fromEmail = process.env.FROM_EMAIL || "Solarium Shutters & Blinds <onboarding@resend.dev>";
    const submittedAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

    const payload = {
      name,
      email,
      phone,
      postcode,
      interest: interest || "Plantation Shutters & Blinds",
      windowCount: windowCount || "Not specified",
      message: message || notes || "",
      notes: notes || message || "",
      formType: formType || "general_contact",
      submittedAt
    };

    // If Resend API Key is not set, log and return simulation response for smooth local/staging testing
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.log("--------------------------------------------------");
      console.log("[SIMULATION MODE] Resend API Key not configured.");
      console.log("Lead Payload Received:", JSON.stringify(payload, null, 2));
      console.log("--------------------------------------------------");
      return res.status(200).json({
        success: true,
        simulated: true,
        message: "Enquiry logged successfully in simulation mode. Configure RESEND_API_KEY in production to send real emails."
      });
    }

    // 1. Send Lead Notification Email to Business / Staff
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Lead: ${name} (${interest || "Quote Request"}) — Solarium`,
        html: generateAdminEmailHtml(payload)
      })
    });

    const adminData = await adminEmailRes.json();

    if (!adminEmailRes.ok) {
      console.error("Resend API Error (Admin Email):", adminData);
      return res.status(adminEmailRes.status).json({
        error: adminData.message || "Failed to send lead notification via Resend."
      });
    }

    // 2. Send Luxury Confirmation Email to Customer (Auto-Responder)
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          subject: "Thank You for Contacting Solarium Shutters & Blinds",
          html: generateCustomerConfirmationHtml(payload)
        })
      });
    } catch (customerEmailErr) {
      // Don't fail the submission if customer auto-responder hits a spam/deliverability limit
      console.warn("Notice: Customer confirmation email could not be sent:", customerEmailErr);
    }

    return res.status(200).json({
      success: true,
      message: "Your request has been received. A specialist will be in touch within 24 hours.",
      id: adminData.id
    });

  } catch (err) {
    console.error("Internal Server Error in /api/send-email:", err);
    return res.status(500).json({
      error: "An unexpected error occurred while processing your request. Please try again or call us directly."
    });
  }
}
