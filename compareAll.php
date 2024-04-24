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

<div id="mainBodyCompareAll">
    <h1 class="title" id="title-compare">Compare Venues</h1>
    <p id="compareSubheading">To compare two venues, simply use the dropdown menus below to select your venues. To compare all venues, use the buttons below to see capacity and pricing information.</p>

    <?php
    // Dropdown menu form validation
    $dropdownLeftError = $dropdownRightError = "";
    $dropdownLeft = $dropdownRight = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (empty($_POST["dropdownLeft"])) {
        $dropdownLeftError = "Dropdown value is required";
        } else {
        $dropdownLeft = cleanInput($_POST["dropdownLeft"]);
        }

        if (empty($_POST["dropdownRight"])) {
        $dropdownRightError = "Dropdown value is required";
        } else {
        $dropdownRight = cleanInput($_POST["dropdownRight"]);
        }

    }

    function cleanInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>

    <?php
    // Read venue names from database
    include "db-config.php";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "select name from venue order by name asc;";
    $result = mysqli_query($conn, $sql);

    ?>

    <!-- <p id="compareFormError"></p> -->
    <div id="compareForm">
        <div id="compareDropdowns">
            <div id="leftCompareColumn">
                <select class="dropdownCompare" name="dropdownLeft" id="dropdownLeft">
                    <option value="noSelectionLeft" selected>Select</option>
                    <?php
                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_array($result)) {
                            // $selected = ($row['name'] == $dropdownLeft) ? 'selected' : '';
                            echo "<option value='" . $row['name'] . "'>" . $row['name'] . "</option>";
                        }
                    }
                    ?>
                </select>
                <div class="comparisonInformation">
                    <div id="compareImgPlaceholderLeft"></div>
                    <div id="comparisonDetailsLeft" class="comparisonDetails">

                        <div id="comparisonOverviewLeft" class="comparisonOverview comparisonBox comparisonBoxLeft">
                            <div class="comparisonOverviewTitleDiv hideComparisonTitle comparisonTitleDivLeft">
                                <h4 class="comparisonOverviewTitle">Details</h4>
                            </div>
                            <p id="comparisonCapacityLeft"></p>
                            <p id="comparisonLocationLeft"></p>
                            <p id="comparisonRatingLeft"></p>
                            <p id="comparisonLicensedLeft"></p>
                        </div>

                        <div id="comparisonPricingLeft" class="comparisonPricing comparisonBoxLeft comparisonBox">
                             <div class="comparisonPricingTitleDiv hideComparisonTitle comparisonTitleDivLeft">
                                <h4 class="comparisonPricingTitle">Pricing</h4>
                            </div>
                            <p id="comparisonWeekdayLeft"></p>
                            <p id="comparisonWeekendLeft"></p>
                        </div>

                        <div id="comparisonCateringDivLeft" class="comparisonCateringDiv comparisonBoxLeft comparisonBox">
                            <div class="comparisonCateringTitleDiv hideComparisonTitle comparisonTitleDivLeft">
                                <h4 class="comparisonCateringTitle">Catering</h4>
                            </div>
                            <p id="comparisonCateringLeft"></p>
                        </div>

                    </div>
                </div>
            </div>

            <div id="rightCompareColumn">
                <select class="dropdownCompare" name="dropdownRight" id="dropdownRight">
                    <option value="noSelectionRight" selected>Select</option>
                    <?php
                    $result = mysqli_query($conn, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_array($result)) {
                            // $selected = ($row['name'] == $dropdownRight) ? 'selected' : '';
                            echo "<option value='" . $row['name'] . "'>" . $row['name'] . "</option>";
                        }
                    }
                    ?>
                </select>
                <div class="comparisonInformation">
                    <div id="compareImgPlaceholderRight"></div>
                    <div id="comparisonDetailsRight" class="comparisonDetails">

                        <div id="comparisonOverviewRight" class="comparisonOverview comparisonBoxRight comparisonBox">
                            <div class="comparisonOverviewTitleDiv hideComparisonTitle comparisonTitleDivRight">
                                <h4 class="comparisonOverviewTitle">Details</h4>
                            </div>
                            <p id="comparisonCapacityRight"></p>
                            <p id="comparisonLocationRight"></p>
                            <p id="comparisonRatingRight"></p>
                            <p id="comparisonLicensedRight"></p>
                        </div>

                        <div id="comparisonPricingRight" class="comparisonPricing comparisonBoxRight comparisonBox">
                            <div class="comparisonPricingTitleDiv hideComparisonTitle comparisonTitleDivRight">
                                <h4 class="comparisonPricingTitle">Pricing</h4>
                            </div>
                            <p id="comparisonWeekdayRight"></p>
                            <p id="comparisonWeekendRight"></p>
                        </div>

                        <div id="comparisonCateringDivRight" class="comparisonCateringDiv comparisonBoxRight comparisonBox">
                            <div class="comparisonCateringTitleDiv hideComparisonTitle comparisonTitleDivRight">
                                <h4 class="comparisonCateringTitle">Catering</h4>
                            </div>
                            <p id="comparisonCateringRight"></p>
                        </div>

                    </div>
                </div>
            </div>

        <!-- </div> -->
       

    </div>

    <div id="compareAllGraphStats" class="compareGraphMargin">
    <div id="compareAllButtons">
        <button class="buttonStyler" id="showCapacityCompare">Compare Capacity</button>
        <button class="buttonStyler" id="showVenueDayPriceCompare">Compare Weekday & Weekend Prices</button>

       
    </div>

    <h3 id="compareChartTitle"></h3>

    <div id="compareAllChartDiv">
        <canvas id="compareAllChart"></canvas>
    </div>
                </div>

</div>


<!-- COMMENT THESE BUTTONS BACK IN -->

<!-- <div id="mainBodyCompareAll">
    <h1 class="title" id="title-compare-all">Select Comparison Metric</h1>

    <div id="compareAllButtons">
        <button class="buttonStyler" id="showCapacityCompare">Compare Capacity</button>
        <button class="buttonStyler" id="showVenueDayPriceCompare">Compare Weekday & Weekend Prices</button>
    </div>

    <div id="compareAllChartDiv">
        <canvas id="compareAllChart"></canvas>
    </div>

</div> -->

<script src="compareAll.js"></script>
</body>
</html>