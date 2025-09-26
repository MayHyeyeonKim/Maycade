import { Box, Button, List, ListItem } from "@mui/material";
import type { GameState } from "../types/tictactoe";

interface LogProps {
  onReset: () => void;
  gameState: GameState;
  jumpTo: (i: number) => void;
}

const Log = ({ onReset, gameState, jumpTo }: LogProps) => {
  const history = gameState.history;

  return (
    <Box sx={{ textAlign: "center", minWidth: 200 }}>
      <Box sx={{ border: "none", borderRadius: 2 }}>
        <List sx={{ maxHeight: 300, overflowY: "auto", p: 0 }}>
          <ListItem key="reset" sx={{ p: 0.5 }}>
            <Button
              onClick={onReset}
              variant="contained"
              fullWidth
              sx={{
                color: "#fff",
                boxShadow: "none",
                backgroundColor: "#F08787",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "0.9rem",
                "&:hover": {
                  backgroundColor: "#e57373",
                  boxShadow: "none",
                },
              }}
            >
              Reset Game
            </Button>
          </ListItem>
          {history.map((_, index) => {
            return (
              <ListItem key={index} sx={{ p: 0.5 }}>
                <Button
                  onClick={() => jumpTo(index)}
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    color: "#666",
                    borderColor: "#ddd",
                    fontSize: "0.85rem",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      borderColor: "#bbb",
                    },
                  }}
                >
                  Go to move #{index}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Log;
