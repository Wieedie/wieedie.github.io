let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let playerA = '';
let playerB = '';
let checkBox = document.getElementById('botCheckBox');

function checkBot() {
    if(document.getElementById('playerB').style.display === 'none'){
        document.getElementById('playerB').style.display = 'inline'
    } else {
        document.getElementById('playerB').style.display = 'none';
    }
}

function start() {
    playerA = document.getElementById('playerA').value;
    if(!checkBox.checked){
        playerB = document.getElementById('playerB').value;
    }
    else {
        playerB = 'Bot';
    }
    if (playerA && playerB) {
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        updatePlayerInfo();
    } else {
        alert('Bitte geben Sie beide Spielernamen ein.');
    }
}

function newGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.querySelectorAll("button.gameButton").forEach(button => {
        button.disabled = false;
        button.textContent = '';
    });
    updatePlayerInfo();
}

function updatePlayerInfo() {
    document.getElementById('playerSymbols').innerHTML = `<div>${currentPlayer === 'X' ? "&#8594;" : ""}${playerA}: X</div><div>${currentPlayer === 'X' ? "" : "&#8594;"}${playerB}: O</div>`;
}

function move(button, row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        button.textContent = currentPlayer;
        button.disabled = true;
        if (checkWin()) {
            setTimeout(() => {
                alert(`${currentPlayer === 'X' ? playerA : playerB} hat gewonnen!`);
                newGame();
            }, 100);
        } else if (isDraw()) {
            setTimeout(() => {
                alert('Unentschieden!');
                newGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updatePlayerInfo();
        }
        if (currentPlayer !== 'X' && playerB === 'Bot') {
            setTimeout(() => {
                makeBotMove();
            }, 101); // Add a slight delay for bot move
        }
    }
}

function makeBotMove() {
    //Angreifen

    //Horizontale Gewinnmöglichkeiten
    if(currentPlayer === 'X'){
    }
    else if(board[0][0]==='O' && board[0][1]==='O' && board[0][2]===''){
        move(button3, 0, 2);
    } else if(board[0][0] === 'O' && board[0][2] === 'O' && board[0][1]===''){
        move(button2, 0, 1);
    } else if(board[0][1] === 'O' && board[0][2] === 'O' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[1][0] === 'O' && board[1][1] === 'O' && board[1][2]===''){
        move(button6, 1, 2);
    } else if(board[1][0] === 'O' && board[1][2] === 'O' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'O' && board[1][2] === 'O' && board[1][0]===''){
        move(button4, 1, 0);
    } else if(board[2][0] === 'O' && board[2][1] === 'O' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[2][0] === 'O' && board[2][2] === 'O' && board[2][1]===''){
        move(button8, 2, 1);
    } else if(board[2][1] === 'O' && board[2][2] === 'O' && board[2][0]===''){
        move(button7, 2, 0);
    }
    // Vertikale Gewinnmöglichkeiten
    else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0]===''){
        move(button7, 2, 0);
    } else if(board[0][0] === 'O' && board[2][0] === 'O' && board[1][0]===''){
        move(button4, 1, 0);
    } else if(board[1][0] === 'O' && board[2][0] === 'O' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1]===''){
        move(button8, 2, 1);
    } else if(board[0][1] === 'O' && board[2][1] === 'O' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'O' && board[2][1] === 'O' && board[0][1]===''){
        move(button2, 0, 1);
    } else if(board[0][2] === 'O' && board[1][2] === 'O' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[0][2] === 'O' && board[2][2] === 'O' && board[1][2]===''){
        move(button6, 1, 2);
    } else if(board[1][2] === 'O' && board[2][2] === 'O' && board[0][2]===''){
        move(button3, 0, 2);
    }
    // Diagonale Gewinnmöglichkeiten
    else if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[0][0] === 'O' && board[2][2] === 'O' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'O' && board[2][2] === 'O' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[2][0] === 'O' && board[1][1] === 'O' && board[0][2]===''){
        move(button3, 0, 2);
    } else if(board[2][0] === 'O' && board[0][2] === 'O' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'O' && board[0][2] === 'O' && board[2][0]===''){
        move(button7, 2, 0);
    }

        //Verteidigen

    // Horizontale Gewinnmöglichkeiten
    else if(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2]===''){
        move(button3, 0, 2);
    } else if(board[0][0] === 'X' && board[0][2] === 'X' && board[0][1]===''){
        move(button2, 0, 1);
    } else if(board[0][1] === 'X' && board[0][2] === 'X' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[1][0] === 'X' && board[1][1] === 'X' && board[1][2]===''){
        move(button6, 1, 2);
    } else if(board[1][0] === 'X' && board[1][2] === 'X' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'X' && board[1][2] === 'X' && board[1][0]===''){
        move(button4, 1, 0);
    } else if(board[2][0] === 'X' && board[2][1] === 'X' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[2][0] === 'X' && board[2][2] === 'X' && board[2][1]===''){
        move(button8, 2, 1);
    } else if(board[2][1] === 'X' && board[2][2] === 'X' && board[2][0]===''){
        move(button7, 2, 0);
    }
    // Vertikale Gewinnmöglichkeiten
    else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0]===''){
        move(button7, 2, 0);
    } else if(board[0][0] === 'X' && board[2][0] === 'X' && board[1][0]===''){
        move(button4, 1, 0);
    } else if(board[1][0] === 'X' && board[2][0] === 'X' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1]===''){
        move(button8, 2, 1);
    } else if(board[0][1] === 'X' && board[2][1] === 'X' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'X' && board[2][1] === 'X' && board[0][1]===''){
        move(button2, 0, 1);
    } else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[0][2] === 'X' && board[2][2] === 'X' && board[1][2]===''){
        move(button6, 1, 2);
    } else if(board[1][2] === 'X' && board[2][2] === 'X' && board[0][2]===''){
        move(button3, 0, 2);
    }
    // Diagonale Gewinnmöglichkeiten
    else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2]===''){
        move(button9, 2, 2);
    } else if(board[0][0] === 'X' && board[2][2] === 'X' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'X' && board[2][2] === 'X' && board[0][0]===''){
        move(button1, 0, 0);
    } else if(board[2][0] === 'X' && board[1][1] === 'X' && board[0][2]===''){
        move(button3, 0, 2);
    } else if(board[2][0] === 'X' && board[0][2] === 'X' && board[1][1]===''){
        move(button5, 1, 1);
    } else if(board[1][1] === 'X' && board[0][2] === 'X' && board[2][0]===''){
        move(button7, 2, 0);
    }

    // Mitte angreifen
    else if(board[1][1] === '' && button5){
        move(button5, 1, 1);
    }

    // Ecken angreifen
    else if(board[0][0] === ''){
        move(button1, 0, 0);
    } else if(board[0][2] === ''){
        move(button3, 0, 2);
    } else if(board[2][0] === ''){
        move(button7, 2, 0);
    } else if(board[2][2] === ''){
        move(button9, 2, 2);
    }
    // Seiten angreifen
    else if(board[0][1] === ''){
        move(button2, 0, 1);
    } else if(board[1][0] === ''){
        move(button4, 1, 0);
    } else if(board[1][2] === ''){
        move(button6, 1, 2);
    } else if(board[2][1] === ''){
        move(button8, 2, 1);
    }
}


function checkWin() {
    const lines = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[2][0], board[1][1], board[0][2]]
    ];
    return lines.some(line => line.every(cell => cell === currentPlayer));
}

function isDraw() {
    return board.flat().every(cell => cell !== '');
}

function checkWin() {
    const lines = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[2][0], board[1][1], board[0][2]]
    ];
    return lines.some(line => line.every(cell => cell === currentPlayer));
}

function isDraw() {
    return board.flat().every(cell => cell !== '');
}