<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <title>Compare Venues</title>
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
          <input type="submit" name="submit" id="compareSubmit">
    </div>
  </form>

  <script>
    let dropdownLeft = "<?php echo"$dropdownLeft"?>";
    let dropdownRight = "<?php echo"$dropdownRight"?>";

    console.log(dropdownLeft)
    console.log(dropdownRight)
  </script>

</div>

<div id="compareGraphInfo">
  <div id="compareRadio"></div>
  <div id="compareGraphs">
    <div id="compareRadar"></div>
    <div id="compareBar"></div>
  </div>
</div>

</body>
</html>