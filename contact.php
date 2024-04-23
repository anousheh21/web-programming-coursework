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
    <title>Contact Us</title>
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
    // Contact form validation
    $firstNameError = $surnameError = $venueError = $dateError = $partySizeError = "";
    $firstName = $surname = $venue = $date = $partySize = $query = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["contactFormFirstName"])) {
            $firstNameError = "First name is required";
        } else {
            $firstName = cleanInput($_POST["contactFormFirstName"]);
        }

        if (empty($_POST["contactFormSurname"])) {
            $surnameError = "Surname is required";
        } else {
            $surname = cleanInput($_POST["contactFormSurname"]);
        }

        if (empty($_POST["contactFormDate"])) {
            $dateError = "Wedding date is required";
        } else {
            $date = cleanInput($_POST["contactFormDate"]);
        }

        if (empty($_POST["contactFormPartySize"])) {
            $partySizeError = "Party size is required";
        } else {
            $partySize = cleanInput($_POST["contactFormPartySize"]);
        }

        if (empty($_POST["contactFormVenue"]) || ($_POST["contactFormVenue"]) == "noSelection") {
            $venueError = "Venue is required";
        } else {
            $venue = cleanInput($_POST["contactFormVenue"]);
        }

        if (!empty($_POST["contactFormQuery"])) {
            $query = cleanInput($_POST["contactFormQuery"]);
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

<div id="contactPageBody">
    <div id="contactFormHeadingDiv">
        <h1 class="title" id="contactFormHeading">We're thrilled to hear from you!</h1>
        <p id="contactFormSubheading">Whether you have questions about our services, want to schedule a tour of our venues, or are ready to start planning your dream wedding, we're here to help. Simply fill out the form below, and one of our dedicated team members will get back to you as soon as possible.</p>
    </div>

    <div id="contactForm">
        <form method="post" action='<?php htmlspecialchars($_SERVER["PHP_SELF"]);?>'>

            <div id="contactFormNameContainer">
                <div id="contactFormFirstNameDiv" class="contactFormDiv">
                    <label for="contactFormFirstName" class="contactFormInput">First Name</label>
                    <input class="contactFormInputEl" type="text" id="contactFormFirstName" name="contactFormFirstName">
                    <span class="contactError"><?php echo $firstNameError?></span>
                </div>

                <div id="contactFormSurnameDiv" class="contactFormDiv">
                    <label for="contactFormSurname" class="contactFormInput">Surname</label>
                    <input class="contactFormInputEl" type="text" name="contactFormSurname" id="contactFormSurname">
                    <span class="contactError"><?php echo $surnameError?></span>
                </div>
            </div>

            <div id="contactFormOtherInfoContainer">
                <div id="contactFormVenueDiv" class="contactFormDiv">
                    <label for="contactFormVenue" class="contactFormInput">Venue</label>
                
                    <select class="contactFormInputEl" name="contactFormVenue" id="contactFormVenue">
                        <option value="noSelection" selected>Select</option>
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

                    <span class="contactError"><?php echo $venueError?></span>
                </div>

                <div id="contactFormPartySizeDiv" class="contactFormDiv">
                    <label for="contactFormPartySize" class="contactFormInput">Party Size</label>
                    <input class="contactFormInputEl" type="number" name="contactFormPartySize" id="contactFormPartySize">
                    <span class="contactError" id="partySizeError"><?php echo $partySizeError?></span>
                    <!-- <span id="partySizeError"></span> -->
                </div>

                <div id="contactFormDateDiv" class="contactFormDiv">
                    <label for="contactFormDate" class="contactFormInput">Wedding Date</label>
                    <input class="contactFormInputEl" type="date" id="contactFormDate" name="contactFormDate">
                    <span class="contactError" id="dateError"><?php echo $dateError?></span>
                </div>

               
            </div>

            <div id="contactFormQueryDiv" class="contactFormDiv">
                <label for="contactFormQuery" class="contactFormInput">Query</label>
                <textarea class="contactFormInputEl" name="contactFormQuery" id="contactFormQuery" cols="30" rows="5"></textarea>
            </div>
               
            <input type="submit" name="contactFormSubmit" class="buttonStyler" id="contactFormSubmit" value="Submit">

        </form>

    </div>

    <script>
        let firstName = "<?php echo"$firstName"?>";
        let surname = "<?php echo"$surname"?>";
        let venue = "<?php echo"$venue"?>";
        let date = "<?php echo"$date"?>";
        let partySize = "<?php echo"$partySize"?>";
        let query = "<?php echo"$query"?>";
    </script>

    <p id="contactFormSubmissionResponse"></p>
</div>

<script src="contact.js"></script>
</body>
</html>