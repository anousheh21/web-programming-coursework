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
    <title>Browse Venues</title>
</head>
<body id="bodyWeddingMain">

<div id="browseBody">

<!-- NAV BAR -->
<header>
    <nav>
  <a id="logo" class="satisfy-regular" href="wedding.php">Wed In Style</a>
  <a class="navbar-item" href="wedding.php">Home</a>
  <a class="navbar-item" href="allVenues.php">Venues</a>
  <a class="navbar-item" href="favourites.php">Favourites</a>
  <a class="navbar-item" href="compareAll.php">Comparisons</a>
  <a class="navbar-item" href="contact.php">Contact</a>
  <!-- <div class="dropdown ">
    <button class="dropbtn navbar-item">Compare Venues 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content" class="navbar-item">
      <a href="compare.php">Compare 2 Venues</a>
      <a href="compareAll.php">Compare All Venues</a>
    </div>
  </div>  -->
</nav>
  <!-- </nav> -->
</header>

<?php
    // Get form data from home search in wedding.php
    if(isset($_GET['homeSearchDate'])) {
        $homeSearchDate = cleanInput($_GET['homeSearchDate']);
    }

    if(isset($_GET['homeSearchLocation'])) {
        $homeSearchLocation = cleanInput($_GET['homeSearchLocation']);
    }

    if(isset($_GET['homeSearchMinPrice'])) {
        $homeSearchMinPrice = cleanInput($_GET['homeSearchMinPrice']);
    }

    if(isset($_GET['homeSearchMaxPrice'])) {
        $homeSearchMaxPrice = cleanInput($_GET['homeSearchMaxPrice']);
    }

    function cleanInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>

<script>
    let homeSearchDate = "<?php echo"$homeSearchDate"?>";
    let homeSearchLocation = "<?php echo"$homeSearchLocation"?>";
    let homeSearchMinPrice = "<?php echo"$homeSearchMinPrice"?>";
    let homeSearchMaxPrice = "<?php echo"$homeSearchMaxPrice"?>";
</script>

<div class="main-content">

<div id="topBrowseCenter">
 <div id="topBrowseSection">
   

    <!-- HEADING -->
    <div id="browseHeadingDiv">
        <h1 class="title" id="title-browse">Browse Venues</h1>
        <div id="noBrowseDiv">
             <h3 class="hiddenBrowseVenuesMessage noBrowseVenuesMessage">There are no venues to display.</h3>
             <h3 id="noBrowseLineTwo" class="hiddenBrowseVenuesMessage noBrowseVenuesMessage">Consider changing your search, or browse through all our venues.</h3>
        </div>
        
    </div>

    <!-- FILTERS -->
    <div class="filter-section">
        <!-- <h2 id="filter-heading">Filter Venues</h2> -->
        <div id="weddingDateFilterDiv">
            <label for="wedding-date-picker" class="filter-subheading">Wedding Date</label>
            <input type="date" id="wedding-date-picker" name="wedding-date-picker">
        </div>

        <div id="partySizeFilterDiv">
            <label for="party-size-input" class="filter-subheading">Party Size</label>
            <input type="number" id="party-size-input" name="party-size-input">
        </div>

        <div id="cateringGradeFilterDiv">
            <h5 class="filter-subheading">Catering Grade</h5>

            <div id="cateringGradeFilterCheckboxes">
                <input type="checkbox" class="catering-grade-checkbox" name="grade-1" id="grade-1" value=1>
                <label for="grade-1" class="catering-grade-label">1</label><br>
                <input type="checkbox" id="grade-2" class="catering-grade-checkbox" name="grade-2" value=2>
                <label for="grade-2" class="catering-grade-label">2</label><br>
                <input type="checkbox" id="grade-3" class="catering-grade-checkbox" name="grade-3" value=3>
                <label for="grade-3" class="catering-grade-label">3</label><br>
                <input type="checkbox" id="grade-4" class="catering-grade-checkbox" name="grade-4" value=4>
                <label for="grade-4" class="catering-grade-label">4</label><br>
                <input type="checkbox" id="grade-5" class="catering-grade-checkbox" name="grade-5" value=5>
                <label for="grade-5" class="catering-grade-label">5</label><br>
            </div>
        </div>


    </div>
</div>
</div>
   

    <div id="browse-section">
        

        <!-- VENUE CARDS -->
        <div id="venue-cards">
        <?php
            include "db-config.php";
            $conn = mysqli_connect($servername, $username, $password, $dbname);

            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $sql = "SELECT name, weekday_price, weekend_price, capacity, MIN(cost) as min_cost, MAX(cost) as max_cost FROM venue, catering WHERE venue.venue_id = catering.venue_id GROUP BY name, weekday_price, weekend_price, capacity order by name asc;";
            $result = mysqli_query($conn, $sql);

            
           

           

            echo "<div class='venue-container'>";
            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_array($result)) {

                

                    echo "<div class='venue-card'>";

                    if ($row["name"] == "Central Plaza") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageCentralPlaza.png' alt='Central Plaza'></a>";
                    } else if ($row["name"] == "Pacific Towers Hotel") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imagePacificTowers.png' alt='Pacific Towers Hotel'></a>";
                    } else if ($row["name"] == "Sky Center Complex") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageSkyCenterComplex.png' alt='Sky Center Complex'></a>";
                    } else if ($row["name"] == "Sea View Tavern") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageSeaView.png' alt='Sea View Tavern'></a>";
                    } else if ($row["name"] == "Ashby Castle") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageAshbyCastle.png' alt='Ashby Castle'></a>";
                    } else if ($row["name"] == "Fawlty Towers") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageFawltyTowers.png' alt='Fawlty Towers'></a>";
                    } else if ($row["name"] == "Hilltop Mansion") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageHilltopMansion.png' alt='Hilltop Mansion'></a>";
                    } else if ($row["name"] == "Haslegrave Hotel") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageHaslegraveHotel.png' alt='Haslegrave Hotel'></a>";
                    } else if ($row["name"] == "Forest Inn") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageForestInn.png' alt='Forst Inn'></a>";
                    } else if ($row["name"] == "Southwestern Estate") {
                        echo "<a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'><img class='venue-image' src='imageSouthwestern.png' alt='Southwestern Estate'></a>";
                    } else {
                        echo "<p>image error</p>";
                    }



                    echo "<div class='venue-info'>";

                    echo "<div class='boxHeading'>";
                    echo "<h3 id='venue-name'>" . $row["name"] . "</h3>";

                    echo "<img class='heartsvg heart' id='heartBorder' src='heartBorder.svg'>";
                    echo "<img class='heartsvg hidden heart' id='heartFill' src='heartFill.svg'>";

                    echo "</div>";

                    echo "<div class='ratingValues'>";
                    echo "<img class='starsvg' src='star.svg'>";
                    echo "<p class='ratingAverage' id='browseRatingAverage'></p>";
                    echo "<p class='numberOfRatings' id='browseNumberOfRatings'></p>";

                    echo "</div>";

                    echo "<div class='overview-details'>";
                    echo "<p>Price: £" .  $row["weekday_price"] . " - £" . $row["weekend_price"] . "</p>";
                    echo "<p>Catering: £" . $row["min_cost"] . " - £" . $row["max_cost"]  . "</p>";
                    echo "<p>Capacity: <span class='capacity'>" . $row["capacity"] . "</span></p>";

                    echo "</div>";
                    // echo "<a href='singleVenue.php'>See More Information</a>";
                    echo "<button class='buttonStyler'><a href='singleVenue.php?venue=" . urlencode($row["name"]) . "'>See More Information</a></button>";

                    echo "</div>";
                    echo "</div>";
                }
            }

            echo "</div>";

            mysqli_close($conn);
        ?>
        </div>
    </div>

    
</div>

<script src="allVenues.js"></script>
</div>
</body>
</html>