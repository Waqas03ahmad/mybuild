import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainComponent from "./MainIndex";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const modech = useSelector((e) => e.counter.mode);
  const darkTheme = createTheme({
    palette: {
      mode: modech ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainComponent />
    </ThemeProvider>
  );
}
