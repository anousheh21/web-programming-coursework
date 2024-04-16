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

<div id="contactPageBody">
    <div id="contactFormHeadingDiv">
        <h1 class="title" id="contactFormHeading">Contact Us</h1>
    </div>

    <div id="contactForm">
        <form method="post" action='<?php htmlspecialchars($_SERVER["PHP_SELF"]);?>'>

            <div id="contactFormFirstNameDiv">
                <label for="contactFormFirstName" class="contactFormInput">First Name</label>
                <input type="text" id="contactFormFirstName" name="contactFormFirstName">
            </div>

            <div id="contactFormSurnameDiv">
                <label for="contactFormSurname" class="contactFormInput">Surname</label>
                <input type="text" name="contactFormSurname" id="contactFormSurname">
            </div>

            <div id="contactFormDateDiv">
                <label for="contactFormDate" class="contactFormInput">Wedding Date</label>
                <input type="date" id="contactFormDate" name="contactFormDate">
            </div>

            <div id="contactFormPartySizeDiv">
                <label for="contactFormPartySize" class="contactFormInput">Party Size</label>
                <input type="number" name="contactFormPartySize" id="contactFormPartySize">
            </div>

            <div id="contactFormQueryDiv">
                <label for="contactFormQuery" class="contactFormInput">Query</label>
                <textarea name="contactFormQuery" id="contactFormQuery" cols="30" rows="10"></textarea>
            </div>
               
            <input type="submit" name="contactFormSubmit" class="buttonStyler" id="contactFormSubmit" value="Submit">

        </form>
    </div>
</div>

<script src="contact.js"></script>
</body>
</html>