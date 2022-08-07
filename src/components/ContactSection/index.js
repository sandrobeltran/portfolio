import SectionTitle from "components/SectionTitle";
import styled from "styled-components";
import Methods from "./Methods";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
`;
const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & h4{
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    color: var(--white);
  }
  & span{
    color: #f7f7f788;
    font-size: .9rem;
    font-weight: lighter;
  }
`;

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Container>
        <h4>You can find me in any of my social profiles.</h4>
        <Methods />
        <span>Or to my Email</span>
        <h4>devsandrobeltran@gmail.com</h4>
      </Container>
    </Section>
  );
};

export default ContactSection;
