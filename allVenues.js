$(function() {
    const venues = $('.venue-card');
    let partySizeInput = $("#party-size-input");
    let dateInput = $("#wedding-date-picker");
    
    let grade1Checkbox = $("#grade-1");
    let grade2Checkbox = $("#grade-2");
    let grade3Checkbox = $("#grade-3");
    let grade4Checkbox = $("#grade-4");
    let grade5Checkbox = $("#grade-5");

    let favourites = JSON.parse(sessionStorage.getItem('favourites')) || [];

    // Filter results if accessed through form submission from wedding.php
    if (homeSearchDate != "") {
        venues.each((index, venue) => {
            const venueName = $(venue).find("#venue-name").text();
            let shouldBeVisible = true;

            fetch("weddingDates.php")
                .then(res => res.json())
                .then(resData => {
                    const filteredDates = resData.filter(item => item.booking_date === homeSearchDate);
                    const filteredVenues = filteredDates.map(item => item.name);
                    if (!filteredVenues.includes(venueName)) {
                        // shouldBeVisible = false;
                        $(venue).hide();
                    }

                    // if(shouldBeVisible) {
                    //     $(venue).show();
                    // } else {
                    //     $(venue).hide();
                    // }
                })

            
        })
    }

    venues.each((index, venue) => {
        const eachVenue = $(venue).find('#venue-name').text();
        // console.log(eachVenue);

        if (favourites.includes(eachVenue)) {
           // const heartContainer = $(this).parent(); 
            $(venue).find('.heart').toggleClass('hidden');
        }
    })

    // Apply all filters
    let applyFilters = () => {
        const partySize = parseInt(partySizeInput.val());
        const weddingDate = dateInput.val();
        
        // Fetch catering grades data
        fetch("cateringGrades.php")
            .then(res => res.json())
            .then(resData => {
                venues.each((index, venue) => {
                    const venueName = $(venue).find('#venue-name').text();
                    let shouldBeVisible = true;
                    
                    // Apply catering grade filter
                    if (grade1Checkbox.prop("checked")) {
                        const grade1Venues = resData.filter(item => item.grade == 1);
                        const filteredGrades = grade1Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade2Checkbox.prop("checked")) {
                        const grade2Venues = resData.filter(item => item.grade == 2);
                        const filteredGrades = grade2Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade3Checkbox.prop("checked")) {
                        const grade3Venues = resData.filter(item => item.grade == 3);
                        const filteredGrades = grade3Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade4Checkbox.prop("checked")) {
                        const grade4Venues = resData.filter(item => item.grade == 4);
                        const filteredGrades = grade4Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade5Checkbox.prop("checked")) {
                        const grade5Venues = resData.filter(item => item.grade == 5);
                        const filteredGrades = grade5Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }
                    
                    // Apply party size filter
                    const capacity = parseInt($(venue).find('.capacity').text());
                    if (!isNaN(partySize) && capacity < partySize) {
                        shouldBeVisible = false;
                    }
                    
                    // Apply date filter
                    if (weddingDate !== "") {
                        fetch("weddingDates.php")
                            .then(res => res.json())
                            .then(resData => {
                                const filteredDates = resData.filter(item => item.booking_date === weddingDate);
                                const filteredVenues = filteredDates.map(item => item.name);
                                if (!filteredVenues.includes(venueName)) {
                                    shouldBeVisible = false;
                                }
                                
                                // Toggle visibility based on combined filters
                                if (shouldBeVisible) {
                                    $(venue).show();
                                } else {
                                    $(venue).hide();
                                }
                            });
                    } else {
                        // Toggle visibility based on combined filters
                        if (shouldBeVisible) {
                            $(venue).show();
                        } else {
                            $(venue).hide();
                        }
                    }
                });

                
            });
    };
    
  
    grade1Checkbox.on('input', applyFilters);
    grade2Checkbox.on('input', applyFilters);
    grade3Checkbox.on('input', applyFilters);
    grade4Checkbox.on('input', applyFilters);
    grade5Checkbox.on('input', applyFilters);
    
   
    partySizeInput.on('input', applyFilters);
    dateInput.on('input', applyFilters);

    // Fetch rating information
    fetch("reviewScores.php")
        .then(res => res.json())
        .then(resData => {
            venues.each((index, venue) => {
                const venueName = $(venue).find('#venue-name').text();
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

                numberOfScores = 0;
                for (const [key, value] of Object.entries(scores)) {
                    numberOfScores += value;
                }

                $(venue).find("#browseNumberOfRatings").html("(" + numberOfScores + ")");

                totalScore = 0;
                for (const [key, value] of Object.entries(scores)) {
                    totalScore += (key * value);
                }

                averageScore = (totalScore / numberOfScores).toFixed(2);

                $(venue).find("#browseRatingAverage").html(averageScore);
            })
        })

        // Manage favourite locations
        $(document).on('click', '.heartsvg', function() {
            const heartContainer = $(this).parent(); // Get the container of the hearts
            const venueName = heartContainer.find('#venue-name').text();

            

            

            let index = favourites.indexOf(venueName)

            if(index == -1) {
                favourites.push(venueName);
            } else {
                favourites.splice(index, 1)
            }

            sessionStorage.setItem('favourites', JSON.stringify(favourites))

            

            heartContainer.find('.heart').toggleClass('hidden'); // Toggle the visibility of all hearts within the container

            if (heartContainer.find("#heartBorder").hasClass('hidden')) {
                // add to favourites
                console.log(venueName + " has been added to favourites")
                //sessionStorage.setItem(venueName, venueName)

            } else {
               // remove from favourites
               console.log(venueName + " has been removed from favourites")
               //sessionStorage.removeItem(venueName)
            }

            //console.log(Object.keys(sessionStorage))
            console.log(favourites)
        });
});


