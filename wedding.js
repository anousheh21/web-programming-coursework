$(function() {
    let partySizeInput = $("#party-size-input");
    let dateInput = $("#wedding-date-picker");
    const venues = $('.venue-card');

    // Party Size Filtering
    partySizeInput.on('input', () => {
        const partySize = parseInt(partySizeInput.val());
        venues.each((index, venue) => {
            const capacity = parseInt($(venue).find('.capacity').text());
            if (partySizeInput.val() === "") {
                $(venue).show();
            } else if (capacity >= partySize) {
                $(venue).show();
            } else {
                $(venue).hide();
            }
        });
    });

    // Date Filtering
    dateInput.on('input', () => {
        const weddingDate = dateInput.val();
        fetch("weddingDates.php")
            .then(res => res.json())
            .then(resData => {
                const filteredDates = resData.filter(item => item.booking_date === weddingDate);
                const filteredVenues = filteredDates.map(item => item.name);
                venues.each((index, venue) => {
                    const venueName = $(venue).find('#venue-name').text();
                    if (weddingDate === "") {
                        $(venue).show();
                    } else if (filteredVenues.includes(venueName)) {
                        $(venue).show();
                    } else {
                        $(venue).hide();
                    }
                })
            })
    })

    // Catering Grade Filtering
    

    
});



