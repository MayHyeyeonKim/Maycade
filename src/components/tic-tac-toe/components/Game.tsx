import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WinnerTieNextPlayer from "./WinnerTieNextPlayer";
import Stack from "@mui/material/Stack";
import Log from "./Log";
import Board from "./Board";
import { useCallback, useEffect, useMemo, useState } from "react";
import { calculateTie, calculateWinner } from "../utils/helper";
import type { GameState } from "../types/tictactoe";
import { Button, Divider, TextField } from "@mui/material";

interface GameProps {
  userName: string;
}

const Game = ({ userName }: GameProps) => {
  const [gameState, setGameState] = useState<GameState>({
    history: [],
    step: 0,
  });

  console.log("gameState: ", gameState);

  const [board, setBoard] = useState<Array<"X" | "O" | null>>(
    Array(9).fill(null)
  );

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const [player1, setPlayer1] = useState<string>(userName);
  const [player2, setPlayer2] = useState<string>("Player2");
  const [isEdit, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    setPlayer1(userName);
  }, [userName]);

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

  const handleReset = () => {
    setGameState({
      history: [],
      step: 0,
    });
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setPlayer1("Player1");
    setPlayer2("Player2");
    setIsEditMode(true);
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

  return (
    <>
      <Box
        sx={{
          // border: "10px solid #D9C4B0",
          borderRadius: 2,
          backgroundColor: "#f8f9fa",
          minHeight: "85vh",
          px: 2,
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Typography
          variant="h3"
          align="center"
          sx={{
            fontFamily: "Comic Sans MS, cursive",
            color: "#896C6C",
            textShadow: "2px 2px 4px #E5BEB5",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Tic Tac Toe{" "}
        </Typography> */}

        <Box
          sx={{
            px: 8,
            py: 2,
            mb: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            maxWidth: 1000,
            mx: "auto",
            // border: "2px solid #D9C4B0",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                sx={{ color: "#91ADC8", fontWeight: "bold" }}
              >
                X
              </Typography>
              <TextField
                label="Player 1"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                size="small"
                disabled={!isEdit}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                sx={{ color: "#BB6653", fontWeight: "bold" }}
              >
                O
              </Typography>
              <TextField
                label="Player 2"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                size="small"
                disabled={!isEdit}
              />
            </Box>
            <Button onClick={() => setIsEditMode(!isEdit)}>
              {isEdit ? "Save" : "Edit"}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#fff",
            maxWidth: 1000,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mb: 3, textAlign: "center", justifyContent: "center" }}>
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
              Enjoy playing Tic Tac Toe! The game board is below.
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 10 }}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Board board={board} onClick={handleClick} />
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
