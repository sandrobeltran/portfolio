import styled from "styled-components";
import { motion } from "framer-motion"

const Btn = ({ hierarchy, children, ...props }) => {
  return <motion.button {...props}>{children}</motion.button>;
};

const Button = styled(Btn)`
  border-radius: 5px;
  border: ${props => props.hierarchy === "terciary" ? "none" : " 1px solid var(--pink)" };
  background-color: ${props => props.hierarchy === "primary" ? "var(--pink)" : "transparent"};
  font-size: 1rem;
  padding: 15px 25px;
  color: ${props => props.hierarchy === "primary" ? "var(--white)" : "var(--pink)"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: ${props => props.hierarchy === "terciary" ? "underline" : "none"};
  gap: 10px;
  cursor: pointer;
  width: fit-content;
  
  &:hover{
    background-color: ${props => props.hierarchy === "terciary" ? "transparent" : "var(--pink)"};
    filter: ${props => props.hierarchy === "primary" ? "brightness(.75)" : "none"};
    ${props => props.hierarchy === "secondary" ? "color: var(--white)" : null};
    text-decoration: none;
  }
`;

export default Button;