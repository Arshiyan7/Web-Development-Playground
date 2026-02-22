<?php
READ: 
$content = file_get_contents("file.txt");
echo $content;

// WRITE and READ
$file = fopen("word.txt",'w');
fwrite($file,"Hello Wordpress");
fclose($file);

$file = fopen("word.txt",'r');
$content = fread($file,filesize("word.txt"));
echo $content;
fclose($file);

// short way: 
file_put_contents("word.txt", "Hello WordPress"); // write
$content = file_get_contents("word.txt"); // read
echo $content;

// APPEND and READ:
$file = fopen("word.txt",'a');
for ($i=0; $i <2 ; $i++) { 
    fwrite($file,"Appended this line into the file");
}
fclose($file);

$content = file_get_contents("word.txt");
echo $content . "<br>";

// short way: 
$lines = "Appended this line\nAppended this line\nAppended this line\n";
file_put_contents("word.txt",$lines,FILE_APPEND);
$content = file_get_contents("word.txt");
echo nl2br($content);
?>
