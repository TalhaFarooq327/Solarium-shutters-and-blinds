<?php
/**
 * Solarium Shutters & Blinds — Hostinger Luxury HTML PHP Form Handler
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit();
}

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8') : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars(trim($data['phone']), ENT_QUOTES, 'UTF-8') : '';
$postcode = isset($data['postcode']) ? htmlspecialchars(trim($data['postcode']), ENT_QUOTES, 'UTF-8') : '';
$interest = isset($data['interest']) ? htmlspecialchars(trim($data['interest']), ENT_QUOTES, 'UTF-8') : 'Plantation Shutters & Blinds';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8') : '';
$windowCount = isset($data['windowCount']) ? htmlspecialchars(trim($data['windowCount']), ENT_QUOTES, 'UTF-8') : '';
$formType = isset($data['formType']) ? htmlspecialchars(trim($data['formType']), ENT_QUOTES, 'UTF-8') : 'general_consultation';

if (empty($name) || empty($email) || empty($phone) || empty($postcode)) {
    http_response_code(400);
    echo json_encode(["error" => "Please fill in all required fields (Name, Phone, Email, Postcode)."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Please enter a valid email address."]);
    exit();
}

$toAdmin = "solariumshutters@gmail.com";
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'solariumshutters.co.uk';
$submittedAt = date("d M Y, H:i") . " (UK Time)";

// ── 1. Admin Lead HTML Email ──────────────────────────────────────────────
$adminSubject = "New Quote Request: $name ($interest)";

$windowRow = !empty($windowCount) ? "
  <tr>
    <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Estimated Windows</td>
    <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">$windowCount</td>
  </tr>" : "";

$messageBox = !empty($message) ? "
  <div style=\"background-color: #f7f5f0; border-left: 3px solid #b8860b; padding: 16px 20px; margin-bottom: 28px; border-radius: 0 8px 8px 0;\">
    <h4 style=\"margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #6b5016;\">Customer Notes / Requirements:</h4>
    <p style=\"margin: 0; font-size: 14px; line-height: 1.6; color: #2e2c29; white-space: pre-line;\">$message</p>
  </div>" : "";

$adminHtml = "
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
  <title>$adminSubject</title>
</head>
<body style=\"margin: 0; padding: 0; background-color: #f7f6f2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #22201e;\">
  <div style=\"width: 100%; max-width: 620px; margin: 30px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e4dc; box-shadow: 0 10px 30px rgba(0,0,0,0.05);\">
    <div style=\"background-color: #22201e; padding: 36px 40px; text-align: center; border-bottom: 3px solid #b8860b;\">
      <h1 style=\"margin: 0; font-size: 26px; font-weight: 600; color: #f7f6f2; letter-spacing: 0.05em; text-transform: uppercase; font-family: Georgia, serif;\">Solarium</h1>
      <p style=\"margin: 8px 0 0; font-size: 11px; color: #b8860b; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600;\">Shutters &amp; Blinds · Lead Alert</p>
    </div>
    <div style=\"padding: 36px 40px;\">
      <span style=\"display: inline-block; padding: 6px 14px; background-color: #f2ece1; color: #6b5016; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; border-radius: 20px; margin-bottom: 20px;\">Website Consultation Enquiry</span>
      <h2 style=\"font-size: 22px; font-weight: 600; color: #22201e; margin: 0 0 10px; font-family: Georgia, serif;\">$name requested a free measure</h2>
      <p style=\"font-size: 14px; color: #666; margin-bottom: 28px; line-height: 1.5;\">A new quote enquiry was submitted on <strong>$submittedAt</strong>. Full details below:</p>

      <table style=\"width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 28px; border-radius: 10px; overflow: hidden; border: 1px solid #eeebe3; background-color: #fcfbfa;\">
        <tr>
          <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Customer Name</td>
          <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\"><strong>$name</strong></td>
        </tr>
        <tr>
          <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Telephone</td>
          <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\"><a href=\"tel:$phone\" style=\"color: #b8860b; text-decoration: none; font-weight: 600;\">$phone</a></td>
        </tr>
        <tr>
          <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Email Address</td>
          <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\"><a href=\"mailto:$email\" style=\"color: #22201e; text-decoration: underline;\">$email</a></td>
        </tr>
        <tr>
          <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Postcode / Area</td>
          <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\"><strong>$postcode</strong></td>
        </tr>
        <tr>
          <td style=\"width: 34%; font-weight: 600; color: #6c6861; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #f7f5f0; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">Interest / Product</td>
          <td style=\"color: #1c1b1a; font-weight: 500; padding: 14px 18px; border-bottom: 1px solid #eeebe3;\">$interest</td>
        </tr>
        $windowRow
      </table>

      $messageBox

      <div style=\"text-align: center; margin: 32px 0 12px;\">
        <a href=\"tel:$phone\" style=\"display: inline-block; background-color: #b8860b; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em;\">📞 Call Customer</a>
        <a href=\"mailto:$email?subject=Your Solarium Quote Request\" style=\"display: inline-block; margin-left: 10px; background-color: #22201e; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em;\">✉️ Reply by Email</a>
      </div>
    </div>
    <div style=\"background-color: #f7f6f2; padding: 24px 40px; text-align: center; font-size: 12px; color: #8a867e; border-top: 1px solid #e7e4dc;\">
      <p style=\"margin: 0;\">Solarium Shutters &amp; Blinds · 4 Broadhalgh Road, Rochdale, England · +44 (745) 123-45-67</p>
    </div>
  </div>
</body>
</html>
";

$adminHeaders  = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$adminHeaders .= "From: Solarium Web Form <noreply@$host>\r\n";
$adminHeaders .= "Reply-To: $email\r\n";
$adminHeaders .= "X-Mailer: PHP/" . phpversion();

// Send Admin Notification
@mail($toAdmin, $adminSubject, $adminHtml, $adminHeaders);

// ── 2. Customer Auto-Responder HTML Email ────────────────────────────────
$customerSubject = "Thank you for contacting Solarium Shutters & Blinds";
$customerHtml = "
<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
  <title>$customerSubject</title>
</head>
<body style=\"margin: 0; padding: 0; background-color: #f7f6f2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #22201e;\">
  <div style=\"width: 100%; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e4dc;\">
    <div style=\"background-color: #22201e; padding: 40px; text-align: center;\">
      <h1 style=\"margin: 0; font-size: 28px; font-weight: 500; color: #f7f6f2; letter-spacing: 0.08em; text-transform: uppercase; font-family: Georgia, serif;\">Solarium</h1>
      <p style=\"margin: 8px 0 0; font-size: 10px; color: #b8860b; letter-spacing: 0.28em; text-transform: uppercase;\">Bespoke Plantation Shutters &amp; Blinds</p>
    </div>
    <div style=\"padding: 40px;\">
      <h2 style=\"font-size: 22px; font-family: Georgia, serif; color: #22201e; margin: 0 0 16px;\">Dear $name,</h2>
      <p style=\"font-size: 15px; line-height: 1.65; color: #4a4843; margin-bottom: 24px;\">
        Thank you for contacting Solarium Shutters &amp; Blinds regarding <strong>$interest</strong>.
      </p>
      <p style=\"font-size: 15px; line-height: 1.65; color: #4a4843; margin-bottom: 24px;\">
        We have received your enquiry and our design team is currently reviewing your details.
      </p>

      <div style=\"background-color: #faf8f5; border: 1px solid #eee8dc; border-radius: 12px; padding: 24px; margin: 28px 0;\">
        <h3 style=\"margin: 0 0 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; color: #b8860b;\">What Happens Next:</h3>
        <div style=\"margin-bottom: 14px; font-size: 14px; color: #383632; line-height: 1.5;\">
          <strong style=\"color: #b8860b;\">01. Personal Contact:</strong> A senior shutter specialist will contact you within 24 hours to understand your window specifications.
        </div>
        <div style=\"margin-bottom: 14px; font-size: 14px; color: #383632; line-height: 1.5;\">
          <strong style=\"color: #b8860b;\">02. Free In-Home Laser Measure:</strong> We bring full-size timber and material samples directly to your home at a time that suits you.
        </div>
        <div style=\"font-size: 14px; color: #383632; line-height: 1.5;\">
          <strong style=\"color: #b8860b;\">03. Transparent Quotation:</strong> You receive an itemised, all-inclusive quote with no hidden extras and zero hard sales pressure.
        </div>
      </div>

      <div style=\"text-align: center; padding: 24px; background-color: #22201e; border-radius: 12px; color: #f7f6f2; margin-top: 32px;\">
        <p style=\"margin: 0 0 12px; font-size: 13px; color: #d0ccc3;\">Prefer to speak with our specialists right away?</p>
        <a href=\"tel:+447451234567\" style=\"display: inline-block; font-size: 18px; font-weight: 600; color: #b8860b; text-decoration: none; font-family: Georgia, serif;\">+44 (745) 123-45-67</a>
      </div>
    </div>
    <div style=\"background-color: #f7f6f2; padding: 24px 40px; text-align: center; font-size: 11px; color: #8a867e; border-top: 1px solid #e7e4dc; line-height: 1.5;\">
      <p style=\"margin: 0 0 6px;\">© " . date("Y") . " Solarium Shutters &amp; Blinds. All rights reserved.</p>
      <p style=\"margin: 0;\">Workshop &amp; Studio: 4 Broadhalgh Road, Rochdale, England · solariumshutters@gmail.com</p>
    </div>
  </div>
</body>
</html>
";

$customerHeaders  = "MIME-Version: 1.0\r\n";
$customerHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$customerHeaders .= "From: Solarium Shutters & Blinds <noreply@$host>\r\n";
$customerHeaders .= "Reply-To: solariumshutters@gmail.com\r\n";
$customerHeaders .= "X-Mailer: PHP/" . phpversion();

// Send Customer Auto-Responder
@mail($email, $customerSubject, $customerHtml, $customerHeaders);

http_response_code(200);
echo json_encode(["success" => true, "message" => "Enquiry received successfully."]);
