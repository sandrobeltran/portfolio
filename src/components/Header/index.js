import Navbar from "./Navbar";
import FixedNavbar from "./FixedNavbar";
import styled from "styled-components";
import Image from "next/image";
import Menu from "./Menu";
import { useState } from "react";
import { motion } from "framer-motion";

const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  position: absolute;
  z-index: 100;
  color: var(--white);
`;

const MenuIcon = ({ toggle, ...props }) => {
  return (
    <div {...props}>
      <motion.span
        animate={{
          y: toggle ? 11 : 0,
          width: toggle ? "100%" : "60%",
          rotate: toggle ? -35 : 0,
          transition: { ease: "linear" },
        }}
      />
      <motion.span
        animate={{ scale: toggle ? 0 : 1, transition: { ease: "linear" } }}
      />
      <motion.span
        animate={{
          y: toggle ? -11 : 0,
          width: toggle ? "100%" : "60%",
          rotate: toggle ? 35 : 0,
          transition: { ease: "linear" },
        }}
      />
    </div>
  );
};
const MenuButton = styled(MenuIcon)`
  width: 34px;
  height: 34px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  & span {
    background-color: var(--white);
    width: 60%;
    height: 3px;
    border-radius: 20px;
  }
  & span:nth-child(2) {
    width: 100%;
    transform-origin: center;
  }
  & span:nth-child(3) {
    align-self: flex-end;
  }
`;
const BrandName = styled.p`
  font-size: 1.3rem;
  font-family: "Syne", sans-serif;
  cursor: pointer;
  user-select: none;
`;

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const backToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      setToggleMenu(false);
    }
  };

  return (
    <StyledHeader>
      <Navbar>
        <BrandName title="Back to Top" onClick={() => backToTop()}><Image src={"/logo.svg"} width={90} height={40} alt={"Personal Brand Logo"} /></BrandName>
        <MenuButton
          title={"Menu"}
          toggle={toggleMenu}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </Navbar>
      <FixedNavbar>
        <BrandName title="Back to Top" onClick={() => backToTop()}><Image src={"/logo.svg"} width={90} height={40} alt={"Personal Brand Logo"} /></BrandName>
        <MenuButton
          title={"Menu"}
          toggle={toggleMenu}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </FixedNavbar>
      <Menu show={toggleMenu} set={setToggleMenu}></Menu>
    </StyledHeader>
  );
};

export default Header;
