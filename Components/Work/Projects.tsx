import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const projects = [
  {
    name: "Ecommerce",
    img: "/Projects/ecommerce.png",
    code: "https://github.com/Anuj-Kashyap-03/Ecommerce",
  },
  {
    name: "Crypto",
    img: "/Projects/crypto.png",
    code: "https://github.com/Anuj-Kashyap-03/Crypto",
  },
  {
    name: "Google",
    img: "/Projects/google.png",
    code: "https://github.com/Anuj-Kashyap-03/google",
  },
  {
    name: "Movie",
    img: "/Projects/hotstar.png",
    code: "https://github.com/Anuj-Kashyap-03/Movie",
  },
  {
    name:"Portfolio",
    img: "/Projects/portfolio.png",
    code: "https://github.com/Anuj-Kashyap-03/portfolio",
  }
];

const ProjectsDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 700px;
  margin: auto;

  padding: 20px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    height: auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-radius: 15px;
    overflow:hidden;
  }
`;

const HeadingDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  alignItems: "center",
  padding: "20px 30px",
  "> h1 , > h2": {
    fontFamily: "sans-serif",
    color: "var(--text-color-1)",
  },
});

export default function Projects() {
  return (
    <>
      <HeadingDiv data-aos="fade-up">
        <h1 className="1st_h1">My Work</h1>
        <h2 className="2nd_h1"> Projects</h2>
      </HeadingDiv>
      <ProjectsDiv data-aos="fade-left">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index + "anfks"}>
              <ProjectCard ProjectCardProps={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ProjectsDiv>
    </>
  );
}
