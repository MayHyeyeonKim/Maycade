import Box from "@mui/material/Box";

interface BoxProps {
  name: string;
  choice: string | null;
}

const CustomBox = ({ name, choice }: BoxProps) => {
  return (
    <Box>
      <p> Box component!</p>
      name: {name}
      choice: {choice}
    </Box>
  );
};

export default CustomBox;
