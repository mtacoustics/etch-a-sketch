const gridContainer = document.getElementById("gridContainer")
const rows = document.getElementById("gridRow")
const columns = document.getElementById("gridColumns")
const gridButton = document.getElementById("changeGrid")

// create 16 x 16 grid

function defaultgrid() {
    createRows(16);
    createColumns(16);
}

function createRows(rows) {
    for (let i = 0; i < rows; i++ ) {
        let row = document.createElement("div")
        gridContainer.appendChild(row).className("gridRow")
    }
}

function createColumns(columns) {
    
}