const grid = document.querySelector('.container');
const [nRows, nCols] = [16, 16];
let gridSquares;

function generateGrid(nRows, nCols) {
    for (let i=1; i<nRows+1; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('id', `row-${i}`);
        rowDiv.setAttribute('class', 'row');
        rowDiv.setAttribute('style', 
            `
            display:flex;
            flex: 1;
            outline: 0.5px solid black;
            `);
        for (let j=1; j<nCols+1; j++) {
            const gridSquareDiv = document.createElement('div');
            gridSquareDiv.setAttribute('id', `col-${j}`);
            gridSquareDiv.setAttribute('class', 'gridSquare');
            gridSquareDiv.setAttribute('style', 
                `  
                flex:1;
                outline: 0.5px solid black;
                `
            )
            rowDiv.appendChild(gridSquareDiv);
        }   
        grid.appendChild(rowDiv);

    }
}

function wipeGrid(gridSquares) {
    gridSquares.forEach((square) => {
        square.style.backgroundColor = '';
    })
}

function activateHovering(gridSquares) {
    gridSquares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
        }
        )
    })
}

function setUpGrid(nRows, nCols) {
    grid.innerHTML = '';
    generateGrid(nRows, nCols);
    gridSquares = document.querySelectorAll('.gridSquare');
    activateHovering(gridSquares);
}

setUpGrid(nRows, nCols);

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => wipeGrid(gridSquares));

const size = document.querySelector('#size');
size.addEventListener('click', () => {
    const n = Number(prompt('Choose the grid size:'));
    if (n > 0) setUpGrid(n, n);
})