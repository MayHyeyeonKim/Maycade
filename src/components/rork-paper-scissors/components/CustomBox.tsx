import Box from "@mui/material/Box";

interface BoxProps {
  name: string;
}

const CustomBox = ({ name }: BoxProps) => {
  return (
    <Box>
      <p> Box component!</p>
      name: {name}
    </Box>
  );
};

export default CustomBox;
