// script.js

document.addEventListener('DOMContentLoaded', function () {
    const player1Input = document.getElementById('player-1');
    const player2Input = document.getElementById('player-2');
    const submitButton = document.getElementById('submit');
    const board = document.getElementById('board');
    const message = document.querySelector('.message');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameOver = false;

    submitButton.addEventListener('click', function () {
        const player1Name = player1Input.value;
        const player2Name = player2Input.value;
        if (player1Name && player2Name) {
            // Hide player input and show the board
            document.getElementById('players-input').style.display = 'none';
            board.style.display = 'block';
            message.textContent = `${player1Name}, you're up`;

            // Handle cell click event
            cells.forEach(cell => {
                cell.addEventListener('click', function () {
                    if (!gameOver && !cell.textContent) {
                        cell.textContent = currentPlayer;
                        if (checkWin(currentPlayer)) {
                            message.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, congratulations you won!`;
                            gameOver = true;
                        } else {
                            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                            message.textContent = `${currentPlayer === 'X' ? player1
