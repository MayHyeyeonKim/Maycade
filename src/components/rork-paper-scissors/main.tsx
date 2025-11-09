import { useState } from "react";
import { Container, Typography, Box, IconButton, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import CustomBox from "./components/CustomBox";
import CustomButton from "./components/CustomButton";
import Score from "./components/Score";
import { useUser } from "../../contexts/user/useUser";
import type { Choice } from "./types/choices";

import rockImg from "../../assets/rock.png";
import paperImg from "../../assets/paper.png";
import scissorsImg from "../../assets/scissors.png";

import buttonrRockImg from "../../assets/button-rock.png";
import buttonPaperImg from "../../assets/button-paper.png";
import buttonScissorsImg from "../../assets/button-scissors.png";

const Main = () => {
  const navigate = useNavigate();
  console.log("Rock-Paper-Scissors main component");

  const [UserChoice, setUserChoice] = useState<Choice | null>(null);
  const [ComputerChoice, setComputerChoice] = useState<Choice | null>(null);

  const { userName } = useUser();
  console.log("userName???", userName);

  const [player1, setPlayer1] = useState<string>(userName);
  const [player2, setPlayer2] = useState<string>("Player2");

  const [winner, setWinner] = useState<string | null>(null);

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

  const handleUserChoice = (choice: string) => {
    const selectedChoice = choices.find((ch) => ch.name === choice)!;
    setUserChoice(selectedChoice);
    console.log("User choice???", selectedChoice);

    const randomChoice = handleRandomChoice();
    console.log("Computer choice???", randomChoice);
    setComputerChoice(randomChoice);

    if (selectedChoice.beats === randomChoice.name) {
      setWinner(player1);
    } else if (randomChoice.beats === selectedChoice.name) {
      setWinner(player2);
    } else {
      setWinner("Tie");
    }
  };

  // const winningLogic = () => {
  //   if (UserChoice && ComputerChoice) {
  //     if (UserChoice.beats === ComputerChoice.name) {
  //       console.log("User wins!");
  //       setWinner("player1");
  //     } else if (ComputerChoice.beats === UserChoice.name) {
  //       console.log("Computer wins!");
  //       setWinner("player2");
  //     } else {
  //       console.log("It's a tie!");
  //     }
  //   }
  // };

  /** Todo 
    - Winning logic
    - Tie logic
    - Score logic
    - UI enhancements
    - Refactoring and optimization
  */

  const handleRestart = () => {
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
          }}
        >
          <Score />
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
            winner={winner === null ? " " : winner === "Tie" ? "Tie" : winner === player1 ? "Win" : "Lose"}
          />
          <CustomBox
            name={player2}
            img={ComputerChoice?.img}
            choice={ComputerChoice}
            winner={winner === null ? " " : winner === "Tie" ? "Tie" : winner === player2 ? "Win" : "Lose"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            m: 2,
          }}
        >
          <CustomButton name="Rock" img={buttonrRockImg} onClick={handleUserChoice} />

          <CustomButton name="Paper" img={buttonPaperImg} onClick={handleUserChoice} />

          <CustomButton name="Scissors" img={buttonScissorsImg} onClick={handleUserChoice} />
        </Box>

        <IconButton color="primary" onClick={() => navigate("/")} sx={{ color: "white" }}>
          <HomeIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Main;
