import Button from "@mui/material/Button";

interface CustomButtonProps {
  name: string;
  onClick: (choice: string) => void;
}

const CustomButton = ({ name, onClick }: CustomButtonProps) => {
  return (
    <>
      <Button onClick={() => onClick(name)}>{name}</Button>
    </>
  );
};

export default CustomButton;
