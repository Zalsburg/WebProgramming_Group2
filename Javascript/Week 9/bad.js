var button = document.getElementById("ourButton");
button.onmouseover = function() {mouseOver()};

function mouseOver() {
    button.disabled = true;
    button.style.color = "grey";
}

var link = document.getElementById("activateButton");
link.onclick = function() {linkClicked()};

function linkClicked() {
    button.disabled = false;
    button.style.color = "black";
}

console.log(button);