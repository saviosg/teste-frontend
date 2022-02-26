import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../static/logo.svg";
import {NavList} from "./Nav";
import { ReactComponent as SearchIcon } from "../static/ico-loupe.svg";

const StyledHeader = styled.div`
  width: 60%;
  margin: 25px auto;
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
`;

const StyledNav = styled.nav`
  flex-grow: 2;

  a {
    color: #000;
    text-decoration: none;
  }
  
  a:visited {
    color: #000;
`;

const HeaderLogo = styled.header`
  flex-grow: 1;
`

const Nav = () => {
  return (
    <StyledNav aria-label="Menu principal">
      <NavList>
        <li>
          <a href="."><strong>Home</strong></a>
        </li>
        <li>
          <a href=".">About</a>
        </li>
        <li>
          <a href=".">Features</a>
        </li>
        <li>
          <a href=".">Pricing</a>
        </li>
        <li>
          <a href=".">Gallery</a>
        </li>
        <li>
          <a href=".">Team</a>
        </li>
        <li>
          <a href="."><SearchIcon/></a>
        </li>
      </NavList>
    </StyledNav>
  );
}

export const Header = () => {
  return (
  <StyledHeader>
    <HeaderLogo>
      <a href="." aria-label="Página inicial">
        <LogoSvg title="Bibbble"/>
      </a>
    </HeaderLogo>
    <Nav/>
  </StyledHeader>
  );
};
