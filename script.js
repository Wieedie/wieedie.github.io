let currentPlayer = 'X';
let playerA = '';
let playerB = '';

function start() {
    playerA = document.getElementById('playerA').value;
    playerB = document.getElementById('playerB').value;
    if (playerA && playerB) {
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        //updatePlayerInfo();
    } else {
        alert('Bitte geben Sie beide Spielernamen ein.');
    }
}

function newGame() {
    document.querySelectorAll('.board: button').forEach(button => {
        button.disabled = false;
        button.textContent = '';
    });
}

function move(button, row, col) {
    if (button.textContent === '') {
        button.textContent = currentPlayer;
        button.disabled = true;
        //gameTable[row][col] = currentPlayer;
        if(currentPlayer === 'X') {
            currentPlayer = 'O'
        }
        else {
            currentPlayer = 'X'
        }
    }
}

function updatePlayerInfo() {
    document.getElementById('playerSymbols').innerHTML = `<div>${currentPlayer === 'X' ? "&#8594;" : ""}${playerA}: X</div><div>${currentPlayer === 'X' ? "" : "&#8594;"}${playerB}: O</div>`;
}