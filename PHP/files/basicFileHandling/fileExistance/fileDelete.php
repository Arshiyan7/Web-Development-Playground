<?php
// Make a file first for this tutorial
$file = 'word.txt';
if (file_exists($file)) {
    unlink($file);
    echo 'File deleted Successfully';
}
else{
    echo "no file exists with name {$file}";
}
?>