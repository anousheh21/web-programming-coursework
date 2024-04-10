$(function() {

    if (dropdownLeft != "" && dropdownRight != "") {
        if (dropdownRight == dropdownLeft) {
            $("#compareFormError").html("Please select two different venues");
        } else {
            fetch("reviewScores.php")
                .then(res => res.json())
                .then(resData => {
                    const reviewsLeft = resData.filter(item => item.name == dropdownLeft)
                    const reviewsRight = resData.filter(item => item.name == dropdownRight);

                   let scoresLeft = {};
                   reviewsLeft.forEach(review => {
                        const score = review.score;
                        if(scoresLeft[score] != undefined) {
                            scoresLeft[score] = scoresLeft[score] + 1;
                        } else {
                            scoresLeft[score] = 1;
                        }
                   })

                   let scoresRight = {};
                   reviewsRight.forEach(review => {
                        const score = review.score;
                        if(scoresRight[score] != undefined) {
                            scoresRight[score] = scoresRight[score] + 1;
                        } else {
                            scoresRight[score] = 1;
                        }
                   })

                   // const leftKeys = Object.keys(scores)
                   for (i=0; i<=10; i++) {
                    if(!(i in scoresLeft)) {
                        scoresLeft[i] = 0;
                    }

                    if(!(i in scoresRight)) {
                        scoresRight[i] = 0;
                    }
                   }

                   const labels = Object.keys(scoresLeft);
                   const datasetLeft = Object.values(scoresLeft);
                   const datasetRight = Object.values(scoresRight);

                   const radarChart = $("#ratingRadarChart");
                   new Chart (radarChart, {
                        type: "radar",
                        data: {
                            labels: labels,
                            datasets: [{
                                label: dropdownLeft,
                                data: datasetLeft,
                                fill: true,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgb(255, 99, 132)',
                                pointBackgroundColor: 'rgb(255, 99, 132)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(255, 99, 132)'
                            }, {
                                label: dropdownRight,
                                data: datasetRight,
                                fill: true,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgb(54, 162, 235)',
                                pointBackgroundColor: 'rgb(54, 162, 235)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(54, 162, 235)'
                            }]
                        },
                        options: {
                            title: {
                                display: true,
                                text: "Compare Ratings"
                            },
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                }
                            },
                            elements: {
                                line: {
                                    borderWidth: 3
                                }
                            }
                        }
                   })
                   


                })
                
            fetch("weddingDates.php")
                .then(res => res.json())
                .then(resData => {
                    const datesLeft = resData.filter(item => item.name == dropdownLeft)
                    const datesRight = resData.filter(item => item.name == dropdownRight)

                    let monthsLeft = new Map();
                    datesLeft.forEach(date => {
                        const month = date.booking_date.substring(5,7)
                        if (monthsLeft.has(month)) {
                            monthsLeft.set(month, monthsLeft.get(month) + 1);
                        } else {
                            monthsLeft.set(month, 1);
                        }
                    })

                    let monthsRight = new Map();
                    datesRight.forEach(date => {
                        const month = date.booking_date.substring(5,7)
                        if (monthsRight.has(month)) {
                            monthsRight.set(month, monthsRight.get(month) + 1);
                        } else {
                            monthsRight.set(month, 1);
                        }
                    })

                    const labels = Array.from(monthsLeft.keys());
                    const datasetLeft = Array.from(monthsLeft.values());
                    const datasetRight = Array.from(monthsRight.values());

                    const popularLineChart = $("#popularityCompareLine");

                    new Chart(popularLineChart, {
                        type: "scatter",
                        data: {
                            labels: labels,
                            datasets: [{
                                type: 'line',
                                label: dropdownLeft,
                                data: datasetLeft,
                                fill: false,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgb(255, 99, 132)',
                                pointBackgroundColor: 'rgb(255, 99, 132)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(255, 99, 132)'
                            }, {
                                type: 'line',
                                label: dropdownRight,
                                data: datasetRight,
                                fill: false,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgb(54, 162, 235)',
                                pointBackgroundColor: 'rgb(54, 162, 235)',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(54, 162, 235)'
                            }]
                        }, 
                        options: {
                            title: {
                                display: true,
                                text: "Compare Venue Popularity"
                            },
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    })

                })



        }
    }
})