import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import Image from "next/image";
import ExtraData from "components/ExtraData";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 900px) {
    justify-content: center;
    flex-direction: row;
    gap: 30px;
  }
`;
const MePhoto = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;

  @media (min-width: 900px) {
    width: 250px;
    height: 250px;
  }
`;
const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  @media (min-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`;
const MeName = styled.h4`
  font-size: 2rem;
  color: var(--white);
  font-weight: 700;

  & span {
    color: var(--pink);
  }
`;
const MePhrase = styled.p`
  width: 80%;
  max-width: 330px;
  font-size: 1.5rem;
  opacity: 0.8;
  font-style: italic;
  color: var(--white);

  @media (min-width: 900px) {
    width: 100%;
  }
`;

export default function AboutSection() {
  const items = [
    { icon: "color-palette", label: "Paint" },
    { icon: "game-controller", label: "Videogames" },
    { icon: "headset", label: "Music" },
  ];

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <Container>
        <MePhoto>
          <Image
            src={"/profile_photo.svg"}
            layout={"fill"}
            objectFit={"contain"}
            objectPosition={"center"}
            alt="Me Profile Photo"
          />
        </MePhoto>
        <MeContainer>
          <MeName>
            Hi👋,<br></br> I´m <span>Sandro Beltrán</span>
          </MeName>
          <MePhrase>
            “I’m a full stack junior developer specialized in frontend and
            tradicional artist. I use the MERN stack to create my projects. I
            enjoy be an autodidact, i enjoy to learn.”
          </MePhrase>
        </MeContainer>
      </Container>
      <ExtraData items={items} title={"Things I Like"} />
    </Section>
  );
}
