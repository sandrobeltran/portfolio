import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-green);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  width: 120px;
  height: 100px;
  position: relative;
  display: flex;
  gap: 5px;
  justify-content: space-around;
`;
const Block = styled(motion.div)`
  width: 5%;
  height: 100%;
  background-color: var(--white);
`;

const animation = {};

const Loader = () => {
  return (
    <Container>
      <Center>
        {new Array(9).fill(undefined).map((und, index) => {
          return (
            <Block
              key={index}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 0],
                transition: {
                  delay: index - .9 * index,
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            />
          );
        })}
      </Center>
    </Container>
  );
};

export default Loader;
