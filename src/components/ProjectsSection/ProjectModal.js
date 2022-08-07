import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/Button";

const Modal = styled(motion.div)`
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: #12121288;
  position: fixed;
  inset: 0;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const Container = styled(motion.div)`
  width: 90%;
  height: 30%;
  background-color: var(--dark);
  box-shadow: 0 2px 20px #0009;
  border-radius: 20px;
  flex-direction: column;
  padding: 25px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;

  @media (min-width: 900px){
    height: 35%;
    width: 60%;
  }
`;
const CloseModal = styled.div`
  font-size: 3rem;
  color: var(--pink);
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 2;
`;
const Title = styled(motion.h4)`
  font-size: 1.3rem;
  color: var(--pink);
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectModal = ({ set, project }) => {
  return (
    <Modal
      initial={{ display: "none" }}
      animate={{
        display: project ? "flex" : "none",
        transition: {
          duration: 0.1,
          ease: "linear",
          delay: project ? 0 : 0.2,
        },
      }}
    >
      <Container
        initial={{ opacity: 0 }}
        animate={{
          opacity: project ? 1 : 0,
          y: project ? 0 : 20,
          transition: {
            duration: 0.1,
            ease: "linear",
          },
        }}
      >
        <CloseModal onClick={() => set(null)}>
          <ion-icon name="close" />
        </CloseModal>
        {project ? (
          <>
            <Title>Options</Title>
            <ButtonsContainer>
              <Button hierarchy={"primary"}><a href={project.link} target={"_blank"}>View Project</a></Button>
              <Button hierarchy={"secondary"}><a href={project.repository} target={"_blank"}>View GitHub</a></Button>
            </ButtonsContainer>
          </>
        ) : null}
      </Container>
    </Modal>
  );
};

export default ProjectModal;
