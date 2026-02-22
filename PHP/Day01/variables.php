<?php
echo "An introduction to Variable and datatypes in PHP";
echo "<br>Let's get started";
echo "<br> ---------------------------------------";
$name = 'FlexCode';
$like = 'to code';
$food = "Pizza";

$age = 23;
$price = 4.99;
$quantity = 5;
$total = null;

$employed = true;
$status = true;

echo "Hello my name is {$name} <br>I like {$like}<br>I am {$age} years old";
echo "I love {$food}<br>Pizza costs \${$price}"; //in order to use the $ sign it will be followed by \ because it's depricted

echo "<br>status = {$status} <br> employed = {$employed}"; // since it's false it won't dispaly anything unless true which will be 1 displayed
$total = $quantity * $price;
echo "<br> Total price of 5 pizzas are \${$total}"
?>