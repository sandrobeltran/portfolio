import Image from "next/image";
import styled from "styled-components";
import Button from "components/Button";
import SectionTitle from "components/SectionTitle";
import CertificateBlock from "./CertificateBlock";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;
`;
const CertificatesContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

export default function CertificatesSection() {
  return (
    <Section id="certificates">
      <SectionTitle>Certificates</SectionTitle>
      <CertificatesContainer>
        <CertificateBlock
          image={"/certificates/react.png"}
          title={"React JS Udemy Course"}
          description={
            "A full React JS course imparted by Nicolás Schürmann. In this course i also learned some React JS tools like styled-components, the context API, Redux and Next JS."
          }
          download={"/certificates/react.pdf"}
          view={"https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos/"}
        />
        <CertificateBlock
          image={"/certificates/ux_ui.png"}
          title={"UI/UI Crehana Course"}
          description={
            "An intoductory UX/UI course where i learned the fundamentals, the process to create a good design and how to use a excellent tool like Figma."
          }
          download={"certificates/ux_ui.pdf"}
          view={"https://www.crehana.com/cursos-online-ui-ux/fundamentos-de-diseno-de-interfaces-ui/"}
        />
        <CertificateBlock
          image={"/certificates/js_jquery.png"}
          title={"JavaScript & jQuery Crehana Course"}
          description={
            "A full course of web layout using HTML5, CSS3, and jQuery. In this course i also learned how to release a site with a free hosting service."
          }
          download={"/certificates/js_jquery.pdf"}
          view={"https://www.crehana.com/cursos-online-front-end/maquetacion-de-sitios-web-dinamicos-con-javascript-y-jquery-desde-cero/"}
        />
        <CertificateBlock
          image={"/certificates/unity_2d.png"}
          title={"Domestika Unity 2D Course"}
          description={
            "A complete course of 2d videogames development with Unity where i also learned the basic of C# programing language"
          }
          download={"/certificates/unity_2d.pdf"}
          view={"https://www.domestika.org/es/courses/716-introduccion-a-unity-para-videojuegos-2d"}
        />
      </CertificatesContainer>
    </Section>
  );
}
