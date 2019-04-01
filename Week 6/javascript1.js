var timeButton = document.getElementById("time");
timeButton.onclick = ButtonClicked;

function ButtonClicked() {
    document.getElementById("time-print").innerHTML = Date();
}

var counter = 0;

while (counter < 5) {
    console.log("Counting up... I'm at: " + counter);
    counter++;
}

if (counter = 5 ) {
    console.log("Woah mum I can count to 5!")
    counter++;
}

while (counter < 9 ) {
    console.log("Counting up... I'm at: " + counter);
    counter++;
}

if (counter = 9 ) {
    console.log("Look, mum, I can count to 9!");
    counter++;
}

var alertButton = document.getElementById("click-me");
alertButton.onclick = ClickedButton;

function ClickedButton() {
    alert("Boo!")
}
