import { ThemeProvider, createTheme } from "@mui/material/styles";
import Game from "./components/Game";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
}

export default App;
