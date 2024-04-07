$(function() {
    const venues = $('.venue-card');
    let partySizeInput = $("#party-size-input");
    let dateInput = $("#wedding-date-picker");
    
    let grade1Checkbox = $("#grade-1");
    let grade2Checkbox = $("#grade-2");
    let grade3Checkbox = $("#grade-3");
    let grade4Checkbox = $("#grade-4");
    let grade5Checkbox = $("#grade-5");

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
    let checkboxFilter = () => {
        fetch("cateringGrades.php")
            .then(res => res.json())
            .then(resData => {
                venues.each((index, venue) => {
                    const venueName = $(venue).find('#venue-name').text();
                    let shouldBeVisible = true;
                    if (grade1Checkbox.prop("checked")) {
                        const grade1Venues = resData.filter(item => item.grade == 1)
                        const filteredGrades = grade1Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade2Checkbox.prop("checked")) {
                        const grade2Venues = resData.filter(item => item.grade == 2) 
                        const filteredGrades = grade2Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade3Checkbox.prop("checked")) {
                        const grade3Venues = resData.filter(item => item.grade == 3) 
                        const filteredGrades = grade3Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade4Checkbox.prop("checked")) {
                        const grade4Venues = resData.filter(item => item.grade == 4) 
                        const filteredGrades = grade4Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }

                    if (grade5Checkbox.prop("checked")) {
                        const grade5Venues = resData.filter(item => item.grade == 5) 
                        const filteredGrades = grade5Venues.map(item => item.name);
                        if (!filteredGrades.includes(venueName)) {
                            shouldBeVisible = false;
                        }
                    }
                    
                    if (shouldBeVisible) {
                        $(venue).show();
                    } else {
                        $(venue).hide();
                    }
                });
            });
    }
    
    grade1Checkbox.on('input', checkboxFilter)
    grade2Checkbox.on('input', checkboxFilter)
    grade3Checkbox.on('input', checkboxFilter)
    grade4Checkbox.on('input', checkboxFilter)
    grade5Checkbox.on('input', checkboxFilter)
});



