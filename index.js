let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat (${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat (${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16);

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `"#" + "colors".split("").map(function(){return parseInt(Math.random()*0x10).toString(16);}).join("")`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor() {
    color = choice;
}

