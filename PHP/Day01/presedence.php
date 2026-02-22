<?php
/* Operator Precedence
if an arthematic expression is given we will solve them
in following order: 
1 - () 
2 - **
3- * / %
4 - + -
*/

$total = 1 + 2 - 3 * 4 / 5 ** 6;
echo $total
?>