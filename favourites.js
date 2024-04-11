$(function() {
    const venues = $('.venue-card');


    let favourites = JSON.parse(sessionStorage.getItem('favourites')) || [];

    venues.each((index, venue) => {
        const eachVenue = $(venue).find('#venue-name').text();
        // console.log(eachVenue);

        if (favourites.includes(eachVenue)) {
           // const heartContainer = $(this).parent(); 
            $(venue).find('.heart').toggleClass('hidden');
        }
    })

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

})