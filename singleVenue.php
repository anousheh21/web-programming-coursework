<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <script src="jquery-3.5.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Wedding Venue</title>
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

<?php
if(isset($_GET['venue'])) {
    $venueName = $_GET['venue'];
    echo "<script> let venueName = '$venueName';</script>";
  

} else {
    echo "<h1>Error 404: Page Not Found/h1>";
}
?>


<div id="singleVenueImage"></div>
<h1 class='title' id='title-single'></h1>
<p id="singleVenueCapacity">Capacity: </p>
<p id="singleVenueLicensed">Licensed: </p>

<script src="singleVenue.js"></script>
</body>
</html>