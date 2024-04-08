$(function() {
    // Fetch JSON from venueInfo.php
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            const venueInfo = resData.filter(item => item.name == venueName);
            const thisVenue = venueInfo[0];

            // Display correct image corresponding to venue selected
            if (thisVenue.name == "Central Plaza") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageCentralPlaza.png' alt='Central Plaza'>")
            } else if (thisVenue.name == "Pacific Towers Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imagePacificTowers.png' alt='Pacific Towers Hotel'>")
            } else if (thisVenue.name == "Sky Center Complex") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSkyCenterComplex.png' alt='Sky Center Complex'>")
            } else if (thisVenue.name == "Sea View Tavern") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSeaView.png' alt='Sea View Tavern'>")
            } else if (thisVenue.name == "Ashby Castle") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageAshbyCastle.png' alt='Ashby Castle'>")
            } else if (thisVenue.name == "Fawlty Towers") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageFawltyTowers.png' alt='Fawlty Towers'>")
            } else if (thisVenue.name == "Hilltop Mansion") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHilltopMansion.png' alt='Hilltop Mansion'>")
            } else if (thisVenue.name == "Haslegrave Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHaslegraveHotel.png' alt='Haslegrave Hotel'>")
            } else if (thisVenue.name == "Forest Inn") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageForestInn.png' alt='Forest Inn'>")
            } else if (thisVenue.name == "Southwestern Estate") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSouthwestern.png' alt='Southwestern Estate'>")
            } else {
                $("#singleVenueImage").html("<p>image error</p>")
            }

            // Put basic information on web page from JSON file
            $("#title-single").html(thisVenue.name);
            $("#singleVenueCapacity").html("Capacity: " + thisVenue.capacity);
            if (thisVenue.licensed == 1) {
                $("#singleVenueLicensed").html("Licensed: Yes");
            } else if (thisVenue.licensed == 0) {
                $("#singleVenueLicensed").html("Licensed: No");
            }

            // Put venue hire prices on web page from JSON file
            $("#weekdayPrice").html("Weekday Price: £" + thisVenue.weekday_price);
            $("#weekendPrice").html("Weekend Price: £" + thisVenue.weekend_price);

        })

    // Fetch catering price information
    fetch("cateringGrades.php")
        .then(res => res.json())
        .then(resData => {
                const cateringInfo = resData.filter(item => item.name == venueName)
                
                for (i = 0; i < cateringInfo.length; i++) {
                $("#cateringPrices").append("<p id='cateringGradeInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");
                }
        })

    const datesButton = $("#availabilityButton");
    const popularButton = $("#popularityButton");

    // datesButton event listener
    datesButton.on('click', () => {
        console.log('availability button clicked')
    })

    // popularButton event listener
    popularButton.on('click', () => {
        console.log('popularity button clicked')
    })
        
})