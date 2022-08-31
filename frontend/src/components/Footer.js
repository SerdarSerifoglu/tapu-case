import FooterButton from "./FooterButton";
import List from "../media/list.svg";
import Account from "../media/account.svg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <NavLink to="/list">
          <FooterButton iconSrc={List} text="List"></FooterButton>
        </NavLink>
        <NavLink to="/account">
          <FooterButton iconSrc={Account} text="Account"></FooterButton>{" "}
        </NavLink>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
