import Button from "@mui/material/Button";

interface CustomButtonProps {
  name: string;
  img: string;
  onClick: (choice: string) => void;
}

const CustomButton = ({ name, img, onClick }: CustomButtonProps) => {
  return (
    <>
      <Button
        variant="contained"
        // color="secondary"
        onClick={() => onClick(name)}
        sx={{ m: 1, backgroundColor: "#808080" }}
      >
        <img
          src={img}
          alt={name}
          style={{
            width: 50,
            height: 50,
            objectFit: "contain",
            marginBottom: 8,
            borderRadius: "50%",
            margin: 4,
          }}
        />
        {name}
      </Button>
    </>
  );
};

export default CustomButton;
