

function createSquare(numOfSquares) {

    while (numOfSquares > 0) {

        const selectOutputDiv = document.querySelector('#gridContainer');
        let newSquare = document.createElement("div");
        newSquare.classList.add('grid');
        selectOutputDiv.appendChild(newSquare);
        numOfSquares--;

    }
}

createSquare(16);