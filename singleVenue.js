$(function() {
    fetch("venueInfo.php")
        .then(res => res.json())
        .then(resData => {
            console.log(resData);
        })
})