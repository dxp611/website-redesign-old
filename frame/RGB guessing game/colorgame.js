var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();

    reset();
}

// colorDisplay.textContent = pickedColor;

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                this.style.backgroundColor = pickedColor;
                h2.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again!";
            } else {
                this.style.backgroundColor = "rgb(46, 46, 46)";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function pickRandomColor() {
    return colors[getRandomInt(colors.length - 1)];
}

function randomColor() {
    return "rgb(" + getRandomInt(255) + ", " + getRandomInt(255) + ", " + getRandomInt(255) + ")";
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;

    }
}


function reset() {
    colors = getRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h2.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function () {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = getRandomColors(numSquares);
//     pickedColor = pickRandomColor();
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function () {
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = getRandomColors(numSquares);
//     pickedColor = pickRandomColor();
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }

// });

resetButton.addEventListener("click", function () {
    reset();
});

function resetButton(bt) {
    bt.onmouseover = function () {
        this.style.backgroundColor = "white";
        this.style.color = "steelblue";
    }
    bt.onmouseleave = function () {
        this.style.backgroundColor = "steelblue";
        this.style.color = "white";
    }
}

function changeButton(bt) {

    bt.onmouseover = function () {
        this.style.backgroundColor = pickedColor;
        this.style.color = "white";
    }
    bt.onmouseleave = function () {
        this.style.backgroundColor = "white";
        this.style.color = pickedColor;
    }
}