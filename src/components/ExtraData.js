import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 450px;
  height: fit-content;
  gap: 15px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 25px;
  background-color: var(--dark);
  box-shadow: 0 2px 20px #0009;

  @media (min-width: 900px) {
    max-width: 100%;
  }
`;
const Title = styled.h4`
  color: var(--white);
  font-size: 1.5rem;
`;
const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DataBlock = styled(motion.div)`
  width: 80px;
  height: 80px;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: var(--blue);

  & span {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--white);
  }

  @media (min-width: 900px) {
    width: 30%;
    height: 150px;
  }
`;

const ExtraData = ({ items, title }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", () => {
        const container = document.getElementById("thingsContainer");
        const scroll = container.offsetTop / window.innerHeight / 3;
        if (window.scrollY > scroll) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    }
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <DataContainer id={"thingsContainer"}>
        {items.map((item, index) => (
          <DataBlock
            key={index}
            animate={{ opacity: show ? 1 : 0, scale: show ? [1, 1.3, 1] : 1, transition: { delay: 0 + (.2 * index) } }}
          >
            <ion-icon name={item.icon} />
            <span>{item.label}</span>
          </DataBlock>
        ))}
      </DataContainer>
    </Container>
  );
};

export default ExtraData;
