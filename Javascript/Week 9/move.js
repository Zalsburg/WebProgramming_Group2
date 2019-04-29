var button = document.getElementById("ourButton");
button.onmouseover = onButtonMouseOver;

function onButtonMouseOver() {
    button.style.top = Math.random() * 100 + '%';
    button.style.left = Math.random() * 100 + '%';
}