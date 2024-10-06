
let display = document.getElementById('numberdis');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let restart = document.getElementById('restart');
let forchange = document.getElementById('displays');
let number = 0;
plus.addEventListener("click", () => {
    number += 1;
    display.innerText = number;
    if (number >= 50)
        display.setAttribute("style", "color:#808083;");
});

minus.addEventListener("click", () => {
    if (number == 0) {

    }
    else {
        number -= 1;
        display.innerText = number;
    }
});
restart.addEventListener("click", () => {
    display.innerText = 0;
    number = 0;
    display.setAttribute("style", "color:white;");
});
