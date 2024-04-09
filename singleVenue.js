$(function() {
    // Fetch JSON from venueInfo.php
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            const venueInfo = resData.filter(item => item.name == venueName);
            const thisVenue = venueInfo[0];

            let phoneNumber;
            let emailAddress;

            // Display correct image corresponding to venue selected
            if (thisVenue.name == "Central Plaza") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageCentralPlaza.png' alt='Central Plaza'>")
                phoneNumber = '01234 567890';
                emailAddress = 'centralplaza'
            } else if (thisVenue.name == "Pacific Towers Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imagePacificTowers.png' alt='Pacific Towers Hotel'>")
                phoneNumber = '02345 678901';
                emailAddress = 'pacifictowers'
            } else if (thisVenue.name == "Sky Center Complex") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSkyCenterComplex.png' alt='Sky Center Complex'>")
                phoneNumber = '03456 789012'
                emailAddress = 'skycenter'
            } else if (thisVenue.name == "Sea View Tavern") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSeaView.png' alt='Sea View Tavern'>")
                phoneNumber = '04567 890123'
                emailAddress = 'seaview'
            } else if (thisVenue.name == "Ashby Castle") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageAshbyCastle.png' alt='Ashby Castle'>")
                phoneNumber = '05678 901234'
                emailAddress = 'ashbycastle'
            } else if (thisVenue.name == "Fawlty Towers") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageFawltyTowers.png' alt='Fawlty Towers'>")
                phoneNumber = '06789 012345'
                emailAddress = 'fawltytowers'
            } else if (thisVenue.name == "Hilltop Mansion") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHilltopMansion.png' alt='Hilltop Mansion'>")
                phoneNumber = '07890 123456'
                emailAddress = 'hilltopmansion'
            } else if (thisVenue.name == "Haslegrave Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHaslegraveHotel.png' alt='Haslegrave Hotel'>")
                phoneNumber = '08901 234567'
                emailAddress = 'haslegrave'
            } else if (thisVenue.name == "Forest Inn") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageForestInn.png' alt='Forest Inn'>")
                phoneNumber = '09012 345678'
                emailAddress = 'forestinn'
            } else if (thisVenue.name == "Southwestern Estate") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSouthwestern.png' alt='Southwestern Estate'>")
                phoneNumber = '09123 456789'
                emailAddress = 'southwestern'
            } else {
                $("#singleVenueImage").html("<p>image error</p>")
            }

            $("#phoneNumber").html("Phone: " + phoneNumber);
            $("#emailAddress").html("Email: book@" + emailAddress + ".com")

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

            // // Configure map
            let map;
           
            async function initMap() {
                const position = { lat : parseFloat(thisVenue.latitude), lng: parseFloat(thisVenue.longitude) };
                const { Map } = await google.maps.importLibrary("maps");
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

                map = new google.maps.Map(document.getElementById('locationMap'), {
                    center: position,
                    zoom: 9,
                    mapId: 'b9e42c44faddda84'
                });

                const marker = new AdvancedMarkerElement({
                    map: map,
                    position: position,
                    title: thisVenue.name
                });
            }

            initMap();

        })

    // Fetch rating information
    fetch("reviewScores.php")
        .then(res => res.json())
        .then(resData => {
            const reviews = resData.filter(item => item.name == venueName);
            
            // Create scores dictionary
            let scores = {};
            reviews.forEach(review => {
                const score = review.score;
                if (scores[score] != undefined) {
                    scores[score] = scores[score] + 1;
                } else {
                    scores[score] = 1;
                }
            })

            // Get number of scores
            numberOfScores = 0;
            for (const [key, value] of Object.entries(scores)) {
                numberOfScores += value;
            }

            $("#numberOfRatings").html("(" + numberOfScores + ")");

            // Get scores average
            totalScore = 0;
            for (const [key, value] of Object.entries(scores)) {
                totalScore += (key * value);
            }

            averageScore = (totalScore / numberOfScores).toFixed(2);
            
            $("#ratingAverage").html(averageScore);
           

            const labels = Object.keys(scores)
            const data = Object.values(scores)

            // Ratings chart
            const ratingChart = $("#venueRatingChart");
            new Chart (ratingChart, {
                type: "doughnut",
                data: {
                    labels: labels,
                    datasets: [{
                        data: data
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Ratings"
                    },
                    plugins : {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            })
        })

    // Fetch catering price information
    fetch("cateringGrades.php")
        .then(res => res.json())
        .then(resData => {
                const cateringInfo = resData.filter(item => item.name == venueName)
                
                for (i = 0; i < cateringInfo.length; i++) {
                    // Put catering information in pricing list
                    $("#cateringPrices").append("<p id='cateringGradeInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");

                    // Cost calculator radio buttons
                    $("#cateringCostSelection").append(`<input type="radio" name="cateringCostRadio" value="${cateringInfo[i].grade}"><span> ${cateringInfo[i].grade} </span>`);
                    document.getElementById('cateringGrade').value = cateringInfo[i].grade;
                    


                }


        })

    
    // Fetch wedding dates data
    fetch("weddingDates.php") 
        .then(res => res.json())
        .then(resData => {
            const dates = resData.filter(item => item.name == venueName);

            // create months map
            let months = new Map();
            dates.forEach((date) => {
                const month = date.booking_date.substring(5,7)
                if (months.has(month)) {
                    months.set(month, months.get(month) + 1);
                } else {
                    months.set(month, 1);
                }
            })

            const labels = Array.from(months.keys());
            const data = Array.from(months.values());

            const popularChart = $("#venuePopularityChart");
            
            // Display venue popularity chart, using chart.js
            new Chart (popularChart, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        backgroundColor: "#786ABD",
                        data: data
                    }]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: false,
                        text: "Venue Popularity Chart"
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: "Number of Bookings"
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: "Month"
                            }
                        }
                    }
                }
            })


        })


    const datesButton = $("#availabilityButton");
    const popularButton = $("#popularityButton");
    const popularityModal = $("#popularityModal");
    const closePopularity = $("#popularityCloseButton");
    const popularityOverlay = $("#popularityOverlay");

    // datesButton event listener
    datesButton.on('click', () => {
        console.log('availability button clicked')
    })

    // toggle venue popularity modal
    popularButton.on('click', () => openModal(popularityModal)) 
    popularityOverlay.on('click', () => closeModal(popularityModal)) 
    closePopularity.on('click', () => closeModal(popularityModal)) 


    function openModal(modal) {
        if (modal == null) return
        modal.addClass('active')
        popularityOverlay.addClass('active')
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.removeClass('active')
        popularityOverlay.removeClass('active')
    }
        
})

