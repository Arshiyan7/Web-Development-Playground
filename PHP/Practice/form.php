<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
</head>

<body>
    <form action="form.php" method="post">
        <label>Username</label>
        <br><input type="text" name="username">
        <br><label>email</label>
        <br><input type="text" name="email">
        <br><label>age</label>
        <br><input type="text" name="age">
        <br><label>Write a comment</label>
        <br><input type="text" name="comment">
        <br><input type="submit" name="submit" value="submit">
    </form>
</body>

</html>
<?php
if (isset($_POST['submit'])) {
    // $username = $_POST['username'];
    // $email = $_POST['email'];
    $age = $_POST['age'];
    // echo "username: {$username}<br>{$email}";
    if (is_numeric($age) && $age >= 18 && $age <= 60) {
        echo "Valid age<br>";
    } else {
        echo "Invalid age<br>";
    }
    $comment = filter_input(INPUT_POST, "comment", FILTER_SANITIZE_SPECIAL_CHARS);
    if (!empty($comment)) {
        echo "Clean Comment {$comment}";
    }
}
?>