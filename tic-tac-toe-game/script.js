const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const winnerText = document.getElementById('winner');
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !winnerText.textContent) {
            cell.textContent = currentPlayer;
            board[index] = currentPlayer;
            if (checkWinner()) {
                winnerText.textContent = `${currentPlayer} wins!`;
            } else if (board.every(cell => cell)) {
                winnerText.textContent = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        combination.every(index => board[index] === currentPlayer)
    );
}