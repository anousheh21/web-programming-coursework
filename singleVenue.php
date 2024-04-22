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
    <script>
      (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: "AIzaSyBA5PE5DLFMfkohgp6rpF9w5R1YGyMbbnY",
        v: "weekly",
      });
    </script>
    <title>Wedding Venue</title>
    <script src="singleVenue.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
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

<?php
if(isset($_GET['venue'])) {
    $venueName = $_GET['venue'];
    echo "<script> let venueName = '$venueName';</script>";
} else {
    echo "<h1>Error 404: Page Not Found/h1>";
}
?>

<?php
// Calculate cost form validation
$partySizeCostError = $dateCostError = $cateringCostRadio = "";
$partySizeCost = $dateCost = $cateringCostError = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (empty($_POST["partySizeCost"])) {
    $partySizeCostError = "Party size is required";
  } else {
    $partySizeCost = cleanInput($_POST["partySizeCost"]);
  }

  if (empty($_POST["dateCost"])) {
    $dateCostError = "Date is required";
  } else {
    $dateCost = cleanInput($_POST["dateCost"]);
  }

  if (empty($_POST["cateringCostRadio"])) {
    $cateringCostError = "Catering grade is required";
  } else {
    $cateringCostRadio = cleanInput($_POST["cateringCostRadio"]);
  }
}

function cleanInput($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


?>

<!-- <div id="thisVenueBody">
  <div id="leftContent">
    <div id="overviewInfo">
      <h1 class='title' id='title-single'></h1>
      <div id="availabilityButtons">
        <button id="popularityButton" class="buttonStyler">Compare Price Per Head</button>
        <div class="modal" id="popularityModal">
          <div class="modal-header">
            <div class='modal-title'>Price Per Head Comparison</div>
            <button class="close-button" id="popularityCloseButton">&times;</button>
          </div>
          <div class="modal-body">
            <canvas id="venuePopularityChart"></canvas>
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
    <div id="locationMap"></div>

    <div id="venueRatingInformation">
      <div id="venueRatingHeader">
      <h3 id="venueRatingTitle">Ratings:  </h3>
      <div id="ratingValues" class="ratingValues" >
        <img id="starsvg" class="starsvg" src="star.svg">
        <p id="ratingAverage" class="ratingAverage"></p>
        <p id="numberOfRatings" class="numberOfRatings"></p>
      </div>
      </div>

      <div id="ratingDoughnutChart">
          <canvas id="venueRatingChart"></canvas>
      </div>
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
            <h3 id="costBoxHeading">Cost Calculator</h3>
            <form method="post" action='<?php htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
            <div id="costCalculatorInput">
              <div id="partyInputContainer">
                  <p id="costPartySizeLabel">Party Size</p>
                  <input type="number" name="partySizeCost" id="partySizeCost" value="<?php echo $partySizeCost;?>" size="5" maxlength="5">
                  <span class="costError"><?php echo $partySizeCostError;?></span>
              </div>

              <div id="dateInputContainer">
                  <p id="costDateLabel">Wedding Date</p>
                  <input type="date" name="dateCost" id="dateCost" value="<?php echo $dateCost;?>">
                  <span class="costError"><?php echo $dateCostError;?></span>
              </div>
        </div>  

        <div id="cateringInputContainer">
              <p id="cateringCostLabel">Catering Grade</p>
              <div id="cateringCostSelection">
              <input type="hidden" id="cateringGrade" name="cateringGrade" value="">
              </div>
              <span class="costError"><?php echo $cateringCostError;?></span>
        </div>

        <div id="submitCostButtonContainer">
              <input type="submit" name="submit" class="buttonStyler" id="costSubmit" value="Calculate">
        </div>
            </form>

            <script>
              // Pass form outputs to JavaScript file
              let partySizeCost = "<?php echo"$partySizeCost"?>";
              let dateCost = "<?php echo"$dateCost"?>";
              let cateringGradeCost = "<?php echo"$cateringCostRadio"?>";

        
            </script>

          
            <p id="costInvalidResponse"></p>

           
            <p id="calculatedCost"></p>

        </div>
      </div>
  </div>
</div> -->


  <div id="thisVenueBody">

      <div id="singleImageDiv">
        <h1 class='title' id='title-single'></h1>
      </div>


      <div id="singleVenueImage"></div>


      <div id="singleVenueDescriptionContainer">
        <div id="singleVenueDescriptionDiv">
          <h3 class="singleVenueH3Style" id="singleVenueDescriptionTitle">Description</h3>

        <div id="singleVenueDetailsDiv">
          <!-- <h3 id="singleVenueDetails">Details</h3> -->
         
          <p class="singleVenueParaStyle" id="singleVenueCapacity">Capacity: </p>
          <p class="singleVenueParaStyle" id="singleVenueInterpunct">•</p>
          <p class="singleVenueParaStyle" id="singleVenueLicensed">Licensed: </p>
        </div>

          <p class="singleVenueParaStyle" id="singleVenueDescription"></p>
        </div>

      
      </div>

      <div id="pricingInfo">
        <div id="pricingBox">
          <div id="pricingBoxHeader">
            <h3 id="pricingBoxHeading">Pricing</h3>
            <div id="availabilityButtons">
              <button id="popularityButton" class="buttonStyler">View Price Per Head</button>
              <div class="modal" id="popularityModal">
                <div class="modal-header">
                  <div class='modal-title'>Price Per Head</div>
                  <button class="close-button" id="popularityCloseButton">&times;</button>
                </div>
                <div class="modal-body">
                  <canvas id="venuePopularityChart"></canvas>
                </div>
              </div>
              <div class="overlay" id="popularityOverlay"></div>
            </div>
          </div>
          <p class="singleVenueParaStyle" id="venuePriceSubheading">Venue Hire<span class="pricingSubheadingItalic"> - (Without Catering)</span></p>
          <p class="singleVenueParaStyle" id="weekdayPrice">Weekday Price: </p>
          <p class="singleVenueParaStyle" id="weekendPrice">Weekend Price: </p>
          <p class="singleVenueParaStyle" id="cateringPriceSubheading">Catering<span class="pricingSubheadingItalic"> - (Per Person)</span></p>
          <div class="singleVenueParaStyle" id="cateringPrices"></div>
        </div>

        <div id="costCalculator">
          <h3 id="costBoxHeading">Cost Calculator</h3>
          <form method="post" action='<?php htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
            <div id="costCalculatorInput">
              <div id="partyInputContainer">
                <p class="singleVenueParaStyle" id="costPartySizeLabel">Party Size</p>
                <input type="number" name="partySizeCost" id="partySizeCost" value="<?php echo $partySizeCost;?>" size="5" maxlength="5">
                <span class="singleVenueParaStyle" class="costError"><?php echo $partySizeCostError;?></span>
              </div>

              <div id="dateInputContainer">
                <p class="singleVenueParaStyle" id="costDateLabel">Wedding Date</p>
                <input type="date" name="dateCost" id="dateCost" value="<?php echo $dateCost;?>">
                <span class="singleVenueParaStyle" class="costError"><?php echo $dateCostError;?></span>
              </div>
            </div>  

            <div id="cateringInputContainer">
                <p class="singleVenueParaStyle" id="cateringCostLabel">Catering Grade</p>
                <div class="singleVenueParaStyle" id="cateringCostSelection">
                  <input type="hidden" id="cateringGrade" name="cateringGrade" value="">
                </div>
                <span class="singleVenueParaStyle" class="costError"><?php echo $cateringCostError;?></span>
            </div>

            <div id="submitCostButtonContainer">
                  <input type="submit" name="submit" class="buttonStyler" id="costSubmit" value="Calculate">
            </div>
          </form>

          <script>
            // Pass form outputs to JavaScript file
            let partySizeCost = "<?php echo"$partySizeCost"?>";
            let dateCost = "<?php echo"$dateCost"?>";
            let cateringGradeCost = "<?php echo"$cateringCostRadio"?>";
          </script>

          <!-- other error messages -->
          <p class="singleVenueParaStyle" id="costInvalidResponse"></p>
          <p class="singleVenueParaStyle" id="costInvalidResponse2"></p>

          <!-- output calculated cost -->
          <p class="singleVenueParaStyle" id="calculatedCost"></p>

        </div>
      </div>

      <div id="singleLocationRatingContainer">
        <div id="singleLocationDiv">
          <h3 id="singleLocationTitle">Location</h3>
          <div id="locationMap"></div>
        </div>

        <div id="singleVenueRatingDiv">
          <div id="venueRatingInformation">
            <div id="venueRatingHeader">
              <h3 id="venueRatingTitle">Ratings:  </h3>
              <div id="ratingValues" class="ratingValues" >
                <img id="starsvg" class="starsvg" src="star.svg">
                <p id="ratingAverage" class="ratingAverage"></p>
                <p id="numberOfRatings" class="numberOfRatings"></p>
              </div>
            </div>
            <div id="ratingDoughnutChart">
              <canvas id="venueRatingChart"></canvas>
            </div>
          </div>
        </div>
      </div>
<!-- 
      <p id="bookingSubheading">To Book: </p>
      <p class="bookingDetails" id="phoneNumber">Phone: phoneNumberHere</p>
      <p class="bookingDetails" id="emailAddress">Email: emailAddressHere</p> -->
  </div>



</body>
</html>