import {
  Container,
  Typography,
  Box,
  IconButton,
  // Button,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Game from "./components/Game";
// import { pink } from "@mui/material/colors";

const Main = () => {
  const navigate = useNavigate();
  console.log("Tic Tac Toe main component");

  // const levels = {
  //   Easy: 3,
  //   Medium: 4,
  //   Hard: 5,
  // };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // p: 1,
        overflow: "hidden",
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
          transform: "scale(0.9)",
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

        {/* level */}
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          {/* {levels.map((level, index) => (
            <Button key={index} sx={{ mb: 3, backgroundColor: "white" }}>
              {level}
            </Button>
          ))} */}
        </Stack>

        <Game />
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
