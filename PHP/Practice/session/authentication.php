<?php
session_start();

$valid_username = 'arsh';
$valid_password = "1234";

// Get the submitted values from POST
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === $valid_username && $password === $valid_password) {
    // Store in session
    $_SESSION['username'] = $username;
    $_SESSION['loggedin'] = true;

    // Redirect to dashboard
    header("Location: dashboard.php");
    exit;
} else {
    echo "Invalid password/username";
    echo "<br><a href='login.php'>Go back to login</a>";
}
?>