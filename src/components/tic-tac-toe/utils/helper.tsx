import type { BoardState, Player } from "../types/tictactoe";

const calculateWinner = (boardState: BoardState): Player | null => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
};

const calculateTie = (boardState: BoardState): boolean => {
  return (
    boardState.every((cell) => cell !== null) && !calculateWinner(boardState)
  );
};

export { calculateWinner, calculateTie };
