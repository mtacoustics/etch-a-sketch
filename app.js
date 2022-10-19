const gridContainer = document.querySelector("#gridContainer")
const gridButton = document.getElementById("changeGrid")
const row = document.getElementsByClassName('rows')
const resetButton = document.getElementById("reset")
document.onload = createDefaultGrid();

resetButton.addEventListener('click', resetGrid)

function createDefaultGrid() {
    createRow(16);
    fillRows(16);
}

function createRow (row) {
    for (let i = 0; i < row; i++) {
        const rows = document.createElement("div");
        gridContainer.appendChild(rows);
        rows.classList.add('rows');
    }
    const rows = document.getElementsByClassName('rows')
}

function fillRows (columns) {
    for (let i = 0; i < row.length; i++) {
        for (n = 0; n < columns; n++) {
            let cells = document.createElement('div')
            row[n].appendChild(cells)
            cells.classList.add('cells')
            cells.addEventListener('mouseenter', function(e) {
                cells.classList.add('black-cell')
            });
        }
    }
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function resetGrid() {
    gridContainer.innerHTML = '';
    createDefaultGrid()
}

gridButton.addEventListener('click', getUserInput)

function getUserInput() {
    input = prompt("Please enter a grid size (from 16 - 100):")
        if (input > 100 || input < 16 || input === null || input === undefined ) {
            alert("That value is not between 16-100. Please try again")
            getUserInput();
        } else {
            createCustomgrid(input)
        }
}

function createCustomgrid(input) {
    clearGrid()
    createRow(input)
    fillRows(input)    
}


