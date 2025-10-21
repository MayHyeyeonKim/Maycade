import RockPaperScissors from "./components/rork-paper-scissors/main";
import TicTacToe from "./components/tic-tac-toe/main";
import Sudoku from "./components/sudoku/main";

import { Typography, Box, IconButton, Card, CardContent } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import PanToolIcon from "@mui/icons-material/PanTool";
import GridOnIcon from "@mui/icons-material/GridOn";
import ExtensionIcon from "@mui/icons-material/Extension";
import SettingsModal from "./components/modals/MainSetting";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useUser } from "./contexts/user/useUser";

function App() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const { userName, setUserName } = useUser();
  const handleSettingsClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleComingSoon = () => {
    setComingSoon(true);
    setTimeout(() => setComingSoon(false), 2000);
  };

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <Routes>
        <Route
          path="/"
          element={
            <Box
              sx={{
                p: 5,
                textAlign: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                minHeight: "100vh",
                width: "100%",
                color: "white",
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  p: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Maycade
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  gutterBottom
                  sx={{
                    color: "white",
                    opacity: 0.9,
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    animation: "marquee 10s linear infinite",
                  }}
                >
                  Welcome {userName}!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    mt: 3,
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      minWidth: 300,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "black",
                    }}
                    onClick={() => navigate("/tic-tac-toe")}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <GridOnIcon sx={{ fontSize: 60, color: "#764ba2" }} />
                      <Typography variant="h5" gutterBottom>
                        Tic Tac Toe
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Strategic grid game for two players
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      minWidth: 300,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "black",
                    }}
                    onClick={() => navigate("/rock-paper-scissors")}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <PanToolIcon sx={{ fontSize: 60, color: "#667eea" }} />
                      <Typography variant="h5" gutterBottom>
                        Rock-Paper-Scissors
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Classic hand game against the computer
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      minWidth: 300,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "black",
                    }}
                    onClick={() => handleComingSoon()}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <ExtensionIcon sx={{ fontSize: 60, color: "#4caf50" }} />
                      <Typography variant="h5" gutterBottom>
                        Sudoku
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Number puzzle game
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
              <IconButton
                color="inherit"
                aria-label="settings"
                onClick={handleSettingsClick}
                sx={{
                  position: "fixed",
                  bottom: 20,
                  right: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <SettingsIcon />
              </IconButton>
              <SettingsModal
                open={open}
                onClose={handleClose}
                userName={userName}
                setUserName={setUserName}
              />
            </Box>
          }
        />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
      {comingSoon &&
        createPortal(
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1300,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Coming Soon
            </Typography>
          </Box>,
          document.body
        )}
    </>
  );
}

export default App;
