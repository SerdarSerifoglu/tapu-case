import FooterButton from "./FooterButton";
import List from "../media/list.svg";
import Account from "../media/account.svg";

import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterButton iconSrc={List} text="List"></FooterButton>
        <FooterButton iconSrc={Account} text="Account"></FooterButton>
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
