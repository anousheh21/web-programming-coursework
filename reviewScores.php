<?php
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "select name, review_id, score from venue, venue_review_score where venue.venue_id = venue_review_score.venue_id group by name, review_id, score;";

    $scoresArray = array();
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $scoresArray[] = $row;
    }

    echo json_encode($scoresArray);

    mysqli_close($conn);
?>