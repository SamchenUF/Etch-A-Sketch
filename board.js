
function makeBoard(x, y) {
    const contain = document.querySelector(".container");
    for (let i = 0; i < y; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        contain.appendChild(row);
        for (let j = 0; j < x; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = "blue";
            })
        }
    }
}

function deleteBoard() {
    const row = document.querySelectorAll(".row")
    row.forEach(e => e.remove());
    const cell = document.querySelectorAll(".cell")
    cell.forEach(e => e.remove());
}


makeBoard(16, 16);

const button = document.querySelector("button");
button.addEventListener(("click"), () => {
    let choice = Number(prompt("enter a size for the board"));
    if (choice >= 100) {
        choice  = 100;
    }
    deleteBoard();
    makeBoard(choice, choice);
})

