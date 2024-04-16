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
    <h1 class="title" id="title-compare">Select Venues to Compare</h1>

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

    $sql = "select name from venue;";
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
                    <div id="comparisonDetailsLeft">
                        <p id="comparisonCapacityLeft"></p>
                        <p id="comparisonLocationLeft"></p>
                        <p id="comparisonRatingLeft"></p>
                        <p id="comparisonLicensedLeft"></p>
                        <p id="comparisonWeekdayLeft"></p>
                        <p id="comparisonWeekendLeft"></p>
                        <p id="comparisonCateringLeft"></p>
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
                    <div id="comparisonDetailsRight">
                        <p id="comparisonCapacityRight"></p>
                        <p id="comparisonLocationRight"></p>
                        <p id="comparisonRatingRight"></p>
                        <p id="comparisonLicensedRight"></p>
                        <p id="comparisonWeekdayRight"></p>
                        <p id="comparisonWeekendRight"></p>
                        <p id="comparisonCateringRight"></p>
                    </div>
                </div>
            </div>

        <!-- </div> -->
       

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