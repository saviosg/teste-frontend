import styled from "styled-components";
import { ReactComponent as LogoBlackWhiteSvg } from "../static/logo_blackwhite.svg";
import {Separator} from "./Separator";
import {NavList} from "./Nav";
import { ReactComponent as FacebookIcon } from "../static/001-facebook.svg";
import { ReactComponent as TwitterIcon } from "../static/003-twitter.svg";
import { ReactComponent as InstagramIcon } from "../static/004-instagram.svg";

const StyledFooter = styled.div`
  background-color: #1E2833;
  display: flex;
  font-family: DM Sans, sans-serif;
`;

const FooterSection = styled.div`
  margin: 45px auto;
  display: flex;
  color: #fff;
`;

const StyledFooterNav = styled(FooterSection.withComponent('nav'))`
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  a:visited {
    color: #fff;
  }
`;

const FooterSeparator = styled(Separator)`
  opacity: 0.1;
`;

const FooterContainer = styled.footer`
  margin: 0 auto;
  width: 55%;
`;

const FooterNav = () => {
  return (
    <StyledFooterNav aria-label="Menu do rodapé">
      <NavList>
        <li>
          <a href=".">Terms & Conditions</a>
        </li>
        <li>
          <a href=".">Privacy Policy</a>
        </li>
      </NavList>
      <NavList>
        <li>
          <a target="_blank" rel="noreferrer" href="https://facebook.com"><FacebookIcon/></a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com"><TwitterIcon/></a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://instagram.com"><InstagramIcon/></a>
        </li>
      </NavList>
    </StyledFooterNav>
  );
}

const FooterLogo = styled(FooterSection)`
  font-size: x-large;
  gap: 10px;
`;

export const Footer = () => {

  return (
  <StyledFooter>
    <FooterContainer>
      <FooterLogo>
        <LogoBlackWhiteSvg/>
        LibSlide
      </FooterLogo>
      <FooterSeparator/>
      <FooterNav/>
    </FooterContainer>
  </StyledFooter>
  );
};
