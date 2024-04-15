<?php
// include "db-config.php";
// // Complete this the same as cyclists-request.php
// $country = trim($_GET["countryname"]);
// $conn = mysqli_connect($servername, $username, $password, $dbname);
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// } 
// $sql = "SELECT GOLD, SILVER, BRONZE FROM COUNTRY WHERE COUNTRY_NAME = `$country`;" 
// $result = mysqli_query($conn, $sql);
// $allDataArray = array();
// while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//     $allDataArray[] = $row;
// }
// echo json_encode($allDataArray);

include "db-config.php";

$country = trim($_GET["countryname"]);
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} 
$sql = "SELECT GOLD, SILVER, BRONZE FROM COUNTRY WHERE COUNTRY_NAME = '$country'";
$result = mysqli_query($conn, $sql);
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $allDataArray[] = $row;
}
echo json_encode($allDataArray);



?> 