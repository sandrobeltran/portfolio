import Image from "next/image";
import styled from "styled-components";
import Button from "components/Button";
import { motion } from "framer-motion";
import TopSkills from "./TopSkills";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 30px 0;
  position: relative;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    padding: 0;
  }
`;
const HomeIllustration = styled.div`
  width: 100%;
  height: 40%;
  position: relative;

  @media (min-width: 900px) {
    width: 50%;
    height: 100%;
  }
`;
const IllustrationElement = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const IllustrationBackground = styled(IllustrationElement)`
  z-index: 0;
`;
const IllustrationLines = styled(IllustrationElement)`
  z-index: 2;
`;
const IllustrationPlanet = styled(IllustrationElement)`
  width: 40%;
  height: 40%;
  top: 30px;
  z-index: 1;
`;
const IllustrationRocket = styled(IllustrationElement)`
  width: 90%;
  height: 90%;
  right: 0;
  bottom: -20px;
  z-index: 1;

  @media (min-width: 900px) {
    height: 80%;
    bottom: 0;
  }
`;

const TitleContainer = styled.div`
  max-height: fit-content;
  color: var(--white);
  font-family: "Syne", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  & h1 {
    width: 80%;
    font-weight: 800;
    text-align: center;
    font-size: 1.6rem;
  }
  & span {
    color: var(--pink);
  }

  @media (min-width: 900px) {
    width: 50%;
    height: 80%;
    align-items: flex-start;
    padding-left: 70px;
    justify-content: center;
    margin: none;

    & h1 {
      text-align: left;
      font-size: 3rem;
    }
  }
`;
const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 900px) {
    width: 100%;
    flex-direction: row;
  }
`;

export default function HomeSection() {
  const navigateTo = (id) => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const section = document.getElementById(id);
      const scroll = section.offsetTop;
      window.scrollTo(0, scroll - 50);
    }
  };

  return (
    <Section id="home">
      <HomeIllustration>
        <IllustrationBackground
          animate={{
            y: [-4, 4, -4],
            rotateZ: [-2, 2, -2],
            transition: { repeat: Infinity, duration: 8 },
          }}
        ><Image src={"/background.svg"} layout="fill" objectFit="contain" objectPosition={"center"} alt="Home Bakground Blob" priority={true} /></IllustrationBackground>
        <IllustrationLines
          animate={{
            y: [4, -4, 4],
            transition: { repeat: Infinity, duration: 2 },
          }}
        ><Image src={"/lines.svg"} layout="fill" objectFit="contain" objectPosition={"center"} alt="Home Background Lines" priority={true} /></IllustrationLines>
        <IllustrationPlanet
          animate={{
            x: [5, -5, 5],
            y: [-4, 4, -4],
            transition: { repeat: Infinity, duration: 4 },
          }}
        ><Image src={"/planet.svg"} layout="fill" objectFit="contain" objectPosition={"center"} alt="Home Background Planet" priority={true} /></IllustrationPlanet>
        <IllustrationRocket
          animate={{
            x: [-8, 8, -8],
            y: [-6, 6, -6],
            transition: { repeat: Infinity, duration: 4 },
          }}
        ><Image src={"/rocket.svg"} layout="fill" objectFit="contain" objectPosition={"center"} alt="Home Background Rocket" priority={true} /></IllustrationRocket>
      </HomeIllustration>
      <TitleContainer>
        <motion.h1
          animate={{
            x: [-2, 2, -2],
            y: [2, -2, 2],
            transition: { repeat: Infinity, duration: 5 },
          }}
        >
          I'm <span>Sandro</span>, <br></br>
          Frontend Developer
        </motion.h1>
        <ButtonsContainer>
          <Button
            hierarchy={"primary"}
            animate={{
              rotate: [0, 5, -5, 5, 0, 0, 0, 0, 0],
              transition: { repeat: Infinity, duration: 3, ease: "linear" },
            }}
            onClick={() => navigateTo("projects")}
          >
            <ion-icon name="briefcase" /> View Projects
          </Button>
          <Button hierarchy={"secondary"} onClick={() => navigateTo("contact")}>
            <ion-icon name="call" /> Contact Me
          </Button>
        </ButtonsContainer>
      </TitleContainer>
      <TopSkills />
    </Section>
  );
}
