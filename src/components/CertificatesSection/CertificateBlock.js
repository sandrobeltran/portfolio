import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "components/Button";

const Block = styled(motion.div)`
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
  background-color: var(--dark);
  box-shadow: 0 2px 20px #0009;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    height: 280px;
    flex-direction: row;
    gap: 25px;
  }
`;
const CertificateImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  @media (min-width: 900px) {
    width: 40%;
    height: 100%;
  }
`;
const CertificateInfo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 900px) {
    width: 60%;
    height: 100%;
    padding: 20px 0;
  }
`;
const CertificateTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--pink);
`;
const CertificateDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--white);
  opacity: 0.7;

  @media (min-width: 900px) {
    width: 80%;
  }
`;
const CertificateButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 10px;
  gap: 10px;

  @media (min-width: 900px) {
    justify-content: flex-start;
    padding: 0;
    gap: 25px;
  }
`;
const CertificateButton = styled.a`
  font-size: 2.5rem;
  color: ${(props) => (props.primary ? "var(--dark)" : "var(--pink)")};
  background-color: ${(props) =>
    props.primary ? "var(--pink)" : "var(--dark)"};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--pink);
  cursor: pointer;

  &:hover {
    ${(props) => (props.primary ? "filter: brightness(.65)" : null)};
    background-color: var(--pink);
    color: var(--dark);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
const PcButton = styled(Button)`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const CertificateBlock = ({ image, title, description, download, view }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", () => {
        const container = document.getElementById(`${title}-certificate`);
        const scroll = container.offsetTop - window.innerHeight / 1.2;

        if (window.scrollY > scroll) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    }
  }, []);

  return (
    <Block
      id={`${title}-certificate`}
      animate={{
        opacity: show ? 1 : 0,
        x: show ? 0 : 25,
        transition: { duration: 0.2 },
      }}
    >
      <CertificateImage>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          alt= {`${title} Certificate Preview`}
        />
      </CertificateImage>
      <CertificateInfo>
        <CertificateTitle>{title}</CertificateTitle>
        <CertificateDescription>{description}</CertificateDescription>
        <CertificateButtonsContainer>
          <a download={`${title}.pdf`} href={download} >
            <PcButton hierarchy={"primary"}>
              <ion-icon name="cloud-download" />
              Download
            </PcButton>
          </a>
          <a target={"_blank"} href={view} >
            <PcButton hierarchy={"secondary"}>
              <ion-icon name="eye" />
              View Course
            </PcButton>
          </a>

          <CertificateButton primary download={`${title}.pdf`} href={download}>
            <ion-icon name="cloud-download" />
          </CertificateButton>
          <CertificateButton target={"_blank"} href={view} >
            <ion-icon name="eye" />
          </CertificateButton>
        </CertificateButtonsContainer>
      </CertificateInfo>
    </Block>
  );
};

export default CertificateBlock;
