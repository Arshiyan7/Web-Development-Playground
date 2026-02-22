<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="sanatize_validateInput.php">
        username: <br>
    <input type="text" name="username"><br>
    age: <br>
    <input type="text" name="age"><br>
    email: <br>
    <input type="text" name="email"><br>
    <input type="submit" name='login' value="login">
    </form>
</body>
</html>
<?php
if (isset($_POST['login'])) { //isset: checks if variable is defined and not NULL
    // SANITIZE: cleans data by removing illegal character to ensure saftey
    // $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS); 
    // $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
    // $email = filter_input(INPUT_POST, "age", FILTER_SANITIZE_EMAIL);
    // echo "and you are {$age} years old";

    // Validation: Check users given data against rules set by us to ensure it's correctness and completeness before it is processed and stored
    $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    // if (empty($age)) {
    //     echo "Not a valid number";
    // }
    // else{
    //     echo "You are $age years old";
    // }
    if (empty($email)) {
        echo "Not a valid email";
    }
    else{
        echo "You are is valid {$email}";
    }
}
?>