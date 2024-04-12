$(function() {
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {

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
                            data: data
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

           $("#showWeekdayPriceCompare").on('click', () => {
                labels = Array.from(weekdayPrices.keys());
                data = Array.from(weekdayPrices.values());
                titleText = "Weekday Price";
                myChart.destroy();
                myChart = new Chart (compareAllChart, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data
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
                                    text: "Weekday Price (£)"
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
                            data: data
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