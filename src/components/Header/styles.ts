import { Link } from "react-router-dom";
import styled from "styled-components";

type NavLabelProps = {
  active: boolean;
};

export const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
`;

export const NavOption = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
`;

export const NavLabel = styled.span<NavLabelProps>`
  color: ${(props) =>
    props.active
      ? props.theme.palette.secondary
      : props.theme.palette.text.primary};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.palette.secondary};
  }
`;
