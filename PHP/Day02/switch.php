<?php
// Swtich = Replacement to using many else if statements 
//          More efficient, less code to write

$grade = 'G';

switch ($grade) {
    case 'A':
        echo "You did great";
        break;
    case 'B':
        echo "You did good";
        break;
    case 'C':
        echo "You did ok";
        break;
    case 'D':
        echo "Satisfactory";
        break;
    case 'E':
        echo "Needs improvement";
        break;
    case 'F':
        echo "Fail";
        break;
    default:
        echo "{$grade} is not a valid grade to examine";
        break;
}
