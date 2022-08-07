import SectionTitle from 'components/SectionTitle';
import React from 'react'
import styled from 'styled-components';
import SkillBlock from './SkillBlock';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;
`;
const SkillsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

const SkillsSection = () => {
  return (
    <Section id='skills'>
        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
            <SkillBlock title={"HTML5"} icon={"logo-html5"} level={88} color={"#E93800"} />
            <SkillBlock title={"CSS3"} icon={"logo-css3"} level={88} color={"#0079E9"} />
            <SkillBlock title={"JavaScript"} icon={"logo-javascript"} level={85} color={"#E9B500"} />
            <SkillBlock title={"React JS"} icon={"logo-react"} level={80} color={"#3CBFB7"} />
            <SkillBlock title={"Node JS"} icon={"logo-nodejs"} level={70} color={"#19B400"} />
            <SkillBlock title={"Mongo DB"} src={"/icons/mongo.svg"} level={60} color={"#184D00"} />
            <SkillBlock title={"Figma"} icon={"logo-figma"} level={80} color={"#F1003E"} />
            <SkillBlock title={"Blender"} src={"/icons/blender.svg"} level={30} color={"#FB7941"} learning />
        </SkillsContainer>
    </Section>
  )
}

export default SkillsSection
