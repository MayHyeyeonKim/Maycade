import { Box, Button } from "@mui/material";
import { forwardRef, useRef } from "react";

interface BoardProps {
  board: Array<"X" | "O" | null>;
  onClick: (i: number) => void;
  size: number;
}

const CustomButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>((props, ref) => <Button component="button" {...props} ref={ref} />);

const Board = ({ board, onClick, size }: BoardProps) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (i: number) => {
    onClick(i);
    buttonRefs.current[i]?.focus();
  };

  const buttonSize = Math.max(50, 400 / size);

  const renderSquare = (i: number) => (
    <CustomButton
      key={i}
      variant="outlined"
      ref={(el) => {
        buttonRefs.current[i] = el as HTMLButtonElement | null;
      }}
      onClick={() => handleClick(i)}
      sx={{ width: buttonSize, height: buttonSize }}
      disabled={!!board[i]}
    >
      {board[i]}
    </CustomButton>
  );

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, ${buttonSize}px)`,
          gap: 1,
        }}
      >
        {board.map((_, idx) => renderSquare(idx))}
      </Box>
    </Box>
  );
};

export default Board;
