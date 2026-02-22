<?php
$foods = array('apple', 'cherry', 'orange', 'banana', 'coconut');

array_push($foods, 'pineapple');
//(name of array, what you want to push at the end)
// More than one value can be pushed in the array
array_pop($foods); // (array name and will remove the last element)
array_shift($foods); // Removes first element from array
$reversed_foods = array_reverse($foods); // This won't return anything this returns new array and in order to get that we've to assign it to new variable
foreach ($reversed_foods as $food) {
    echo $food . "<br>";
} // we have to use for each in order to print the array all elements all together

// There are bunch of more functions be sure to check em out
?>