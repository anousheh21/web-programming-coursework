<?php
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "select name, grade, cost from venue, catering where venue.venue_id = catering.venue_id group by name, grade, cost;";

    $cateringGradesArray = array();
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $cateringGradesArray[] = $row;
    }

    echo json_encode($cateringGradesArray);

    mysqli_close($conn);
?>