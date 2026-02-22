<?php
$file = "word.txt";

if (file_exists($file)) {
    echo "File exists";
}
else{
    echo "File doesn't exist";
}
?>