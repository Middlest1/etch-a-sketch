
/* Pseudocode */
// Create 16 squares then break to a new line
// Use event listeners for changing the color of a square when hovered
// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent. 
// If the user has not clicked the button, show 16x16 grid; if the user has clicked the button, set grid to show userinput x userinput size grid; if user enters a number of 100 or greater, return the prompt with an error statement and request for a new number

/* Extra Credit */
// Add a button that will randomize the squares RGB values with each interaction
// Implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.

const selectOutputDiv = document.querySelector('#gridContainer');


function createGrid(numOfSquares) {

    while (numOfSquares > 0) {
        let newSquare = document.createElement("div");
        newSquare.classList.add('grid');
        selectOutputDiv.appendChild(newSquare);
        numOfSquares--;
    }

    let squareOfGrid = document.querySelectorAll('.grid');

    squareOfGrid.forEach(function (squareHovered) {

        squareHovered.addEventListener('mouseover', function () {
            squareHovered.style.backgroundColor = 'red';
        })
    })
}

createGrid(256);



let changeGridButton = document.querySelector('#changeGrid');

changeGridButton.addEventListener('click', function () {

    selectOutputDiv.innerHTML = '';
    let userEnteredNumOfSquares = 0;

    while (userEnteredNumOfSquares < 1 || userEnteredNumOfSquares > 100) {
        let userInput = prompt('How many squares per side would you like? Please enter a number less than 100 and greater than 0.')
        userEnteredNumOfSquares = userInput;

        if (userInput == null) {
            createGrid(256);
            break;
        }

        else if (isNaN(userEnteredNumOfSquares)) {
            userEnteredNumOfSquares = 0;
        }
    }

    createGrid(userEnteredNumOfSquares);
})