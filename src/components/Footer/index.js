import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  position: relative;
  color: var(--white);
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    
    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: var(--white);
      opacity: .2;
      width: 90%;
      height: 1px;
    }

    & p{
        font-weight: 600;
    }
    & p span{
      color: var(--pink);
    }
    & p span:hover{
      text-decoration: underline;
    }
    & span{
        opacity: .8;
    }
`

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <p>Made by <span><a href="https://www.linkedin.com/in/sandro-beltran-61a004248/" target={"_blank"} >Sandro Beltrán</a></span></p>
        <span>Copyright 2022</span>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
