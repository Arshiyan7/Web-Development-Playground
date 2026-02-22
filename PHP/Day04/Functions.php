<?php
function even_odd_finder($number){
    if ($number%2===0) {
        echo "<h1>{$number} is even";
    }
    else{
        echo "<h1>{$number} is odd";
    }
    // return $number;
}

even_odd_finder(9);
even_odd_finder(5);
even_odd_finder(2);
even_odd_finder(4);
?>