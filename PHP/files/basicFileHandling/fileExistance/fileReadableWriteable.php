<?php
$file = 'word.txt';
if (is_readable($file)) {
    echo "File is readable";
}
else{
    echo "<br>File is not readable";
}

if (is_writable($file)) {
    echo "<br>File is writable";
}
else{
    echo "<br>File is not writable";
}

?>