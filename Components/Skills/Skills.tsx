import styled from "@emotion/styled";
import React from "react";
import Skill from "./Skill";

const skills_list = [
  { img: "/Images/HTML5.svg", name: "HTML" },
  { img: "/Images/CSS.svg", name: "CSS" },
  { img: "/Images/javascript.svg", name: "Javascript" },
  { img: "/Images/typescript.svg", name: "Typescript" },
  { img: "/Images/react.svg", name: "React Js" },
  { img: "/Images/node.svg", name: "Node Js" },
  { img: "/Images/expressjs.png", name: "Express Js" },
  { img: "/Images/nextjs.svg", name: "Next Js" },
  { img: "/Images/python.svg", name: "Python" },
  { img: "/Images/django.svg", name: "Django" },
  { img: "/Images/mysql.svg", name: "MySql" },
  { img: "/Images/mongodb.svg", name: "Mongodb" },
];

const HeadingDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  alignItems:"center",
  padding: "20px 30px",
  "> h1 , > h2": {
    fontFamily: "sans-serif",
    color: "var(--text-color-1)",
  },
});

const SkillsDiv = styled("div")({
  display: "flex",
  background: "var(--color-2)",
  flexWrap: "wrap",
  padding: 10,
  "> div": {
    width: "25%",
  },
  "@media screen and (max-width:600px)": {
    "> div": {
      width: "50%",
    },
  },
});

export default function Skills() {
  return (
    <>
      <HeadingDiv data-aos="fade-up" >
        <h1 className="1st_h1">Skills</h1>
        <h2 className="2nd_h1">My Top Skills</h2>
      </HeadingDiv>
      <SkillsDiv >
        {skills_list.map((item, i) => (
          <div data-aos="fade-up" key={i + "kdfj"}>
            <Skill SkillProps={item} />
          </div>
        ))}
      </SkillsDiv>
    </>
  );
}
