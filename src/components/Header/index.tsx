import { Link, useLocation } from "react-router-dom";
import ThemeButton from "../ThemeButton";

import { Container, Navigation, NavOption, NavLabel } from "./styles";

const Header = () => {
  const location = useLocation();

  const navList = [
    {
      name: "< Intro />",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Champions",
      path: "/champions",
    },
    {
      name: "Other Games",
      path: "/othergames",
    },
  ];

  return (
    <Container>
      <Link to="/"></Link>
      <Navigation>
        {navList.map((item) => (
          <NavOption key={item.name} to={item.path}>
            <NavLabel active={location.pathname === item.path}>
              {item.name}
            </NavLabel>
          </NavOption>
        ))}
        <ThemeButton />
      </Navigation>
    </Container>
  );
};

export default Header;
