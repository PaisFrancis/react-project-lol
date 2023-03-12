import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { AppContext } from "./contexts/AppContext";
import { Container, OutletContainer } from "./styles";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const { darkMode } = useContext(AppContext);
  // console.log("darkMode", darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
