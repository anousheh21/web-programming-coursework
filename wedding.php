<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <title>Browse Venues</title>
</head>
<body>

<!-- NAV BAR -->
<header>
  <nav>
    <ul>
      <li id="logo" class="satisfy-regular"><a href="wedding.php">Wedding Venue Finder</a></li>
      <li class="navbar-item"><a href="wedding.php">Venues</a></li>
      <li class="navbar-item"><a href="favourites.php">Favourites</a></li>
      <li class="navbar-item"><a href="compare.php">Compare Venues</a></li>
    </ul>
  </nav>
</header>

<!-- HEADING -->
<h1 class="title" id="title-browse">Browse Venues</h1>

<!-- VENUE CARDS -->
<?php
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT name, weekday_price, weekend_price, capacity, MIN(cost) as min_cost, MAX(cost) as max_cost FROM venue, catering WHERE venue.venue_id = catering.venue_id GROUP BY name, weekday_price, weekend_price, capacity;";
    $result = mysqli_query($conn, $sql);

    echo "<div class='venue-container'>";
     if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_array($result)) {

           

            echo "<div class='venue-card'>";

            if ($row["name"] == "Central Plaza") {
                echo "<img class='venue-image' src='imageCentralPlaza.png' alt='Central Plaza'>";
            } else if ($row["name"] == "Pacific Towers Hotel") {
                echo "<img class='venue-image' src='imagePacificTowers.png' alt='Pacific Towers Hotel'>";
            } else if ($row["name"] == "Sky Center Complex") {
                echo "<img class='venue-image' src='imageSkyCenterComplex.png' alt='Sky Center Complex'>";
            } else if ($row["name"] == "Sea View Tavern") {
                echo "<img class='venue-image' src='imageSeaView.png' alt='Sea View Tavern'>";
            } else if ($row["name"] == "Ashby Castle") {
                echo "<img class='venue-image' src='imageAshbyCastle.png' alt='Ashby Castle'>";
            } else if ($row["name"] == "Fawlty Towers") {
                echo "<img class='venue-image' src='imageFawltyTowers.png' alt='Fawlty Towers'>";
            } else if ($row["name"] == "Hilltop Mansion") {
                echo "<img class='venue-image' src='imageHilltopMansion.png' alt='Hilltop Mansion'>";
            } else if ($row["name"] == "Haslegrave Hotel") {
                echo "<img class='venue-image' src='imageHaslegraveHotel.png' alt='Haslegrave Hotel'>";
            } else if ($row["name"] == "Forest Inn") {
                echo "<img class='venue-image' src='imageForestInn.png' alt='Forst Inn'>";
            } else if ($row["name"] == "Southwestern Estate") {
                echo "<img class='venue-image' src='imageSouthwestern.png' alt='Southwestern Estate'>";
            } else {
                echo "<p>image error</p>";
            }



            echo "<div class='venue-info'>";
            echo "<h3>" . $row["name"] . "</h3>";
            echo "<div class='overview-details'>";
            echo "<p>Price: £" .  $row["weekday_price"] . " - £" . $row["weekend_price"] . "</p>";
            echo "<p>Catering: £" . $row["min_cost"] . " - £" . $row["max_cost"]  . "</p>";
            echo "<p>Capacity: " . $row["capacity"] . "</p>";
            echo "</div>";
            echo "<a href='singleVenue.php'>See More Information</a>";
            echo "</div>";
            echo "</div>";
        }
     }

    echo "</div>";

    mysqli_close($conn);
?>

</body>
</html>