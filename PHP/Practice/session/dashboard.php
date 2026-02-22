<?php
session_start();

// Redirect to login if not logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.php");
    exit;
}
?>
<h2>Welcome <?php echo htmlspecialchars($_SESSION['username']) ?></h2>
<a href="logout.php">Logout</a>