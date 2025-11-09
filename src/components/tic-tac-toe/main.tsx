import { Container, Typography, Box, IconButton, Button, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Game from "./components/Game";
import { useState } from "react";
// import { pink } from "@mui/material/colors";

const Main = () => {
  const navigate = useNavigate();
  console.log("Tic Tac Toe main component");

  const [size, setSize] = useState<number | null>(null);

  const levels = {
    Easy: 3,
    Medium: 4,
    Hard: 5,
  } as const;

  const handleLevelClick = (size: number) => {
    console.log("Level clicked", size);
    setSize(size);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // p: 1,
        overflow: "hidden",
        textAlign: "center",
        background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        minHeight: "100vh",
        color: "#00ff00",
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
          transform: "scale(0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#00ff00" }}>
          Tic Tac Toe Game
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 3 }}>
          Select a difficulty level to start.
        </Typography>

        {/* level */}
        <Stack direction="column" spacing={2} justifyContent="center" sx={{ m: 3, p: 4 }}>
          {Object.entries(levels).map(([level, size]) => (
            <Button
              key={level}
              sx={{ mb: 3, backgroundColor: "#000000", color: "#00ff00", border: "2px solid #00ff00" }}
              onClick={() => handleLevelClick(size)}
            >
              {level}
            </Button>
          ))}
        </Stack>

        {size !== null && <Game size={size} />}

        <Box sx={{ mt: 3 }}>
          <IconButton color="primary" onClick={() => navigate("/")} sx={{ color: "#00ff00" }}>
            <HomeIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
