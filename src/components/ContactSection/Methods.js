import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const Container = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: var(--blue);
`;
const MethodsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  & div, & div a {
    font-size: 2.5rem;
    background-color: var(--dark);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 2px 20px #0009;
  }
  & div:hover {
    transform: scale(1.1) !important;
  }
`;

const Methods = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", () => {
        const container = document.getElementById("methodsContainer");
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
    <Container id={"methodsContainer"}>
      <MethodsContainer>
        <motion.div animate={{ opacity: show ? 1 : 0, scale: show ? [1, 1.3, 1] : 1 }} alt="Linkedin Logo" title="Linkedin" >
          <a href={"https://www.linkedin.com/in/sandro-beltran-61a004248/"} target={"_blank"}>
            <ion-icon name="logo-linkedin" />
          </a>
        </motion.div>
        <motion.div animate={{ opacity: show ? 1 : 0, scale: show ? [1, 1.3, 1] : 1, transition: { delay: .2 } }} alt="Twitter Logo" title="Twitter" >
          <a href={"https://twitter.com/SandroBeltrn5"} target={"_blank"}>
            <ion-icon name="logo-twitter" />
          </a>
        </motion.div>
        <motion.div animate={{ opacity: show ? 1 : 0, scale: show ? [1, 1.3, 1] : 1, transition: { delay: .2 } }} alt="Gihub Logo" title="Github" >
          <a href={"https://github.com/SandroJ2"} target={"_blank"}>
            <ion-icon name="logo-github" />
          </a>
        </motion.div>
      </MethodsContainer>
    </Container>
  );
};

export default Methods;
