$(function() {
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            // COMPARE 2 VENUES
            
            $("#dropdownLeft").on('change', function() {
                let dropdownLeft = $(this).val();

                if ((dropdownLeft != "") && (dropdownLeft != "noSelectionLeft")) {
                    $(".compareGraphMargin").addClass("compareWithColumn")
                    resData.forEach(venue => {
                        if (dropdownLeft == venue.name) {
                            $("#compareAllGraphStats").removeClass("compareGraphMargin")
                            getCorrespondingImage(dropdownLeft, "#compareImgPlaceholderLeft", "compareImg")
                            $("#comparisonCapacityLeft").html(`Capacity: ${venue.capacity}`)
                            $("#comparisonWeekdayLeft").html(`Weekday Price: £${venue.weekday_price}`)
                            $("#comparisonWeekendLeft").html(`Weekend Price: £${venue.weekend_price}`)
                            $("#comparisonLicensedLeft").html(`Licensed: ${venue.licensed == 1 ? "Yes" : "No"}`)

                             // location information
                             $("#comparisonLocationLeft").html(`Location: ${findLocation(dropdownLeft)}`)

                            // put rating here
                            fetch("reviewScores.php")
                            .then(res => res.json())
                            .then(resData => {
                                const reviews = resData.filter(item => item.name == dropdownLeft)

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

                                numberOfScores = 0;
                                for (const [key, value] of Object.entries(scores)) {
                                    numberOfScores += value;
                                }

                                // $(venue).find("#browseNumberOfRatings").html("(" + numberOfScores + ")");

                                totalScore = 0;
                                for (const [key, value] of Object.entries(scores)) {
                                    totalScore += (key * value);
                                }

                                averageScore = (totalScore / numberOfScores).toFixed(2);

                                $("#comparisonRatingLeft").html(`Rating: ${averageScore}/10`);

                            })

                           


                            $("#comparisonCateringLeft").html("");
                            // put catering information
                            fetch("cateringGrades.php")
                                .then(res => res.json())
                                .then(resData => {
                                    const cateringInfo = resData.filter(item => item.name == dropdownLeft)
                                    

                                    for (let grade = 1; grade <= 5; grade++) {
                                        const cateringItem = cateringInfo.find(item => item.grade === grade.toString());
                                        if (cateringItem) {
                                            $("#comparisonCateringLeft").append("<p class='compCaterInfo'>Grade " + cateringItem.grade + ": £" + cateringItem.cost + "</p>");
                                        } else {
                                            $("#comparisonCateringLeft").append("<p class='compNullCaterInfo'>-</p>");
                                        }
                                    }
                                })
                        }
                    })
                }
               
            });

            $("#dropdownRight").on('change', function() {
                let dropdownRight = $(this).val();

                if ((dropdownRight != "") && (dropdownRight != "noSelectionRight")) {
                    $(".compareGraphMargin").addClass("compareWithColumn")
                    resData.forEach(venue => {
                        if (dropdownRight == venue.name) {
                            $("#compareAllGraphStats").removeClass("compareGraphMargin")
                            getCorrespondingImage(dropdownRight, "#compareImgPlaceholderRight", "compareImg")
                    $("#comparisonCapacityRight").html(`Capacity: ${venue.capacity}`)
                    $("#comparisonWeekdayRight").html(`Weekday Price: £${venue.weekday_price}`)
                    $("#comparisonWeekendRight").html(`Weekend Price: £${venue.weekend_price}`)
                    $("#comparisonLicensedRight").html(`Licensed: ${venue.licensed == 1 ? "Yes" : "No"}`)

                     // location information
                     $("#comparisonLocationRight").html(`Location: ${findLocation(dropdownRight)}`)
                   

                    // put rating here
                    fetch("reviewScores.php")
                            .then(res => res.json())
                            .then(resData => {
                                const reviews = resData.filter(item => item.name == dropdownRight)

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

                                numberOfScores = 0;
                                for (const [key, value] of Object.entries(scores)) {
                                    numberOfScores += value;
                                }

                                // $(venue).find("#browseNumberOfRatings").html("(" + numberOfScores + ")");

                                totalScore = 0;
                                for (const [key, value] of Object.entries(scores)) {
                                    totalScore += (key * value);
                                }

                                averageScore = (totalScore / numberOfScores).toFixed(2);

                                $("#comparisonRatingRight").html(`Rating: ${averageScore}/10`);

                            })

                    $("#comparisonCateringRight").html("");
                    // put catering information
                    fetch("cateringGrades.php")
                        .then(res => res.json())
                        .then(resData => {
                            const cateringInfo = resData.filter(item => item.name == dropdownRight)
                            

                            // for (i = 0; i < cateringInfo.length; i++) {

                            //     for (let i = 1; i <= 5; i++) {
                            //         if (cateringInfo.some(item => item.grade === i.toString())) {
                            //             $("#comparisonCateringRight").append("<p class='compCaterInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");
                            //         } else {
                            //             $("#comparisonCateringRight").append("<p class='compNullCaterInfo'>-</p>")
                            //         }
                            //     }
                              
                            // }

                            for (let grade = 1; grade <= 5; grade++) {
                                const cateringItem = cateringInfo.find(item => item.grade === grade.toString());
                                if (cateringItem) {
                                    $("#comparisonCateringRight").append("<p class='compCaterInfo'>Grade " + cateringItem.grade + ": £" + cateringItem.cost + "</p>");
                                } else {
                                    $("#comparisonCateringRight").append("<p class='compNullCaterInfo'>-</p>");
                                }
                            }
                    

                            // for (let i = 1; i <= 5; i++) {
                            //     if (cateringInfo.some(item => item.grade === i.toString())) {
                            //         console.log(i + " is a catering grade");
                            //     } else {
                            //         console.log(i + ' is not a catering grade');
                            //     }
                            // }
                        })
                        }
                    })
                }
                
            });

            
        
            // if ((dropdownLeft != "noSelectionLeft") && (dropdownLeft != "") && (dropdownRight != "noSelectionRight") && (dropdownRight !="")) {
            //     console.log(dropdownLeft)
            //     console.log(dropdownRight)
            // }

            // ALL VENUE GRAPHS
            // Set capacities map
            let capacities = new Map();
            resData.forEach(venue => {
                capacities.set(venue.name, venue.capacity)
            })

           // Set weekday price map
           let weekdayPrices = new Map();
           resData.forEach(venue => {
                weekdayPrices.set(venue.name, venue.weekday_price)
           })

           // Set weekend price map
           let weekendPrices = new Map();
           resData.forEach(venue => {
                weekendPrices.set(venue.name, venue.weekend_price)
           })

           const compareAllChart = $("#compareAllChart");
           let labels, data, titleText;
           let myChart = new Chart();
           $("#showCapacityCompare").on('click', () => {
                $("#compareChartTitle").html("Venue Capacity Comparison")
                labels = Array.from(capacities.keys());
                data = Array.from(capacities.values());
                titleText = "Capacity";
                myChart.destroy();
                myChart = new Chart (compareAllChart, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            borderColor: 'rgba(188, 108, 37, 1)',
                            backgroundColor: 'rgba(188, 108, 37, 0.5)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        legend: {display: false},
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: titleText
                        },
                        scales: {
                            y: {
                                title: {
                                    display: true,
                                    text: titleText
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: "Venue Name"
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
               })
           })

           $("#showVenueDayPriceCompare").on('click', () => {
                $("#compareChartTitle").html("Weekday & Weekend Price Comparison")
                labels = Array.from(weekdayPrices.keys());
                dataWeekday = Array.from(weekdayPrices.values());
                dataWeekend = Array.from(weekendPrices.values());
                titleText = "Compare Weekend and Weekday Prices";
                myChart.destroy();
                myChart = new Chart (compareAllChart, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: "Weekday Price",
                            data: dataWeekday,
                            borderColor: 'rgba(188, 108, 37, 1)',
                            backgroundColor: 'rgba(188, 108, 37, 0.5)',
                            borderWidth: 1
                        }, {
                            label: "Weekend Price",
                            data: dataWeekend,
                            borderColor: 'rgba(147, 152, 124, 1)',
                            backgroundColor: 'rgba(147, 152, 124, 0.5)',
                            borderWidth: 1
                        }
                    ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: "Weekday and Weekend Price Comparison"
                        },
                        scales: {
                            y: {
                                title: {
                                    display: true,
                                    text: "Price (£)"
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: "Venue Name"
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top'
                            }
                        }
                    }
               })
           })

           $("#showWeekendPriceCompare").on('click', () => {
                labels = Array.from(weekendPrices.keys());
                data = Array.from(weekendPrices.values());
                titleText = "Weekend Price";
                myChart.destroy();
                myChart = new Chart (compareAllChart, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            borderColor: 'rgba(188, 108, 37, 1)',
                            backgroundColor: 'rgba(188, 108, 37, 0.5)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {display: false},
                        title: {
                            display: true,
                            text: titleText
                        },
                        scales: {
                            y: {
                                title: {
                                    display: true,
                                    text: "Weekend Price (£)"
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: "Venue Name"
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
               })
           })

        })
})

// Function to get correct image
const getCorrespondingImage = (venue, imagePlaceholder, imageClass) => {
    if (venue == "Central Plaza") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageCentralPlaza.png" alt="Central Plaza">`);
        console.log(`<img class="${imageClass}" src="imageCentralPlaza.png" alt="Central Plaza">`)
    } else if (venue == "Pacific Towers Hotel") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imagePacificTowers.png" alt="Pacific Towers Hotel">`);
    } else if (venue == "Sky Center Complex") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageSkyCenterComplex.png" alt="Sky Center Complex">`);
    } else if (venue == "Sea View Tavern") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageSeaView.png" alt="Sea View Tavern">`);
    } else if (venue == "Ashby Castle") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageAshbyCastle.png" alt="Ashby Castle">`);
    } else if (venue == "Fawlty Towers") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageFawltyTowers.png" alt="Fawlty Towers">`);
    } else if (venue == "Hilltop Mansion") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageHilltopMansion.png" alt="Hilltop Mansion">`);
    } else if (venue == "Haslegrave Hotel") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageHaslegraveHotel.png" alt="Haslegrave Hotel">`);
    } else if (venue == "Forest Inn") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageForestInn.png" alt="Forest Inn">`);
    } else if (venue == "Southwestern Estate") {
        $(imagePlaceholder).html(`<img class="${imageClass}" src="imageSouthwestern.png" alt="Southwestern Estate">`);
    } else {
        $(imagePlaceholder).html("<p>image error</p>");
    }
}

// Function to calculate location
const findLocation = (venue) => {
    if (venue == "Ashby Castle" || venue == "Fawlty Towers" || venue == "Hilltop Mansion") {
        return "North England"
    } else if (venue == "Pacific Towers Hotel" || venue == "Sky Center Complex" || venue == "Sea View Tavern") {
        return "Midlands"
    } else if (venue == "Central Plaza" || venue == "Southwestern Estate") {
        return "London"
    } else if (venue == "Haslegrave Hotel" || venue == "Forst Inn") {
        return "South England"
    } else {
        return "Error Finding Location"
    }
}
