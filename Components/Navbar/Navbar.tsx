import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import styled from "@emotion/styled";
import NavItems from "./NavItems";
import { useDimensions } from "./Dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      type: "spring",
      delay: 0.1,
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
  width: 300,
  maxWidth: "100vw",
  backgroundColor: "var(--color-1)",
});

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      custom={height}
      ref={containerRef}
      animate={isOpen ? "open" : "closed"}
    >
      <NavbarDiv variants={sidebar}>
        <NavItems />
      </NavbarDiv>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
