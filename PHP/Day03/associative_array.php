<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="associative_array.php" method="post">
        <label>Enter a Country to get it's capital: </label>
        <input type="text" name="country">
        <input type="submit">
    </form>
</body>
</html>

<?php
// Associative array = array with key and value pairs 
// Just like dictionary in python or object in Javascript
// id -> username 
// items -> Price

$capitals = array("USA" =>"Washington D.C",
'Japan'=>"Kyoto",
"South Korea"=>"Seoul",
"Pakistan"=> "Islamabad");

$capital = $capitals[$_POST['country']];
echo "Capital is {$capital}"
// $capitals["USA"] = "Las Vegas";

// $keys = array_keys($capitals);
// $values = array_values($capitals);

// // foreach ($capitals as $key => $value) {
// //     echo "{$key} = {$value} <br>";
// // }
// echo "Keys:<br>";
// foreach ($keys as $key) {
//     echo "{$key}<br>";
// }
// echo "<br>Values:<br>";
// foreach ($values as $value) {
//     echo "{$value}<br>";
// }

// $flip_Capitals = array_flip($capitals);
// echo "<br>Array keys and values flipped: <br>";
// foreach ($flip_Capitals as $key => $value) {
    
//     echo "{$key} = {$value} <br>";
// }
?>