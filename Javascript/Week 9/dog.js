var button = document.getElementById("ourButton");
button.onclick = ourButtonClicked;

function ourButtonClicked() {
    var number = document.getElementById("years").value * 7;
    alert("Yep, that's " + number + " dog years.");
    button.innerHTML = "Wolf, let's do it again!";
}

console.log(button);