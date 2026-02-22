<!-- GET METHOD -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User login</title>
</head>
<body>
    <form action="GET.php" method="get">
        <label>username:</label><br>
        <input type="text" name="username"><br>
        <label>password:</label><br>
        <input type="password" name="password"><br>
        <input type="submit" value="login">
    </form>
</body>
</html>
<?php
echo "{$_GET["username"]} <br>"; // GET METHOD is type of array 
echo "{$_GET["password"]} <br>"; // Do this to get a line break between username and password
// There is a one pitfall in GET METHOD that is: you data especially senstive data like password is sent as URL
// For this POST METHOD comes in action 
?> 