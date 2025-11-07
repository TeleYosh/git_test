const grid = document.querySelector('.container');
const [nRows, nCols] = [16, 16];
// const gridLenght = '30px';

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

generateGrid(nRows, nCols);

const gridSquares = document.querySelectorAll('.gridSquare');
gridSquares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
        }
        )
    })

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => wipeGrid(gridSquares))