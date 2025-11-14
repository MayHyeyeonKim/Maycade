import Box from "@mui/material/Box";

interface ScoreProps {
  winner: string | null;
  player1Score: number;
  player2Score: number;
}

const Score = ({ winner, player1Score, player2Score }: ScoreProps) => {
  console.log("Score component rendered with winner:", winner);

  return (
    <>
      <p>Score </p>
      <Box sx={{ border: "1px solid white", padding: 2 }}>
        {player1Score} : {player2Score}
      </Box>
    </>
  );
};

export default Score;
