<?php
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "select name, booking_date from venue, venue_booking where venue.venue_id = venue_booking.venue_id group by name, booking_date;";

    $datesArray = array();
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $datesArray[] = $row;
    }

    echo json_encode($datesArray);

    mysqli_close($conn);
?>