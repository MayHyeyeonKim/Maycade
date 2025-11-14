import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PanToolIcon from "@mui/icons-material/PanTool";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useNavigate } from "react-router-dom";
import CustomBox from "./components/CustomBox";
import Score from "./components/Score";
import { useUser } from "../../contexts/user/useUser";
import type { Choice } from "./types/choices";

import rockImg from "../../assets/rock.png";
import paperImg from "../../assets/paper.png";
import scissorsImg from "../../assets/scissors.png";

const Main = () => {
  const navigate = useNavigate();
  console.log("Rock-Paper-Scissors main component");

  const [UserChoice, setUserChoice] = useState<Choice | null>(null);
  const [ComputerChoice, setComputerChoice] = useState<Choice | null>(null);

  const { userName } = useUser();
  console.log("userName???", userName);

  const [player1, setPlayer1] = useState<string>(userName);
  const [player2, setPlayer2] = useState<string>("Cpomputer");

  const [winner, setWinner] = useState<string | null>(null);
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [showGameOverDialog, setShowGameOverDialog] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string | null>(null);

  const choices: Choice[] = [
    { name: "Rock", img: rockImg, beats: "Scissors" },
    {
      name: "Paper",
      img: paperImg,
      beats: "Rock",
    },
    { name: "Scissors", img: scissorsImg, beats: "Paper" },
  ];

  const handleRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // 점수 차이가 3 이상인지 체크
  useEffect(() => {
    const scoreDifference = Math.abs(player1Score - player2Score);
    if (scoreDifference >= 3) {
      const winner = player1Score > player2Score ? player1 : player2;
      setGameWinner(winner);
      setShowGameOverDialog(true);
    }
  }, [player1Score, player2Score, player1, player2]);

  const handleUserChoice = (choice: string) => {
    const selectedChoice = choices.find((ch) => ch.name === choice)!;
    setUserChoice(selectedChoice);
    console.log("User choice???", selectedChoice);

    const randomChoice = handleRandomChoice();
    console.log("Computer choice???", randomChoice);
    setComputerChoice(randomChoice);

    if (selectedChoice.beats === randomChoice.name) {
      setWinner(player1);
      setPlayer1Score((prev) => prev + 1);
    } else if (randomChoice.beats === selectedChoice.name) {
      setWinner(player2);
      setPlayer2Score((prev) => prev + 1);
    } else {
      setWinner("Tie");
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setUserChoice(null);
    setComputerChoice(null);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameWinner(null);
    setShowGameOverDialog(false);
  };

  const handleContinue = () => {
    setShowGameOverDialog(false);
    setWinner(null);
    setUserChoice(null);
    setComputerChoice(null);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#00ff00" }}>
          Rock-Paper-Scissors Game
        </Typography>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Score
            winner={winner}
            player1Score={player1Score}
            player2Score={player2Score}
          />
          <Button variant="contained" onClick={() => handleRestart()}>
            {" "}
            Restart
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            direction: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <CustomBox
            name={player1}
            img={UserChoice?.img}
            choice={UserChoice}
            winner={
              winner === null
                ? " "
                : winner === "Tie"
                ? "Tie"
                : winner === player1
                ? "Win"
                : "Lose"
            }
          />
          <CustomBox
            name={player2}
            img={ComputerChoice?.img}
            choice={ComputerChoice}
            winner={
              winner === null
                ? " "
                : winner === "Tie"
                ? "Tie"
                : winner === player2
                ? "Win"
                : "Lose"
            }
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            gap: 3,
            m: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleUserChoice("Rock")}
            sx={{
              fontSize: "3rem",
              padding: "20px 30px",
              borderColor: "#00ff00",
              color: "white",
              borderWidth: 2,
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#00ff00",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                transform: "scale(1.1)",
                borderWidth: 3,
              },
            }}
          >
            <PanToolIcon fontSize="inherit" />
          </Button>

          <Button
            variant="outlined"
            onClick={() => handleUserChoice("Paper")}
            sx={{
              fontSize: "3rem",
              padding: "20px 30px",
              borderColor: "#00ff00",
              color: "white",
              borderWidth: 2,
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#00ff00",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                transform: "scale(1.1)",
                borderWidth: 3,
              },
            }}
          >
            <DescriptionIcon fontSize="inherit" />
          </Button>

          <Button
            variant="outlined"
            onClick={() => handleUserChoice("Scissors")}
            sx={{
              fontSize: "3rem",
              padding: "20px 30px",
              borderColor: "#00ff00",
              color: "white",
              borderWidth: 2,
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#00ff00",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                transform: "scale(1.1)",
                borderWidth: 3,
              },
            }}
          >
            <ContentCutIcon fontSize="inherit" />
          </Button>
        </Box>

        <IconButton
          color="primary"
          onClick={() => navigate("/")}
          sx={{ color: "white" }}
        >
          <HomeIcon />
        </IconButton>
      </Box>

      {/* Game Over Dialog */}
      <Dialog
        open={showGameOverDialog}
        onClose={() => {}}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            border: "2px solid #00ff00",
          },
        }}
      >
        <DialogTitle sx={{ color: "#00ff00", textAlign: "center" }}>
          {gameWinner === player2 ? "🤖 Oh No! 🤖" : "🎉 Game Over! 🎉"}
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Winner: {gameWinner}!
          </Typography>
          {gameWinner === player2 ? (
            <>
              <Typography
                sx={{ textAlign: "center", fontSize: "1.1rem", mb: 1 }}
              >
                😅 Seriously? You just lost to a clueless computer...
              </Typography>
              <Typography sx={{ textAlign: "center", fontStyle: "italic" }}>
                Care to redeem yourself and try again?
              </Typography>
            </>
          ) : (
            <>
              <Typography sx={{ textAlign: "center" }}>
                Congratulations! You've dominated the game! 🏆
              </Typography>
              <Typography sx={{ textAlign: "center", mt: 1 }}>
                Want to keep the winning streak going?
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleContinue}
            sx={{ minWidth: 100 }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleRestart}
            sx={{ minWidth: 100 }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Main;
