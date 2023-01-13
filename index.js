/*
enter our names and have them displayed
have our order chosen for us by the game
take turns placing our marks in empty spaces
not be able to place our marks in an occupied space
be told when a move causes a player to win, or to draw
start the game over without having to reset the browser

As a user playing a one player game I want to:

see the name 'Computer' displayed as my opponent
have the Computer player make moves as if it were a human player with the correct mark in an empty space

have the Computer make 'better-than-guessing' choices when placing a mark on the board
set the board size myself ("wider" or "taller" than 3x3)

*/
//current state of the game


const title = document.getElementById('title');
const score = document.getElementById("score");
const gameBoard = document.getElementById('gameBoard');
const playerTurn = document.getElementById('playerTurn');
const state = document.querySelector('div');
const playersInput = document.querySelector('.players')
let playerName = '';





// needs timeout


// score.innerText = ${game.playerName}: ${playerScore} vs. Computer: ${computerScore}`

let gameState = {
    players: ['x' , 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    currentPlayer: 0
}

const resetButtonz = document.querySelector('.reset')
      resetButtonz.addEventListener('click', handleUpdate )
      // reset gameState set all arrays to null
      function handleUpdate(){
        gameBoard.innerHTML = ''
        console.log('click')
        gameState = {
          players: ['x' , 'o'],
          board: [
              [null, null, null],
              [null, null, null],
              [null, null, null],
          ],
          currentPlayer: 0
      }
      renderBoard()
      startGame()}

function winState0(player) {
  if(gameState.board[0][0] === player && gameState.board[0][1] === player && gameState.board[0][2]){
    return true;
  }
  return false;
}

function winState1(player) {
  if(gameState.board[1][0] === player && gameState.board[1][1] === player && gameState.board[1][2]){
    return true;
  }
  return false;
}

function winState2(player) {
  if(gameState.board[2][0] === player && gameState.board[2][1] === player && gameState.board[2][2]){
    return true;
  }
  return false;
}

function winState3(player) {
  if(gameState.board[0][0] === player && gameState.board[1][0] === player && gameState.board[2][0]){
    return true;
  }
  return false;
}

function winState4(player) {
  if(gameState.board[0][1] === player && gameState.board[1][1] === player && gameState.board[2][1]){
    return true;
  }
  return false;
}

function winState5(player) {
  if(gameState.board[0][2] === player && gameState.board[1][2] === player && gameState.board[2][2]){
    return true;
  }
  return false;
}

function winState6(player) {
  if(gameState.board[0][0] === player && gameState.board[1][1] === player && gameState.board[2][2]){
    return true;
  }
  return false;
}

function winState7(player) {
  if(gameState.board[0][2] === player && gameState.board[1][1] === player && gameState.board[2][0]){
    return true;
  }
  return false;
}



function renderBoard(){
  
  for (const [rowidx,row] of gameState.board.entries()) {
    for (const [cellidx,cell] of row.entries()) {
      const cellElem = document.createElement('div');
      cellElem.className = 'cell';
      cellElem.dataset.rowidx = rowidx;
      cellElem.dataset.cellidx = cellidx;
console.log(cellidx)
      cellElem.addEventListener('click',e => {
        const cell = e.currentTarget;
        if (cell.innerText !== ''){
          return 
        
        }
        const cp = gameState.players[gameState.currentPlayer % 2];
        cell.innerText = cp;
        gameState.board[cell.dataset.rowidx][cell.dataset.cellidx] = cp;
        if(winState0 (cp)){
          Winner(cp)
        }
        if(winState1 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState2 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState3 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState4 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState5 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState6 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        if(winState7 (cp)){
          alert(`${cp} has become winner winner chicken dinner`);
        }
        gameState.currentPlayer++;
      } )
        gameBoard.appendChild(cellElem);
    }
  }
  }
  function Winner(cp){
  document.querySelector('.winText').innerText = `${cp} has become winner winner chicken dinner`;
}



  
    document.querySelector('.submitButton').addEventListener('click', (e) => {
      e.preventDefault()
      gameState.board.innerHTML = ''
      playersInput.style.display = 'none'
      document.querySelector('.player1').innerText = document.querySelector('.x').value
      document.querySelector('.player2').innerText = document.querySelector('.o').value
      renderBoard()
      })
      //delete form
      
  

    // function resetBoard(){
      //grab all cells and for each cell set inner html to an empty string,
      
      // }
console.log(resetButtonz)

    


 

 
 
  
 

  
  








  // renderGame()

    // Create project 

    // Create content like titles and text

    // Add element to list
  //   list.appendChild(projectEl)
  // })




// function updateGameBoard(){
//     for (i = 0; i < state.Board.length; i++){
//         gameBoard.append.row = {
//             array.forEach(element => {
              
//             }); row  {
//                 row.append.button classlistadd ()
//                 if state.board = true{
//                     button.innerText = 'X or O'
//                 }
//             }
        
//     }
// }
// if button.clicked {
//     return updateGameBoard
// }



// const renderBoard = () => {
//     // make sure the board is clear.
//     boardElem.innerHTML = ''; //not ideal
//     // iterate through the state.board
//     for (let i = 0; i < state.board.length; i++) {
//       const card = state.board[i];
//       // create elements
//       const cellElem = document.createElement('div');
//       cellElem.classList.add('cell');
  
//       if (card.isTurned) cellElem.innerText = card.value;
//       if (card.owner) cellElem.classList.add('owner');
  
//       cellElem.dataset.index = i;
  
//       // append them to the parent element
//       boardElem.appendChild(cellElem);
  
// window.addEventListener("load", () => {

//     // updateGameBoard()
//     // const playerNameContainer = gameBoard.createElement('div')
//     // playerNameContainer.setAttribute("id", "playerNameContainer")

//     // const playerNameInput = playerName.createElement("input")
//     // playerNameInput.setAttribute("id", "playerNameInput").setAttribute("type", "text")

//     // gameBoard.appendChild(playerNameContainer)
//     // playerNameInput.addEventListener("change", () => {
//     //     let playerName = playerNameInput.value
//         // todo: remove #input from DOM
//     })
// // });