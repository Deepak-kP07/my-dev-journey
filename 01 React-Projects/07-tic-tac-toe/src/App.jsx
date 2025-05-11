import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";  
import GameOver from "./Components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurn){
  let currentPlayer = 'X';
  if(gameTurn.length > 0 && gameTurn[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurn){
  let gameBoard = [...INITIAL_GAME_BOARD].map(array => [...array]);
  for(const turn of gameTurn){
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player; 
  }
  return gameBoard; 
}

function deriveWinner(gameBoard, name){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner = name[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [name, setName] = useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurn);
  let gameBoard = deriveGameBoard(gameTurn);
  let winner = deriveWinner(gameBoard, name);
  const hasDraw = gameTurn.length === 9 && !winner; 

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurn(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurn([]);
  }
  
  function handlePlayerNameChange(symbol, newName){
    setName(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      };
    });
  }
  
  return (
    <main> 
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player 
              intialname={PLAYERS.X} 
              symbol="X" 
              isActive={activePlayer === 'X'} 
              onChangeName={handlePlayerNameChange} 
            />
            <Player 
              intialname={PLAYERS.O} 
              symbol="O" 
              isActive={activePlayer === 'O'} 
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurn}/>
    </main>
  )
}

export default App;