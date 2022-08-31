import FooterButton from "./FooterButton";
import List from "../media/list.svg";
import Account from "../media/account.svg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const signedIn = useSelector((state) => state.user.isSignedIn);

  if (signedIn) {
    return (
      <FooterWrapper>
        <NavLinkStyled to="/list">
          <FooterButton iconSrc={List} text="List"></FooterButton>
        </NavLinkStyled>
        <NavLinkStyled to="/account">
          <FooterButton iconSrc={Account} text="Account"></FooterButton>
        </NavLinkStyled>
      </FooterWrapper>
    );
  } else {
    return (
      <>
        <FooterWrapper>
          <NavLinkStyled to="/login">
            <FooterButton iconSrc={Account} text="Login"></FooterButton>
          </NavLinkStyled>
        </FooterWrapper>
      </>
    );
  }
};

const FooterWrapper = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
`;

export default Footer;
