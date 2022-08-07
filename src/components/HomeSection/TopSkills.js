import styled from "styled-components";
import { motion } from "framer-motion";

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
    position: absolute;
    height: 200px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 100%;
  }
  @media (max-height: 600px) {
    height: 150px;
    bottom: 5px;
  }
`;
const Title = styled.h4`
  color: var(--white);
  font-size: 1.5rem;

  @media (max-height: 600px) {
    font-size: 1rem;
  }
`;
const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DataBlock = styled(motion.div)`
  width: 30%;
  height: 100%;
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
`;

const TopSkills = () => {

  return (
    <Container>
      <Title>Top Skills</Title>
      <DataContainer id={"thingsContainer"}>
        <DataBlock
        initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: [1, 1.3, 1] }}
        >
          <ion-icon name="logo-react" />
          <span>React JS</span>
        </DataBlock>
        <DataBlock
        initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: [1, 1.3, 1], transition: { delay: .2 } }}
        >
          <ion-icon name="albums" />
          <span>UX/UI</span>
        </DataBlock>
        <DataBlock
        initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: [1, 1.3, 1], transition: { delay: .4 } }}
        >
          <ion-icon name="logo-nodejs" />
          <span>Node JS</span>
        </DataBlock>
      </DataContainer>
    </Container>
  );
};

export default TopSkills;
