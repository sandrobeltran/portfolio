import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  background-color: var(--dark);
  z-index: 101;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    align-items: center;
  }
`;
const Link = styled(motion.button)`
  font-size: 1.5rem;
  font-family: "Syne", sans-serif;
  text-align: center;
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  transition: filter 0.3s;
  position: relative;
  width: fit-content;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    transition: transform 0.15s;
    width: 100%;
    height: 2px;
    background-color: var(--pink);
    transform-origin: center;
    transform: scaleX(0);
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const Menu = ({ show, set }) => {
  const navigateTo = (id) => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      const section = document.getElementById(id);
      const scroll = section.offsetTop;
      window.scrollTo(0, scroll - 50);
      set(false);
    }
  };

  return (
    <Container
      animate={{
        x: show ? "0%" : "100%",
        transition: { duration: 0.1, ease: "easeOut" },
      }}
    >
      <ul>
        <li>
          <Link
            onClick={() => navigateTo("home")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.2, ease: "linear", duration: 0.1 },
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateTo("about")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.3, ease: "linear", duration: 0.1 },
            }}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateTo("projects")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.4, ease: "linear", duration: 0.1 },
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateTo("skills")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.5, ease: "linear", duration: 0.1 },
            }}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateTo("certificates")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.6, ease: "linear", duration: 0.1 },
            }}
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateTo("contact")}
            animate={{
              x: show ? 0 : -25,
              opacity: show ? 1 : 0,
              transition: { delay: 0.7, ease: "linear", duration: 0.1 },
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
