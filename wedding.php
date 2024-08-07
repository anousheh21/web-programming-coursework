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

    <div id="homeTitleDiv">
        <h1 class="title" id="home-title">Browse our collection of unique and stunning wedding venues</h1>
    </div>
    
    <div id="venueCarousel">

    <div class="mySlides">
        <div class="slideContainer">
            <img class="carouselImage" src="imageCentralPlaza.png" alt="Central Plaza">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Central Plaza</h3>
                <p id="carouselDescription"> The Central Plaza Hotel in London is the epitome of both elegance and luxury in the heart of the city of London.</p>
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
                <h3 id="carouselTitle">Pacific Towers Hotel</h3>
                <p id="carouselDescription">The Pacific Towers Hotel in Birmingham is a modern hotel set amidst the vibrant cityscape.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Pacific Towers Hotel") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
             <img src="imageSkyCenterComplex.png" alt="Sky Center Complex" class="carouselImage">
             <div class="carouselInformation">
                <h3 id="carouselTitle">Sky Center Complex</h3>
                <p id="carouselDescription">The Sky Centre Complex in Loughborough stands tall in the heart of the town.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Sky Center Complex") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageSeaView.png" alt="Sea View Tavern" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Sea View Tavern</h3>
                <p id="carouselDescription">The Sea View Tavern in Nottingham is a charming retreat nestled in the heart of the city.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Sea View Tavern") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageAshbyCastle.png" alt="Ashby Castle" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Ashby Castle</h3>
                <p id="carouselDescription">Ashby Castle is a historic hotel in the heart of Manchester, steeped in centuries of rich history and architectural grandeur.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Ashby Castle") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageFawltyTowers.png" alt="Fawlty Towers" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Fawlty Towers</h3>
                <p id="carouselDescription">Fawlty Towers in York is a delightful homage to the iconic institution. It offers whimsical experience inspired by the historical show.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Fawlty Towers") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageHilltopMansion.png" alt="Hilltop Mansion" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Hilltop Mansion</h3>
                <p id="carouselDescription">Hilltop Mansion in Liverpool stands as a beacon of opulence, overlooking the cityscape with timeless elegance. </p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Hilltop Mansion") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageHaslegraveHotel.png" alt="Haslegrave Hotel" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Haslegrave Hotel</h3>
                <p id="carouselDescription">In the heart of Bristol, Haslegrave Hotel is a quintessential destination for unforgettable wedding celebrations.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Haslegrave Hotel") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageForestInn.png" alt="Forest Inn" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Forest Inn</h3>
                <p id="carouselDescription">The Forrest Inn in Brighton is a cozy and welcoming gastropub nestled within the picturesque seaside city.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Forest Inn") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    <div class="mySlides">
        <div class="slideContainer">
            <img src="imageSouthwestern.png" alt="Southwestern Estate" class="carouselImage">

            <div class="carouselInformation">
                <h3 id="carouselTitle">Southwestern Estate</h3>
                <p id="carouselDescription">The Southwestern Estate in Marylebone is a prestigious enclave nestled in one of London's most sought-after neighborhoods.</p>
               <?php
                echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode("Southwestern Estate") . "'>See More</a></button>";
                ?>
            </div>
        </div>
    </div>

    </div>

     <!-- The dots/circles -->
     <div id="carouselDots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
        <span class="dot" onclick="currentSlide(7)"></span>
        <span class="dot" onclick="currentSlide(8)"></span>
        <span class="dot" onclick="currentSlide(9)"></span>
        <span class="dot" onclick="currentSlide(10)"></span>
    </div>

    <div id="homeSearch">
        <div id="homeSearchTitleDiv">
            <h3 id="homeSearchTitle">Search For Your Perfect Venue</h3>
            <p id="homeSearchErrorMessage"></p>
        </div>
        <div id="homeSearchForm">
            <form onsubmit="return validateHomeSearch()" action="allVenues.php" method="get">
                <!-- <input class="homeSearchInput" placeholder="Wedding Date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="homeSearchDate" name="homeSearchDate"> -->

                <!-- <input class="homeSearchInput homeSearchDate" placeholder="Wedding Date" type="text" id="textInput" name="homeSearchDatePlaceholder"> -->
                <input class="homeSearchInput homeSearchDate" type="date" id="dateInput" name="homeSearchDate">


                <select class="homeSearchInput" name="homeSearchLocation" id="homeSearchLocation">
                    <option value="noSelection">Select Location</option>
                    <option value="north">North England</option>
                    <option value="midlands">Midlands</option>
                    <option value="london">London</option>
                    <option value="south">South England</option>
                </select>
                <input class="homeSearchInput" placeholder="Minimum Cost (£)" type="number" id="homeSearchMinPrice" name="homeSearchMinPrice">
                <input class="homeSearchInput" placeholder="Maximum Cost (£)" type="number" id="homeSearchMaxPrice" name="homeSearchMaxPrice">
                <input type="submit" class="buttonStyler" id="homeSearchSubmit"  name="homeSearchSubmit" value="Go">
            </form>
        </div>
        <!-- <div id="homeSearchErrorMessageDiv">
            <p id="homeSearchErrorMessage"></p>
        </div> -->
    </div>


</div>

<script src="wedding.js"></script>
</body>
</html>