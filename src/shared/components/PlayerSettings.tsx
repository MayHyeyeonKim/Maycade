import { Box, Typography, TextField } from "@mui/material";

interface PlayerSettingsProps {
  player1: string;
  player2: string;
  onPlayer1Change: (value: string) => void;
  onPlayer2Change: (value: string) => void;
  player1Label?: string;
  player2Label?: string;
  player1Color?: string;
  player2Color?: string;
}

const PlayerSettings = ({
  player1,
  player2,
  onPlayer1Change,
  onPlayer2Change,
  player1Label = "X",
  player2Label = "O",
  player1Color = "#00ff00",
  player2Color = "#00ff00ff",
}: PlayerSettingsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        m: 2,
        backgroundColor: "#000000",
        p: 2,
        borderRadius: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: player1Color, fontWeight: "bold" }}
        >
          {player1Label}
        </Typography>
        <TextField
          label="Player 1"
          value={player1}
          onChange={(e) => onPlayer1Change(e.target.value)}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: player1Color,
              },
              "&:hover fieldset": {
                borderColor: player1Color,
              },
              "&.Mui-focused fieldset": {
                borderColor: player1Color,
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: player2Color, fontWeight: "bold" }}
        >
          {player2Label}
        </Typography>
        <TextField
          label="Player 2"
          value={player2}
          onChange={(e) => onPlayer2Change(e.target.value)}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: player2Color,
              },
              "&:hover fieldset": {
                borderColor: player2Color,
              },
              "&.Mui-focused fieldset": {
                borderColor: player2Color,
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PlayerSettings;
