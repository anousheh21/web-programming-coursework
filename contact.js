$(function() {
    const firstNameInput = $("#contactFormFirstName");
    const surnameInput = $("#contactFormSurname");
    const venueInput = $("#contactFormVenue");
    const dateInput = $("#contactFormDate");
    const partyInput = $("#contactFormPartySize");
    const queryInput = $("#contactFormQuery");

   

    let errorPresent = () => {
        firstNameInput.val(firstName);
        surnameInput.val(surname);
        // venueInput.val(venue);
        dateInput.val(date);
        partyInput.val(partySize);
        queryInput.val(query);

        if (venue == "noSelection" || venue == "") {
            venueInput.val("noSelection");
        } else {
            venueInput.val(venue);
        }
    }

    $(document).ready(function() {
        let prefilledDate = sessionStorage.getItem("dateWedding");
        console.log(prefilledDate)
        if (prefilledDate != null && date == "") {
            console.log("there is a date")
            console.log(prefilledDate)
            //new Date datePrefilled = Date.parse(prefilledDate)
            dateInput.val(prefilledDate);
    }})

    if (firstName == "" || surname == "" || date == "" || partySize == "" || venue == "" || venue == "noSelection") {
        errorPresent()
    } else {
        fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            const contactVenue = resData.filter(item => item.name == venue);
            contactVenueCapacity = parseInt(contactVenue[0].capacity);

            console.log(contactVenue)
            console.log(contactVenueCapacity)

            fetch("weddingDates.php")
                .then(res => res.json())
                .then(resData => {
                    const contactDates = resData.filter(item => item.name == venue);

                    // console.log(contactDates);
                    // console.log(venue);
                    // console.log(date);
                    
                    let bookedVenue = false;
                    contactDates.forEach(contactDate => {
                        //console.log(contactDate)
                        // console.log(date)
                        
                        if (contactDate.booking_date == date) {
                            bookedVenue = true;
                            return;
                        } 
                    })

                    // Contact form validation
                    if (partySize < 0) {
                        $("#partySizeError").html("Invalid party size");
                        errorPresent()
                    } else if (partySize > contactVenueCapacity) {
                        $("#partySizeError").html("Party size excdeeds chosen venue capacity");
                        errorPresent();
                    } else if (bookedVenue == true) {
                        $("#dateError").html("Date unavailable");
                        errorPresent();
                    } else {
                        // Submit Form
                        $("#contactFormSubmissionResponse").html(`Thank you for your query, ${firstName}. ${venue} will be in contact with you within the next few days to arrange your booking!`)
                    }

                })
        })

    }
})