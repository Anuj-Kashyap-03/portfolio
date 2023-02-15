import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCardDiv = styled("div")({
  width: "100%",
  height: "100%",
  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: "700px",
    margin: "auto",
    ".project_image": {
      borderRadius: "30px",
      img: {
        width: "100%",
        height: "auto",
      },
    },
    ".link_button": {
      display: "flex",
      padding: "15px",
      marginBottom:"30px",
      "a":{
        width:"100%",
        "button":{
          background:"black",
          textTransform:"capitalize"
        }
      }

    },
    a: {
      textDecoration: "none",
    },
  },
});

interface ProjectCardProps {
  name: string;
  img: string;
  live?: string;
  code: string;
}

const ProjectCard: React.FC<{ ProjectCardProps: ProjectCardProps }> = ({
  ProjectCardProps,
}) => {
  return (
    <ProjectCardDiv>
      <div>
        <div className="project_image">
          <Image src={ProjectCardProps.img} width={1200} height={900} alt="" />
        </div>
        <div>
          <h2>{ProjectCardProps.name}</h2>
        </div>
        <div className="link_button">
          <Link href={ProjectCardProps.code} target="_blank">
            <Button variant="contained" fullWidth>
             Demo & Code 
            </Button>
          </Link>
        </div>
      </div>
    </ProjectCardDiv>
  );
};

export default ProjectCard;
