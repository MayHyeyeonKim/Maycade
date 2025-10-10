import { Container, Typography, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Game from "./components/Game";
import { useUser } from "../../contexts/UserContext";

const Main = () => {
  const navigate = useNavigate();
  console.log("Tic Tac Toe main component");

  const { userName } = useUser();
  return (
    <Container
      maxWidth="md"
      sx={{
        p: 4,
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
          // backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "white" }}>
          Tic Tac Toe Game
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 3 }}>
          Play Tic Tac Toe now! Challenge a friend on the 3x3 grid.
        </Typography>
        <Game userName={userName} />
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
