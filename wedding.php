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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <title>Compare Venues</title>
</head>
<body>

<!-- NAV BAR -->
<header>
  <nav>
  <a id="logo" class="satisfy-regular" href="wedding.php">Wed In Style</a>
  <a class="navbar-item" href="wedding.php">Home</a>
  <a class="navbar-item" href="allVenues.php">Venues</a>
  <a class="navbar-item" href="favourites.php">Favourites</a>
  <a class="navbar-item" href="compareAll.php">Comparisons</a>
  <a class="navbar-item" href="contact.php">Contact</a>
</nav>
</header>

<div id="homePageContainer">
    
    <div id="venueCarousel">

    <div class="mySlides">
        <div class="slideContainer">
            <img class="carouselImage" src="imageCentralPlaza.png" alt="Central Plaza">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Central Plaza</h3>
                <p id="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis, reiciendis error recusandae libero illum?</p>
                <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Central Plaza") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imagePacificTowers.png" alt="Pacific Towers" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Pacific Towers</h3>
                <p id="carouselDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis, reiciendis error recusandae libero illum?</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Pacific Towers Hotel") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
             <img src="imageSkyCenterComplex.png" alt="Sky Center Complex" class="carouselImage">
        </div>
    </div>

    <!-- <div id="carouselNavButtons">
        <a class="prevCarouselButton" onclick="plusSlides(-1)">&#10094;</a>
        <a class="nextCarouselButton" onclick="plusSlides(1)">&#10095;</a>
       
    </div> -->

   

    </div>

     <!-- The dots/circles -->
     <div id="carouselDots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>


</div>

<script src="wedding.js"></script>
</body>
</html>