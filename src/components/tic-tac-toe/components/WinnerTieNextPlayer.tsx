import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import { createPortal } from "react-dom";

interface WinnerTieNextPlayerProps {
  winner: "X" | "O" | "It's a tie!" | null;
  tie: boolean;
  isNext: boolean;
  player1: string;
  player2: string;
  onClose: () => void;
}

const WinnerTieNextPlayer = ({
  winner,
  tie,
  isNext,
  player1,
  player2,
  onClose,
}: WinnerTieNextPlayerProps) => {
  const open = !!winner || tie;

  const modalContent = (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {winner ? (
          <Alert
            // severity="success"
            sx={{
              backgroundColor: "white",
              color: "#B6CEB4",
              fontSize: "1.2rem",
              fontWeight: "bold",
              py: 2,
              px: 3,
              minWidth: "200px",
            }}
          >
            Congrat!! Winner is{" "}
            {winner === "X" ? player1 : winner === "O" ? player2 : winner}
          </Alert>
        ) : tie ? (
          <Alert
            // severity="info"
            sx={{
              backgroundColor: "white",
              color: "#BBDCE5",
              fontSize: "1.2rem",
              fontWeight: "bold",
              py: 2,
              px: 3,
              minWidth: "200px",
            }}
          >
            It's a Tie!
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );

  return (
    <>
      {open ? createPortal(modalContent, document.body) : null}
      {!open && (
        <Chip
          label={`Next Player: ${isNext ? player1 : player2}`}
          sx={{
            backgroundColor: isNext ? "#91ADC8" : "#BB6653",
            "& .MuiChip-label": {
              fontSize: "1.2rem",
              fontWeight: "bold",
            },
            py: 2,
            px: 3,
            minWidth: "200px",
          }}
        />
      )}
    </>
  );
};

export default WinnerTieNextPlayer;
