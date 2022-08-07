import styled from "styled-components"
import { useState, useEffect } from "react";
import Navbar from "./Navbar"

const StyledFixedNavbar = styled(Navbar)`
  position: fixed;
  height: 68px;
  top: ${props => props.show ? "0%" : "-100%"};
  background-color: var(--dark);
`

const FixedNavbar = ({ children }) =>{
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        window.scrollY > 300 ? setScroll(true) : setScroll(false);
      });
    }
  });

  return <StyledFixedNavbar show={scroll}>{children}</StyledFixedNavbar>
}

export default FixedNavbar
