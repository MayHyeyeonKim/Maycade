import React, { useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import CustomBox from "./components/CustomBox";
import CustomButton from "./components/CustomButton";

const Main = () => {
  const navigate = useNavigate();
  console.log("Rock-Paper-Scissors main component");

  const [UserChoice, setUserChoice] = useState<string | null>(null);
  const [ComputerChoice, setComputerChoice] = useState<string | null>(null);

  const choices = [
    { name: "Rock", img: "", beats: "Scissors" },
    { name: "Paper", img: "", beats: "Rock" },
    { name: "Scissors", img: "", beats: "Paper" },
  ];

  const handleRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].name;
  };

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    console.log("User choice???", choice);

    setComputerChoice(handleRandomChoice());
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "white" }}>
          Rock-Paper-Scissors Game
        </Typography>

        <CustomBox name="user" choice={UserChoice} />
        <CustomBox name="computer" choice={ComputerChoice} />

        <CustomButton name="Rock" onClick={handleUserChoice} />
        <CustomButton name="Paper" onClick={handleUserChoice} />
        <CustomButton name="Scissors" onClick={handleUserChoice} />

        <IconButton
          color="primary"
          onClick={() => navigate("/")}
          sx={{ color: "white" }}
        >
          <HomeIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Main;
