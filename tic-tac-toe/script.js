const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

let winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index + 1}`;
    });
    
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    });
});

function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        
        // Check for game over before swapping turns
        if (!checkGameOver()) {
            swapTurn();
        }
    }
}

function swapTurn() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let winner = false;
    
    winningPositions.forEach((position) => {
        if (
            gameGrid[position[0]] !== "" && 
            gameGrid[position[0]] === gameGrid[position[1]] && 
            gameGrid[position[1]] === gameGrid[position[2]]
        ) {
            winner = true;
            
        
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
            // Disable pointer events on all boxes
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
            
            // Update game info with winner
            gameInfo.innerText = `Player ${gameGrid[position[0]]} won the game!`;
            newGameBtn.classList.add("active");
        }
    });
    
    if (winner) return true;
    
    let fillCount = 0;
    gameGrid.forEach((cell) => {
        if (cell !== "") fillCount++;
    });
    
    // If all cells are filled and no winner, it's a tie
    if (fillCount === 9) {
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
        return true;
    }
    
    return false;
}
newGameBtn.addEventListener("click", initGame);