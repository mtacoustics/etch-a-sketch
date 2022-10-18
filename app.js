const gridContainer = document.querySelector("#gridContainer")
const gridButton = document.getElementById("changeGrid")
const cells = document.getElementsByClassName('cells')
const row = document.getElementsByClassName('rows')

document.onload = createDefaultGrid();

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
        }
    }
}