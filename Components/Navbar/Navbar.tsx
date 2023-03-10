import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import styled from "@emotion/styled";
import NavItems from "./NavItems";

const sidebar = {
  open: {
    clipPath: `circle(1200px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavbarDiv = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 5,
  overflowY: "scroll",
  height: "100vh",
  width: 300,
  maxWidth: "100vw",
  backgroundColor: "var(--color-1)",
});

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <NavbarDiv variants={sidebar}>
        <NavItems />
      </NavbarDiv>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
