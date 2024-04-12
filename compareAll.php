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
      <a href="compareAll.php">Compare All Venues</a>
    </div>
  </div> 
</nav>
</header>

<div id="mainBodyCompareAll">
    <h1 class="title" id="title-compare-all">Select Comparison Metric</h1>

    <div id="compareAllButtons">
        <button id="showCapacityCompare">Compare Capacity</button>
        <button id="showWeekdayPriceCompare">Compare Weekday Price</button>
        <button id="showWeekendPriceCompare">Compare Weekend Price</button>
    </div>

    <div id="compareAllChartDiv">
        <canvas id="compareAllChart"></canvas>
    </div>

</div>

<script src="compareAll.js"></script>
</body>
</html>