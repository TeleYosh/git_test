const grid = document.querySelector('.container');
const [nRows, nCols] = [16, 16];
const gridLenght = '30px';

for (let i=1; i<nRows+1; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('id', `row-${i}`);
    rowDiv.setAttribute('style', 
        `
        display:flex;
        height: ${gridLenght};
        outline: 2px solid black;
        `);
    for (let j=1; j<nCols+1; j++) {
        const gridSquareDiv = document.createElement('div');
        gridSquareDiv.setAttribute('id', `col-${j}`);
        gridSquareDiv.setAttribute('style', 
            `  
            width: ${gridLenght};
            outline: 2px solid black;
            `
        )
        rowDiv.appendChild(gridSquareDiv);
    }   
    grid.appendChild(rowDiv);

}