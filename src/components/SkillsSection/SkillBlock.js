import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const Block = styled(motion.div)`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  background-color: var(--dark);
  box-shadow: 0 2px 20px #0009;
  overflow: hidden;
`;
const SkillInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  gap: 10px;
  padding: 0 15px;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--dark);
  color: var(--white);
  position: relative;

  &::after{
    width: 90%;
    height: .5px;
    background-color: #f7f7f799;
    border-radius: 20px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
const SkillTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
`;
const Learning = styled.p`
  position: absolute;
  right: 15px;
  font-size: 0.9rem;
  opacity: .7;
`;
const SkillLevelContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    width: 90%;
    height: 20px;
    border-radius: 10px;
    background-color: #a9a9a9;
    position: relative;
  }
  & span::after {
    transition: all 1s;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.show ? `${props.level}%` : "0%"};
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 10px;
  }
`;

const SkillBlock = ({ title, icon, level, color, src, learning }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", () => {
        const container = document.getElementById(`${title}-skill`);
        const scroll = container.offsetTop - (window.innerHeight / 1.2);
        if (window.scrollY > scroll) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    }
  }, []);


  return (
    <Block id={`${title}-skill`} animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20, transition: { duration: .2 } }} >
      <SkillInfo>
        {src ? <ion-icon src={src} alt={`${title} Icon`} /> : <ion-icon name={icon} alt={`${title} Icon`} />}
        <SkillTitle>{title}</SkillTitle>
        {learning ? <Learning>Learning</Learning> : null}
      </SkillInfo>
      <SkillLevelContainer level={level} color={color} show={show} >
        <span></span>
      </SkillLevelContainer>
    </Block>
  );
};

export default SkillBlock;
