<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <title>Browse Venues</title>
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

<div class="venue-container">
  <div class="venue-card">
   
        <img class="venue-image" src="imageSeaView.png" alt="Sea View Tavern">
    
    <div class="venue-info">
      <h3>Venue Name</h3>
      <p>Location</p>
      <p>Price: £1000 - £3500</p>
      <p>Catering: £10 - £25</p>
      <p>Capacity: 250</p>
      <a href="singleVenue.php">See More Information</a>
    </div>
  </div>
</div>

<!--TESTING READ IN DATABASE-->
<?php
    // include "db-config.php";
    // $conn = mysqli_connect($servername, $username, $password, $dbname);

    // if (!$conn) {
    //     die("Connectien failed: " . mysqli_connect_error());
    // }

    // $sql = "select * from venue";
    // $result = mysqli_query($conn, $sql);

    // echo "Number of results: " . mysqli_num_rows($result);


    // $allDatArray = array();
    // $result = mysqli_query($conn, $sql);
    // while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    //     $allDataArray[] = $row;
    // }

    // echo json_encode($allDataArray);

    // mysqli_close($conn);

    
?>

</body>
</html>