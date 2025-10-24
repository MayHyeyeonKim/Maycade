import Box from "@mui/material/Box";
import type { Choice } from "../types/choices";
import Typography from "@mui/material/Typography";

interface BoxProps {
  name: string;
  img?: string;
  choice?: Choice | null;
  winner?: string | null;
}

const CustomBox = ({ name, img, choice, winner }: BoxProps) => {
  return (
    <Box
      sx={{
        border: "1px solid white",
        borderRadius: 2,
        padding: 2,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: 150,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#fff" }}>
        {name}
      </Typography>
      {img && img !== "" && (
        <img
          src={img}
          alt={choice?.name}
          style={{ width: 80, height: 80, borderRadius: "50%" }}
        />
      )}
      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#fff" }}>
        {winner}
      </Typography>
    </Box>
  );
};

export default CustomBox;
