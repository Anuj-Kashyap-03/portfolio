import * as React from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import {
  FaBriefcase,
  FaAddressCard,
  FaScrewdriver,
  FaHome,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: .07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: .05, staggerDirection: -1 },
  },
};

const variants_menuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Motiondiv = styled(motion.div)({
  position: "relative",
  top: 100,
  height: "calc(100vh-200px)",
});

const NavigationLinks = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "none",
  gap: "10px",
  padding: "25px",
  "& .activate": {
    background: "none",
    "& > a": {
      background: "var(--active-color-1)",
      color: "var(--text-color-2)",
    },
  },
  "& > button": {
    border: "none",
    padding: "0",
    " : hover": {
      background: "none",
    },
    "& >button": {
      border: "none",
      padding: "0",
    },
  },
});


const list_of_NavItems = [
  { icon: <FaHome />, link: "#home", name: "Home" },
  { icon: <FaScrewdriver />, link: "#skills", name: "Skills" },
  { icon: <FaBriefcase />, link: "#work", name: "My Work" },
  { icon: <FaAddressCard />, link: "#contact", name: "Contact Me" },
];

const Ids = ["home", "skills", "work", "contact"];





export default function NavItems() {
  const [activate, setactivate] = React.useState("home");

  const handleClick = (value: String) => {
    setactivate(`${value}`);
  };

  React.useEffect(() => {
    function handleScroll() {
      for (let id of Ids) {
        const element = document.getElementById(id);
        if (element) {
          const elementPos = element.offsetTop;
          if (window.scrollY + 3 >= elementPos) {
            setactivate(id);
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Motiondiv variants={variants}>
      <Divider />
      <NavigationLinks>
        {list_of_NavItems.map((i, index) => (
          <Button
            variants={variants_menuItem}
            className={activate === Ids[index] ? "activate" : ""}
            component={motion.button}
            fullWidth={true}
            key={Ids[index]}
            onClick={() => handleClick(Ids[index])}
          >
            <MenuItem i={i} />
          </Button>
        ))}
      </NavigationLinks>
    </Motiondiv>
  );
}
