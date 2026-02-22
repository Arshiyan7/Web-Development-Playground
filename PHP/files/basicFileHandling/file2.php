<?php
$file = fopen("file.txt",'r');

while (!feof($file)) {
    $line = fgets($file);
    echo $line . "<br>";
}
// feof = run while loop until end of file 
// fgets = get each line one by one 

// short method: 
$file = file('file.txt'); // file returns the array of lines in file
$i = 0;
foreach ($file as $line) {
    $i++;
    echo "line {$i}: {$line}<br>";
}

//Safe method
$file = fopen('file.txt', 'r');
$i = 0;
while (!feof($file)) {
    $line = fgets($file);
    if ($line !== false) { // avoid empty line at EOF
        $i++;
        echo "Line {$i}: " . trim($line) . "<br>";
    }
}
fclose($file);
?>
