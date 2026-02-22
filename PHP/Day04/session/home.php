<?php
session_start();
//session: SGB used to store information on user to be used across multiple pages. 
// User is assigned a session-id whenever he visits the site e.g. login credentials

if (isset($_POST['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit(); // always use exit after header
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Home</title>
</head>

<body>
    This is the home page<br>

    <form action="home.php" method="post">
        <input type="submit" name="logout" value="logout">
    </form>

    <?php
    echo $_SESSION['username'] . "<br>";
    echo $_SESSION['password'] . "<br>";
    ?>
</body>

</html>