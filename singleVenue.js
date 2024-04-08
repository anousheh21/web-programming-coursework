$(function() {
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            const venueInfo = resData.filter(item => item.name == venueName);
            const thisVenue = venueInfo[0];

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

            $("#title-single").html(thisVenue.name);
            $("#singleVenueCapacity").html("Capacity: " + thisVenue.capacity);
            if (thisVenue.licensed == 1) {
                $("#singleVenueLicensed").html("Licensed: Yes");
            } else if (thisVenue.licensed == 0) {
                $("#singleVenueLicensed").html("Licensed: No");
            }
        })
})