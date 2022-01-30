var logo = document.getElementById("logo");
var intro_btn = document.getElementById("introButton");
var modal_btn = document.getElementById("modalBtn");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
var gamepad_logo = document.getElementById("gamepad");
var gamepad_logo2 = document.getElementById("gamepad2");
var logo_blk = 1;
var modal_content = document.getElementById("modalContent");
function opacity0() {
    modal.style.display = "none";
}
function opacity1() {
    modal_content.style.opacity = "1";
    modal.style.opacity = "1";
}
function nothing() {
    //костыль для задержки
}
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
    setTimeout(opacity1, 1);
}
close.onclick = function () {
    //modal.style.display = "none";
    modal_content.style.opacity = "0";
    modal.style.opacity = "0";
    setTimeout(opacity0, 2000);
}
