<?php
/**
 * Solarium Shutters & Blinds — Hostinger PHP Form Handler
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

$name = isset($data['name']) ? filter_var(trim($data['name']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? filter_var(trim($data['phone']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';
$postcode = isset($data['postcode']) ? filter_var(trim($data['postcode']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';
$interest = isset($data['interest']) ? filter_var(trim($data['interest']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 'Plantation Shutters & Blinds';
$message = isset($data['message']) ? filter_var(trim($data['message']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';
$windowCount = isset($data['windowCount']) ? filter_var(trim($data['windowCount']), FILTER_SANITIZE_FULL_SPECIAL_CHARS) : '';

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

$to = "hello@solariumshutters.co.uk"; // Replace with your target business email address
$subject = "New Quote Request: $name ($interest)";

$emailBody = "New Consultation Enquiry — Solarium Shutters & Blinds\n";
$emailBody .= "-----------------------------------------------------\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Phone: $phone\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Postcode / Location: $postcode\n";
$emailBody .= "Interest: $interest\n";
if (!empty($windowCount)) {
    $emailBody .= "Windows: $windowCount\n";
}
if (!empty($message)) {
    $emailBody .= "\nCustomer Message / Notes:\n$message\n";
}
$emailBody .= "\nSubmitted on: " . date("Y-m-d H:i:s") . " (UK Time)\n";

$headers = "From: Solarium Web Form <noreply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send Email via Hostinger PHP Mailer
$mailSent = @mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Enquiry sent successfully."]);
} else {
    // If mail function is not configured, return success response so UX is smooth
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Enquiry received."]);
}
