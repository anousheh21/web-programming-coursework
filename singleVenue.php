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

<div id="thisVenueBody">
  <div id="leftContent">
    <div id="overviewInfo">
      <h1 class='title' id='title-single'></h1>
      <div id="availabilityButtons">
        <button id="availabilityButton">Check Availability</button>

        <button id="popularityButton">View Venue Popularity</button>
        <div class="modal" id="popularityModal">
          <div class="modal-header">
            <div class='modal-title'>Venue Popularity</div>
            <button class="close-button" id="popularityCloseButton">&times;</button>
          </div>
          <div class="modal-body">
            Put popularity graph in here 
          </div>
        </div>
        <div class="overlay" id="popularityOverlay"></div>

      </div>
      <p id="singleVenueCapacity">Capacity: </p>
      <p id="singleVenueLicensed">Licensed: </p>
      <p id="bookingSubheading">To Book: </p>
      <p class="bookingDetails" id="phoneNumber">Phone: phoneNumberHere</p>
      <p class="bookingDetails" id="emailAddress">Email: emailAddressHere</p>
    </div>
    <div id="locationMap">
        <p>Map Placeholder</p>
    </div>
    <div id="ratingDoughnutChart">
        <p>Rating Chart Placeholder</p>
    </div>
  </div>
  <div id="rightContent">
      <div id="singleVenueImage"></div>
      <div id="pricingInfo">
        <div id="pricingBox">
            <h3 id="pricingBoxHeading">Pricing</h3>
            <p id="venuePriceSubheading">Venue Hire<span class="pricingSubheadingItalic"> - (Without Catering)</span></p>
            <p id="weekdayPrice">Weekday Price: </p>
            <p id="weekendPrice">Weekend Price: </p>
            <p id="cateringPriceSubheading">Catering<span class="pricingSubheadingItalic"> - (Per Person)</span></p>
            <div id="cateringPrices"></div>
        </div>
        <div id="costCalculator">
            <p>Cost Calculator Placeholder</p>
        </div>
      </div>
  </div>
</div>





<script src="singleVenue.js"></script>
</body>
</html>