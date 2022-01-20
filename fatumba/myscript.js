var logo = document.getElementById("logo");
var intro_btn = document.getElementById("introButton");
var modal_btn = document.getElementById("modalBtn");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
var gamepad_logo = document.getElementById("gamepad");
var gamepad_logo2 = document.getElementById("gamepad2");
var logo_blk = 1;

logo.onclick = function () {
    if (logo_blk === 0) {
        logo.style.color = "";
        gamepad_logo.src = "gamepad.svg";
        gamepad_logo2.src = "gamepad.svg";
        logo_blk = 1;
    }
    else {
        logo.style.color = "#000";
        gamepad_logo.src = "gamepad_blk.svg";
        gamepad_logo2.src = "gamepad_blk.svg";
        logo_blk = 0;
    }
}

intro_btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
} 
