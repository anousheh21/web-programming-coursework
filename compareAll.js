$(function() {
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            // COMPARE 2 VENUES
            
            $("#dropdownLeft").on('change', function() {
                let dropdownLeft = $(this).val();

                if ((dropdownLeft != "") && (dropdownLeft != "noSelectionLeft")) {
                    resData.forEach(venue => {
                        if (dropdownLeft == venue.name) {
                            getCorrespondingImage(dropdownLeft, "#compareImgPlaceholderLeft", "compareImg")
                            $("#comparisonCapacityLeft").html(`Capacity: ${venue.capacity}`)
                            $("#comparisonWeekdayLeft").html(`Weekday Price: £${venue.weekday_price}`)
                            $("#comparisonWeekendLeft").html(`Weekend Price: £${venue.weekend_price}`)
                            $("#comparisonLicensedLeft").html(`Licensed: ${venue.licensed == 1 ? "Yes" : "No"}`)

                            // put rating here

                            $("#comparisonCateringLeft").html("");
                            // put catering information
                            fetch("cateringGrades.php")
                                .then(res => res.json())
                                .then(resData => {
                                    const cateringInfo = resData.filter(item => item.name == dropdownLeft)
                                    

                                    for (i = 0; i < cateringInfo.length; i++) {
                                        $("#comparisonCateringLeft").append("<p class='compCaterInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");
                                    }
                                })
                        }
                    })
                }
               
            });

            $("#dropdownRight").on('change', function() {
                let dropdownRight = $(this).val();

                if ((dropdownRight != "") && (dropdownRight != "noSelectionRight")) {
                    resData.forEach(venue => {
                        if (dropdownRight == venue.name) {
                            getCorrespondingImage(dropdownRight, "#compareImgPlaceholderRight", "compareImg")
                    $("#comparisonCapacityRight").html(`Capacity: ${venue.capacity}`)
                    $("#comparisonWeekdayRight").html(`Weekday Price: £${venue.weekday_price}`)
                    $("#comparisonWeekendRight").html(`Weekend Price: £${venue.weekend_price}`)
                    $("#comparisonLicensedRight").html(`Licensed: ${venue.licensed == 1 ? "Yes" : "No"}`)
                   

                    // put rating here

                    $("#comparisonCateringRight").html("");
                    // put catering information
                    fetch("cateringGrades.php")
                        .then(res => res.json())
                        .then(resData => {
                            const cateringInfo = resData.filter(item => item.name == dropdownRight)
                            

                            for (i = 0; i < cateringInfo.length; i++) {
                                $("#comparisonCateringRight").append("<p class='compCaterInfo'>Grade " + cateringInfo[i].grade + ": £" + cateringInfo[i].cost + "</p>");
                            }
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