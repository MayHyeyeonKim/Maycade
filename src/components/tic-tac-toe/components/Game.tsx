import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WinnerTieNextPlayer from "./WinnerTieNextPlayer";
import Stack from "@mui/material/Stack";
import Log from "./Log";
import Board from "./Board";
import { useCallback, useEffect, useMemo, useState } from "react";
import { calculateTie, calculateWinner } from "../utils/helper";
import type { GameState } from "../types/tictactoe";
import { Divider } from "@mui/material";
import { useUser } from "../../../contexts/user/useUser";
import PlayerSettings from "../../../shared/components/PlayerSettings";

interface GameProps {
  size: number;
}

const Game = ({ size }: GameProps) => {
  const [gameState, setGameState] = useState<GameState>({
    history: [],
    step: 0,
  });

  console.log("gameState: ", gameState);

  const [board, setBoard] = useState<Array<"X" | "O" | null>>(
    Array(size * size).fill(null)
  );

  const { userName } = useUser();
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const [player1, setPlayer1] = useState<string>(userName);
  const [player2, setPlayer2] = useState<string>("Player2");

  const handleClick = useCallback(
    (i: number) => {
      if (board[i]) return;
      const next = [...board];
      next[i] = currentPlayer;
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setBoard(next);
      setGameState({
        history: [...gameState.history, next],
        step: gameState.step + 1,
      });
      console.log("Square clicked:", i);
    },
    [gameState, board, currentPlayer]
  );

  /** Computer auto play */

  useEffect(() => {
    if (
      currentPlayer === "O" &&
      !calculateWinner(board) &&
      !calculateTie(board)
    ) {
      const emptyBoard = board
        .map((v, i) => (v === null ? i : null))
        .filter((v) => v !== null) as number[];

      if (emptyBoard.length === 0) return;

      const randomIndex = Math.floor(Math.random() * emptyBoard.length);
      const move = emptyBoard[randomIndex];

      const timer = setTimeout(() => {
        handleClick(move);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, board, handleClick]);

  const handleReset = () => {
    setGameState({
      history: [],
      step: 0,
    });
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setPlayer1(userName);
    setPlayer2("Player2");
  };

  const winner = useMemo(() => calculateWinner(board), [board]);
  const tie = useMemo(() => calculateTie(board), [board]);
  const isNext = currentPlayer === "X";

  const jumpTo = (index: number) => {
    setGameState({
      history: gameState.history.slice(0, index + 1),
      step: index,
    });
    setBoard(gameState.history[index]);
    setCurrentPlayer(index % 2 !== 0 ? "X" : "O");
  };

  useEffect(() => {
    setBoard(Array(size * size).fill(null));
    setGameState({ history: [], step: 0 });
    setCurrentPlayer("X");
  }, [size]);

  return (
    <>
      <Box
        sx={{
          borderRadius: 2,
          backgroundColor: "#000000",
          maxHeight: "80vh",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: "#000000",
            maxWidth: 1000,
            mx: "auto",
            border: "2px solid #00ff00",
          }}
        >
          <PlayerSettings
            player1={player1}
            player2={player2}
            onPlayer1Change={setPlayer1}
            onPlayer2Change={setPlayer2}
            player1Label="X"
            player2Label="O"
            player1Color="#00ff00"
            player2Color="#00ff00ff"
          />
        </Box>

        <Box
        // sx={{
        //   p: 4,
        //   borderRadius: 3,
        //   backgroundColor: "#fff",
        //   maxWidth: 1000,
        //   mx: "auto",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
        >
          <Box
            sx={{ p: 2, m: 4, textAlign: "center", justifyContent: "center" }}
          >
            <WinnerTieNextPlayer
              winner={winner}
              tie={tie}
              isNext={isNext}
              player1={player1}
              player2={player2}
              onClose={handleReset}
            />
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body1" color="textSecondary">
              Click a square to make your move.
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 10 }}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Board board={board} onClick={handleClick} size={size} />
              <Log
                onReset={handleReset}
                gameState={gameState}
                jumpTo={jumpTo}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Game;
