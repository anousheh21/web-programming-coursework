<?php
include "db-config.php";

$country = trim($_GET["countryname"]);
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql="SELECT cy.name, cy.dob FROM country co LEFT JOIN  cyclist cy on co.iso_id = cy.iso_id WHERE co.country_name = '$country'";
$result = mysqli_query($conn, $sql); 
$allDataArray = array();
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
   $allDataArray[] = $row;
}
echo json_encode($allDataArray);
?>