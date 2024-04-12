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
  <a id="logo" class="satisfy-regular" href="wedding.php">Wedding Venue Finder</a>
  <a class="navbar-item" href="wedding.php">Venues</a>
  <a class="navbar-item" href="favourites.php">Favourites</a>
  <div class="dropdown ">
    <button class="dropbtn navbar-item">Compare Venues 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content" class="navbar-item">
      <a href="compare.php">Compare 2 Venues</a>
      <a href="#">Compare All Venues</a>
    </div>
  </div> 
</nav>
</header>

<div id="mainBodyCompare">
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

  <p id="compareFormError"></p>
  <div id="compareForm">
    <form method="post" action='<?php htmlspecialchars($_SERVER["PHP_SELF"]);?>'>
      <div id="compareDropdowns">
        <select name="dropdownLeft" id="dropdownLeft">
          <?php
          if (mysqli_num_rows($result) > 0) {
              while ($row = mysqli_fetch_array($result)) {
                  $selected = ($row['name'] == $dropdownLeft) ? 'selected' : '';
                  echo "<option value='" . $row['name'] . "' $selected>" . $row['name'] . "</option>";
              }
          }
          ?>
        </select>
        <select name="dropdownRight" id="dropdownRight">
            <?php
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_array($result)) {
                    $selected = ($row['name'] == $dropdownRight) ? 'selected' : '';
                    echo "<option value='" . $row['name'] . "' $selected>" . $row['name'] . "</option>";
                }
            }
            ?>
        </select>

      </div>
      <div id="compareSubmit">
            <input type="submit" name="submit" id="compareSubmit" value="Compare">
      </div>
    </form>

    <script>
      let dropdownLeft = "<?php echo"$dropdownLeft"?>";
      let dropdownRight = "<?php echo"$dropdownRight"?>";
    </script>

  </div>


  <div id="compareGraphs">
    <div id="compareRadar">
      <canvas id="ratingRadarChart"></canvas>
    </div>
    <div id="compareBar">
      <canvas id="popularityCompareLine"></canvas>
    </div>
  </div>
</div>


<script src="compare.js"></script>
</body>
</html>