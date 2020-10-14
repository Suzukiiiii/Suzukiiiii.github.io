# Tic Tac Toe
A web browser playable version of Tic Tac Toe. The objective of the game is to get three in a row orthogonally or diagonally.

## User Stories
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

## How to Play
Two people may play this game on the same machine, taking turns.
To start, decide which player goes first with the radio buttons (player 1 is X and player 2 is O). If none are selected, player 1 will go first.

During gameplay, click on one of the empty tiles to mark it with your piece (X or O). If you click on a tile that was already selected, or if you click on a tile while a game is not active, nothing will happen. After the game, your score will be updated depending on who one or if there was a tie.

You may also replay the last played game by clicking the Replay Last Game button. This will play all the moves of your previous game, with a delay of 2 seconds.

## Wireframe
![wireframe](/assets/TTT_WireFrame.png)

## Technologies Used
HTML,CSS,JavaScript

## Development Process
I took an object oriented approach to this project so I could separate the game logic from the DOM manipulation and event handling. My first step was making the classes that the Tic Tac Toe game would consist of (Tile,Board,Player,TicTacToe).

Once the initial JavaScript classes were made, I drew up a wire frame and made the initial board.

### Win Conditions
To find a winner, I made a method in the Board class which looked at its Tiles to see if there were any pieces that were three in a row. It would check rows, then columns, and finally both diagonals. If a three in a row happened, then the current player would win, because you can only win on your own turn. This method would be called on every turn, and the game would continue if it returned nothing.

### Gameplay
Whenever the board was clicked, board would call tictactoe method and pass in event target as the parameter. TicTacToe object would then call board.findWinner() to determine if the move would end the game. Once the game ends, the result is displayed on the game log to the right.

## Extras
### Replay
User can replay the last played game by clicking the replay button. Moves for each game are pushed into an array once they happen. If replay is clicked, those moves will be played in order, and other event handlers will be disabled to prevent them from interfering with the replay execution.

### Highlight winning tiles
If the game ends with a winner, the winning tiles will change.

## WIP
Currently working on the AI that would play a perfect game (draw or win every time).