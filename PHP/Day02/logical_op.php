<?php
/*
&& = True if both conditions are true
|| = True if atleast one conditions is true
! = True if false false if true (Opposite operation)
*/

$temp = 100;
if ($temp >= 0 && $temp <=30) {
    echo "Weather is good";
}
else{
    echo "Weather is bad<br>";
}

$temp2 = 30;
if ($temp < 0 && $temp >= 30) {
    echo "Weather is good<br>";
}
else{
    echo "Weather is bad<br>";
}

$temp3 = 50;
$cloudy = true;
if ($temp < 0 || $temp > 30) {
    echo "Weather is good<br>";
}
else{
    echo "Weather is bad<br>";
}

if(!$cloudy){
    echo "It's cloudy<br>";
}
else{
    echo "It's sunny<br>";
}
?>