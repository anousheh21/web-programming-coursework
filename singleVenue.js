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

            if (partySizeCost != "" && dateCost != "" && cateringGradeCost != "") {
                let partySize = parseInt(partySizeCost)
                let venueCapacity = parseInt(thisVenue.capacity)
                // let weddingDate = Date.parse(dateCost)
                let grade = parseInt(cateringGradeCost)
                let errorMessage = $("#costInvalidResponse")


                fetch("weddingDates.php")
                    .then(res => res.json())
                    .then(resData => {
                        const dates = resData.filter(item => item.name == venueName);

                        let venueBooked = false;
                        dates.forEach(date => {
                            if (date.booking_date == dateCost) {
                                venueBooked = true;
                                return;
                            }
                        })

                        if ((partySize > venueCapacity) && isEmpty(errorMessage)) {
                            errorMessage.html("Party size exceeds the capacity of the venue. Consider a different venue");
                        } else if ((partySize < 0) && isEmpty(errorMessage)) {
                            errorMessage.html("Invalid party size");
                        }

                        if ((venueBooked == true) && isEmpty(errorMessage)) {
                            errorMessage.html("Venue already has a booking on your wedding date. Consider a different date, or a different venue")
                        }

                        // If there are no errors in the user input, calculate the cost of the wedding
                        if (isEmpty(errorMessage)) {
                            const d = new Date(dateCost);
                            const day = d.getDay();
                            let venueHirePrice;

                            if (day == 6 || day == 0) {
                                venueHirePrice = parseInt(thisVenue.weekend_price)
                            } else {
                                venueHirePrice = parseInt(thisVenue.weekday_price)
                            }

                            fetch("cateringGrades.php")
                                .then(res => res.json())
                                .then(resData => {
                                    const cateringInfo = resData.filter(item => item.name == venueName)
                                    
                                    // get catering price for chosen grade
                                    let cateringCostSingle;
                                    cateringInfo.forEach(info => {
                                        if (parseInt(info.grade) == grade) {
                                            cateringCostSingle = parseInt(info.cost)
                                        }
                                    })
                                    
                                    let totalCateringCost = cateringCostSingle * partySize;
                                    // console.log(venueHirePrice)
                                    let totalCost = venueHirePrice + totalCateringCost;
                                    // console.log(totalCost);
                                    $("#calculatedCost").html("Total Wedding Cost: £" + totalCost);
                                })
                        }
                    })

                

                
            }


             // Get x axis tick values dynaamically
             const divisor = thisVenue.capacity / 10
             let partySizeDivisor = divisor
             console.log(divisor)

             // Get price per head in terms of venue hire price, excluding catering costs, for each divisor level
             let venueHirePerHeadWeekday = []
             let venueHirePerHeadWeekend = []
             let labels = []
             for(i=0; i<10; i++) {
                 venueHirePerHeadWeekday.push((thisVenue.weekday_price / partySizeDivisor).toFixed(2))
                 venueHirePerHeadWeekend.push((thisVenue.weekend_price / partySizeDivisor).toFixed(2))
                 labels.push(partySizeDivisor)
                 partySizeDivisor += divisor
                 
                 // console.log(partySizeDivisor)
             }

            //  console.log(venueHirePerHeadWeekday)
            //  console.log(venueHirePerHeadWeekend)
            //  console.log(labels)

            const pricePerHeadChart = $("#venuePopularityChart");

            new Chart (pricePerHeadChart, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [{
                        type: "line",
                        label: "Weekday Price Per Head",
                        data: venueHirePerHeadWeekday,
                        fill: false,
                        borderColor: "#465151",
                        backgroundColor: "#465151"

                    }, 
                    {
                        type: "line",
                        label: "Weekend Price Per Head",
                        data: venueHirePerHeadWeekend,
                        fill: false,
                        borderColor: "#af6c5a",
                        backgroundColor: "#af6c5a"
                    }
                ]},
                options: {
                    title: {
                        display: false
                    },
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: "Price Per Head (£)"
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: "Party Size"
                            }
                        }
                    }
                }
            })

            
            fetch("cateringGrades.php")
                .then(res => res.json())
                .then(resData => {
                    const cateringInfo = resData.filter(item => item.name == venueName)
                    // console.log(cateringInfo)

                   

                    // cateringInfo.forEach(thisGradeInfo => {
                    //     console.log(thisGradeInfo.grade + ": £" + thisGradeInfo.cost)
                    // })


                })

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
           
            

            for (i=0; i<=10; i++) {
                if(!(i in scores)) {
                    scores[i] = 0;
                }
            }

            // console.log(scores);

            // // reverse keys
            // let orderedKeys = Object.keys(scores);
            // let reversedKeys = orderedKeys.reverse();

            // // reverse values
            // let orderedValues = Object.values(scores);
            // let reversedValues = orderedValues.reverse();

            // // put them into a dictionary that is the reverse order of the scores dictionary
            // var reversedScores = {};
            // reversedKeys.forEach((reversedKey, i) => reversedScores[reversedKey] = reversedValues[i]);
            // console.log(reversedScores)

             // Create scores map
             let scoresMap = new Map();
             reviews.forEach(review => {
                 const score = review.score;
                 if (scoresMap.has(score)) {
                     scoresMap.set(score, scoresMap.get(score) + 1)
                 } else {
                     scoresMap.set(score, 1);
                 }
             })

             for (i=0; i<=10; i++) {
                if (!scoresMap.has(i.toString())) {
                    scoresMap.set(i, 0)
                }
            }


             // Sort map by reverse order of its keys
             scoresMap = new Map([...scoresMap.entries()].sort((a, b) => b[0] - a[0]));

        


            const labels = Array.from(scoresMap.keys());
            const data = Array.from(scoresMap.values());

            // Ratings chart
            const ratingChart = $("#venueRatingChart");
            new Chart (ratingChart, {
                type: "bar",
                // ticks: {
                //     reverse: true
                // },
                data: {
                    labels: labels,
                    datasets: [{
                        axis: 'y',
                        data: data,
                        backgroundColor: "#ffbf00"
                        
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Ratings"
                    },
                    plugins : {
                        legend: {
                            display: false
                        }
                    },
                    indexAxis: 'y',
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: "Rating"
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: "Number of Ratings"
                            }
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


                        //console.log(cateringGradeCost)
                      if (cateringGradeCost !== "") {
               
                $("input[name='cateringCostRadio']").each(function() {
                    if ($(this).val() === cateringGradeCost) {
                        $(this).prop("checked", true);
                    }
                });
            }
                    


                }


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

    function isEmpty( el ){
        return !$.trim(el.html())
    }
        
})

