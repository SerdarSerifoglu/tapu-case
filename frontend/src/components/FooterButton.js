import styled from "styled-components";

const FooterButton = ({ iconSrc, text }) => {
  return (
    <>
      <Button>
        <Image src={iconSrc} />
        <Text>{text}</Text>
      </Button>
    </>
  );
};
const Image = styled.img`
  max-height: 18px;
  max-width: 18px;
`;

const Button = styled.div`
  height: 50px;
  width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 12px;
`;

export default FooterButton;
