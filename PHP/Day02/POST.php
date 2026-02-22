<!-- POST METHOD -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User login</title>
</head>
<body>
    <form action="POST.php" method="post">
        <label>username:</label><br>
        <input type="text" name="username"><br>
        <label>password:</label><br>
        <input type="password" name="password"><br>
        <input type="submit" value="login">
    </form>
</body>
</html>
<?php
echo "{$_POST["username"]} <br>"; 
echo "{$_POST["password"]} <br>"; 
// There is a one pitfall in GET METHOD that is: you data especially senstive data like password is sent as URL
// For this POST METHOD comes in action 
?> 