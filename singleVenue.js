$(function() {
   
    // Fetch JSON from venueInfo.php
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            const venueInfo = resData.filter(item => item.name == venueName);
            const thisVenue = venueInfo[0];

            let phoneNumber;
            let emailAddress;
            let venueDescription;

            // Display correct image corresponding to venue selected
            if (thisVenue.name == "Central Plaza") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageCentralPlaza.png' alt='Central Plaza'>")
                phoneNumber = '01234 567890';
                emailAddress = 'centralplaza'
                venueDescription = "The Central Plaza Hotel in London is the epitome of both elegance and luxury in the heart of the city of London. With both iconic architecture along with a rich history, this hotel stands as a symbol of sophistication and charm. It boasts lavish accommodation for party guests, exquisite dining options, and impeccable service, offering guests an unforgettable experience. Conveniently located near major London attractions and transportation hubs, the Central Plaza Hotel is the perfect retreat for both leisure and business travelers seeking comfort and refinement in the bustling metropolis of London."
            } else if (thisVenue.name == "Pacific Towers Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imagePacificTowers.png' alt='Pacific Towers Hotel'>")
                phoneNumber = '02345 678901';
                emailAddress = 'pacifictowers'
                venueDescription = "The Pacific Towers Hotel in Birmingham is a modern hotel set amidst the vibrant cityscape. Offering a mix of contemporary design and welcoming hospitality, this hotel promises a memorable stay for every guest. It's sleek and spacious accommodations, state-of-the-art facilities, and personalized service caters to the needs of brides and groomns to be. It is situated in a prime location, the Pacific Towers Hotel provides easy access to Birmingham's many  attractions, shopping destinations, and cultural hotspots. It'a large function rooms can accomodate different wedding parties with flexible decor variations and lighting."
            } else if (thisVenue.name == "Sky Center Complex") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSkyCenterComplex.png' alt='Sky Center Complex'>")
                phoneNumber = '03456 789012'
                emailAddress = 'skycenter'
                venueDescription = "The Sky Centre Complex in Loughborough stands tall in the heart of the town. Its sleek architectural design and cutting-edge facilities offer a dynamic hub for business, leisure, and community activities. Boasting a mix of retail spaces, office suites, entertainment venues, and wedding dining and reception options, it caters to the diverse needs of residents and visitors alike. Situated in a strategic location, the Sky Centre Complex serves as a focal point for wedding gatherings, cultural events, and commercial activities."
            } else if (thisVenue.name == "Sea View Tavern") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSeaView.png' alt='Sea View Tavern'>")
                phoneNumber = '04567 890123'
                emailAddress = 'seaview'
                venueDescription = "The Sea View Tavern in Nottingham is a charming retreat nestled in the heart of the city. Evoking the ambiance of a seaside escape, this cozy tavern offers a warm and welcoming atmosphere for patrons to unwind and indulge. With its nautical-themed decor, friendly staff, and laid-back vibe, it's the perfect spot to enjoy a refreshing pint or a hearty meal with friends and family or can cater for those special events like an intimate wedding reception. From classic fish and chips to flavorful seafood dishes, the menu boasts a variety of culinary delights to satisfy every palate. "
            } else if (thisVenue.name == "Ashby Castle") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageAshbyCastle.png' alt='Ashby Castle'>")
                phoneNumber = '05678 901234'
                emailAddress = 'ashbycastle'
                venueDescription = "Ashby Castle is a historic hotel situated in the heart of Manchester, steeped in centuries of rich history and architectural grandeur. Originally constructed in the 15th century, the castle served as a strategic stronghold during periods of conflict and as a lavish residence for nobility. Today, its majestic ruins stand as a testament to its former glory, offering visitors a captivating glimpse into the past. With its imposing stone walls, towering turrets, and picturesque surroundings, Ashby Castle exudes a sense of timeless elegance and intrigue for your special day. Ashby Castle offers a captivating journey through Manchester's storied past."
            } else if (thisVenue.name == "Fawlty Towers") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageFawltyTowers.png' alt='Fawlty Towers'>")
                phoneNumber = '06789 012345'
                emailAddress = 'fawltytowers'
                venueDescription = "Fawlty Towers in York is a delightful homage to the iconic British institution. It offers guests a unique and whimsical experience inspired by the historical show. With its quirky decor, eccentric charm, and impeccable attention to detail, the hotel captures the spirit of the original Fawlty Towers with humor and warmth. From the moment you step through the door, you'll be greeted by the familiar antics of Basil, Sybil, and Manuel, brought to life by the dedicated staff who embody the essence of hospitality with a comedic twist. Each room is tastefully decorated with nods to memorable moments from the series, ensuring a truly immersive stay for fans and newcomers alike. Nestled in the heart of York, Fawlty Towers invites guests to embrace the nostalgia of classic British comedy while enjoying the comforts of modern accommodation and genuine hospitality."
            } else if (thisVenue.name == "Hilltop Mansion") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHilltopMansion.png' alt='Hilltop Mansion'>")
                phoneNumber = '07890 123456'
                emailAddress = 'hilltopmansion'
                venueDescription = "Hilltop Mansion in Liverpool stands as a beacon of opulence and refinement, overlooking the cityscape with timeless elegance. This grand estate, nestled atop a picturesque hill, offers a majestic retreat for those seeking luxury and tranquility. With its sprawling grounds, manicured gardens, and panoramic views, it exudes a sense of exclusivity and prestige. The mansion itself boasts stunning architecture, blending classic and contemporary elements to create a truly impressive residence. Inside, lavish interiors adorned with exquisite furnishings and ornate details evoke a sense of grandeur and sophistication. Whether hosting lavish events or enjoying quiet moments of relaxation, guests at Hilltop Mansion are enveloped in luxury at every turn. With its prime location in Liverpool, this prestigious estate offers a sanctuary of unparalleled beauty and indulgence in the heart of the city."
            } else if (thisVenue.name == "Haslegrave Hotel") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageHaslegraveHotel.png' alt='Haslegrave Hotel'>")
                phoneNumber = '08901 234567'
                emailAddress = 'haslegrave'
                venueDescription = "Nestled in the heart of Bristol's enchanting cultural landscape, Haslegrave Hotel emerges as a quintessential destination for unforgettable wedding celebrations. Beyond its grand façade lies a sanctuary of romance and elegance, where dreams take shape and love stories unfold amidst timeless splendor. Haslegrave Hotel beckons couples to embark on a journey of lifelong love in an atmosphere of refined charm and impeccable service. From the moment you step through its doors, you're enveloped in an aura of enchantment, where every detail is meticulously crafted to exceed your wildest expectations.";
            } else if (thisVenue.name == "Forest Inn") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageForestInn.png' alt='Forest Inn'>")
                phoneNumber = '09012 345678'
                emailAddress = 'forestinn'
                venueDescription = "The Forrest Inn in Brighton is a cozy and welcoming gastropub nestled within the picturesque seaside city. With its rustic charm and relaxed ambiance, it serves as a beloved gathering spot for locals and visitors alike. The inn exudes warmth and character, with exposed wooden beams, crackling fireplaces, and inviting nooks perfect for intimate conversations or larger gatherings. Its menu features a delightful array of traditional pub fare alongside creative culinary offerings, all crafted with locally sourced ingredients and expertly prepared. Whether you're craving a hearty Sunday roast, a refreshing pint of local ale, or simply a cozy spot to unwind after a day of exploring Brighton's vibrant streets, the Forrest Inn promises a memorable and satisfying experience for all who pass through its doors."
            } else if (thisVenue.name == "Southwestern Estate") {
                $("#singleVenueImage").html("<img class='singleMainImage' src='imageSouthwestern.png' alt='Southwestern Estate'>")
                phoneNumber = '09123 456789'
                emailAddress = 'southwestern'
                venueDescription = "Nestled in the heart of London's esteemed Marylebone district, the Southwestern Estate emerges as an idyllic haven for couples seeking the perfect setting for their dream wedding. Set amidst lush gardens and elegant architecture, this prestigious enclave offers a romantic backdrop that exudes timeless charm and sophistication. The Southwestern Estate transforms into a picturesque wedding venue, where love stories are celebrated amidst the grandeur of stately mansions and tree-lined avenues. From intimate ceremonies in charming garden alcoves to lavish receptions in opulent ballrooms, every corner of the estate is imbued with an air of romance and exclusivity."
            } else {
                $("#singleVenueImage").html("<p>image error</p>")
            }

            $("#phoneNumber").html("Phone: " + phoneNumber);
            $("#emailAddress").html("Email: book@" + emailAddress + ".com")
            $("#singleVenueDescription").html(venueDescription)

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
                let errorMessage2 = $("#costInvalidResponse2")


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
                            errorMessage.html("Party size exceeds the capacity of the venue.");
                            errorMessage2.html("Consider a different venue.")
                        } else if ((partySize < 0) && isEmpty(errorMessage)) {
                            errorMessage.html("Invalid party size");
                        }

                        if ((venueBooked == true) && isEmpty(errorMessage)) {
                            errorMessage.html("Venue already has a booking on your wedding date.")
                            errorMessage2.html("Consider a different date or venue.")
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
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Price Per Head Graph"
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

    // let cateringGradeCost = ""
    // Fetch catering price information
    fetch("cateringGrades.php")
        .then(res => res.json())
        .then(resData => {
                const cateringInfo = resData.filter(item => item.name == venueName)
                
                for (i = 0; i < cateringInfo.length; i++) {
                    // Put catering information in pricing list
                    $("#cateringPrices").append("<p id='cateringGradeInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");

                    // Cost calculator radio buttons
                    $("#cateringCostSelection").append(`<input type="radio" id="cateringCostRadio"  name="cateringCostRadio" value="${cateringInfo[i].grade}"><span> ${cateringInfo[i].grade} </span>`);
                    document.getElementById('cateringGrade').value = cateringInfo[i].grade;


                        //console.log(cateringGradeCost)
            //           if (cateringGradeCost !== "") {
               
            //     $("input[name='cateringCostRadio']").each(function() {
            //         if ($(this).val() === cateringGradeCost) {
            //             $(this).prop("checked", true);
            //         }
            //     });
            // }
                    


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

