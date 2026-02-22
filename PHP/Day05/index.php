<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
        username: <br>
        <input type="text" name="username">
        <input type="submit">
    </form>
</body>
</html>

<?php
// Server = SGB(Super Global variable) contains header, paths and script locations 
//          Entries in this array are created by the web server. 
//          shows nearly everything you need to know about the current web page env.

// foreach ($_SERVER as $key => $value) {
//     echo "{$key} = {$value} .<br>";
// }
?>