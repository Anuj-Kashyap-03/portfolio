import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";


interface Props {
  [key: string]: any;
}
const Path: React.FC<Props> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgb(228, 47, 47)"
    strokeLinecap="round"
    {...props}
  />
);


const Button = styled(motion.button)({
  zIndex:10,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background: "var(--color-1)",
  position: 'fixed',
  top: 18,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: 50,
})


interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (

  <Button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        transition={{ duration: 0.1 }}

      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </Button>
);
