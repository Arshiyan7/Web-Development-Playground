<?php
session_start();

if (isset($_POST['login'])) {

    if (!empty($_POST['username']) && !empty($_POST['password'])) {

        $_SESSION['username'] = $_POST['username'];
        $_SESSION['password'] = $_POST['password'];

        header("Location: home.php");
        exit(); 
    } else {
        echo "Missing username/password <br>";
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
</head>

<body>
    <form method="post" action="index.php">
        username:<br>
        <input type="text" name="username"><br>
        password:<br>
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="login">
    </form>
</body>

</html>