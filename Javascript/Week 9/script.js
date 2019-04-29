var button = document.getElementById("ourButton");
button.onclick = ourButtonClicked;

function ourButtonClicked() {
    alert("You are awesome!");
    button.innerHTML = "Hell Yea, let's do it again!";
}

console.log(button);