import styled from "@emotion/styled";
import Fab from "@mui/material/Fab";
import Link from "next/link";
import React from "react";

const HomeDiv = styled("div")({
  height: "100vh",
  width: "100%",
  position: "relative",
  ".content": {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "var(--text-color-3)",
    fontWeight: "800",
    fontFamily: "system-ui",
    alignItems: "center",
    backgroundImage: "url(/Backgrounds/home.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    right: "0px",
    width: "100%",
    height: "100%",
    ">div": {
      maxWidth: "500px",
      padding: 20,
    },
    ".cv": {
      ">button": {
        zIndex: 2,
        fontWeight: 800,
        color: "var(--text-color-2)",
        a: {
          textDecoration: "none",
        },
      },
    },
  },
});
export default function Home() {
  return (
    <HomeDiv>
      <div className="content">
        <div data-aos="fade-down" data-aos-duration="1500">
          <h1>Hey , I am Anuj Kashyap</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div data-aos="fade-down" data-aos-duration="2500">
          <h4>
            I am a highly skilled and experienced Full Stack Developer with a
            passion for creating beautiful, functional, and efficient web
            applications. I have extensive experience in both front-end and
            back-end development, and I am proficient in a wide range of
            programming languages, including HTML, CSS, JavaScript, React,
            Node.js, and Python.
          </h4>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="animate__slow animate__rubberBand animate__infinite cv"
        >
          <Fab variant="extended">
            <a href="/AnujKashyap.pdf" download>
              Download CV
            </a>
          </Fab>
        </div>
      </div>
    </HomeDiv>
  );
}
