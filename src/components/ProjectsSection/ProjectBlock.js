import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Block = styled(motion.div)`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  padding: 10px;
  background-color: var(--dark);
  box-shadow: 0 2px 20px #0009;
  position: relative;
  cursor: pointer;

  &:hover > span {
    opacity: 1;
  }

  & > span {
    font-size: 1.5rem;
    background-color: var(--blue);
    border-radius: 50%;
    position: absolute;
    width: 45px;
    height: 45px;
    top: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    z-index: 2;
    opacity: 1;
  }
  & > span:hover {
    transform: scale(1.1);
  }

  @media (min-width: 900px) {
    width: 350px;

    & > span{
      opacity: 0;
    }
  }
`;
const ProjectImage = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
export const ProjectInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ProjectTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--pink);
`;
export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--white);
  opacity: 0.7;
`;

const ProjectBlock = ({ image, title, description, set, link, repository }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", () => {
        const container = document.getElementById(`${title}-project`);
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
      id={`${title}-project`}
      animate={{
        opacity: show ? 1 : 0,
        x: show ? 0 : -25,
        transition: { duration: 0.2 },
      }}
      onClick={()=> set({ link, repository })}
    >
      <span title="View Project">
        <ion-icon name="eye" />
      </span>
      <ProjectImage>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          alt= {`${title} Project Preview`}
        />
      </ProjectImage>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectInfo>
    </Block>
  );
};

export default ProjectBlock;
