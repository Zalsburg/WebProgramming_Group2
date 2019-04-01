var countDown;
var count;

function updateTimes() {

    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / (100 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

function resetCountDown() {
    countDown = new Date().getTime() + 3600000;
    updateTimes();
    var count = setInterval( updateTimes, 1000);
}

document.getElementById("days").innerHTML = 0;
document.getElementById("hours").innerHTML = 0;
document.getElementById("minutes").innerHTML = 0;
document.getElementById("seconds").innerHTML = 0;

var startTimer = document.getElementById("start");
startTimer.onclick = resetCountDown;