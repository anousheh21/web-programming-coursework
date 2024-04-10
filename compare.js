$(function() {
    // console.log(dropdownLeft)
    // console.log(dropdownRight)
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
        }
    }
})