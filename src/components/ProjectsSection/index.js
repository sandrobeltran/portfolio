import Image from "next/image";
import styled from "styled-components";
import Button from "components/Button";
import SectionTitle from "components/SectionTitle";
import ProjectBlock from "./ProjectBlock";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;
`;
const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export default function ProjectsSection() {
  const [modal, setModal] = useState(null);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        <ProjectBlock
          image={"/projects/memory_game_1.png"}
          title={"Memory Game"}
          description={"A mini memory game that i create using React JS."}
          link={"https://memory-game-sandroj2.vercel.app/"}
          repository={"https://github.com/SandroJ2/memory-game"}
          set={setModal}
        />
        <ProjectBlock
          image={"/projects/eaola_1.png"}
          title={"EAOLA"}
          description={"A static page for an art school from my location."}
          link={"https://eaola.vercel.app/"}
          repository={"https://github.com/SandroJ2/eaola"}
          set={setModal}
        />
        <ProjectBlock
          image={"/projects/palettes_generator_1.png"}
          title={"Colorizzed"}
          description={"An online palettes generator and community."}
          link={"https://palettes-generator.vercel.app/"}
          repository={"https://github.com/SandroJ2/palettes-generator"}
          set={setModal}
        />
        <ProjectBlock
          image={"/projects/weather_app_1.png"}
          title={"Weather App"}
          description={"A project that can say the weather in the world."}
          link={"https://weather-app-sandroj2.vercel.app/"}
          repository={"https://github.com/SandroJ2/weather-app"}
          set={setModal}
        />
      </ProjectsContainer>
      <ProjectModal set={setModal} project={modal} />
    </Section>
  );
}
