<?php
// $username = "       FLEX        ";
$username = "flex Code";
$phone = "123-456-789";
$username_array = array("flex","Code");
// $username = strtolower($username);
// $username = trim($username);
// $username = strtoupper($username);
// $username = str_pad($username, 20, "0");
// $phone = str_replace("-","",$phone);
// $fullname = explode(" ",$username);
$fullname = implode(" ",$username_array);
echo $fullname;
?>