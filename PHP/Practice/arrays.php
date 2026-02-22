<?php
// $cities = ['lahore','islamabad','karachi','peshawar','multan'];
// echo $cities[2];

// $student = [
//     'name' => 'Umer',
//     'age' => 21,
//     'course' => 'CS',
//     'city' => 'Peshawar'
// ];
// echo "Student name {$student['name']}<br>Student Course{$student['course']}"

// $users = [
//     [
//         'name' => "Umer",
//         'email' => 'umer@gmail.com',
//         'role' => 'editor'
//     ],
//     [
//         'name' => "Bilal",
//         'email' => 'Bilal@gmail.com',
//         'role' => 'SWE'
//     ],
//     [
//         'name' => "Umair",
//         'email' => 'Umair@gmail.com',
//         'role' => 'designer'
//     ],
// ];
// echo $users[1]['email'];

$arr = array(10,20,30);
array_push($arr,40,50);
print_r($arr);
$a = [1, 2];
$b = [3, 4];
$new_arr = array_merge($a,$b);
print_r($new_arr);
$array_find = [10, 20, 25, 30];
if (in_array(25,$array_find)) {
    echo "Found";
}
else{
    echo "Not found";
}

?>
