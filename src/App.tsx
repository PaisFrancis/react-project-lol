import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { AppContext } from "./contexts/AppContext";
import { Container } from "./styles";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const { darkMode } = useContext(AppContext);
  // console.log("darkMode", darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;
