<?php
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "select name, capacity, licensed, weekday_price, weekend_price, latitude, longitude from venue;";

    $basicInfoArray = array();
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $basicInfoArray[] = $row;
    }

    echo json_encode($basicInfoArray);

    mysqli_close($conn);
?>