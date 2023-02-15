import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const SkillDiv = styled("div")({
  display: "flex",
  height: "150px",
  flexDirection: "column",
  alignItems: "center",
  background: "var(--main)",
  margin: "10px",
  padding: "10px 10%",
  border: "1px solid #bdb7b7",
  borderRadius: "4px",
  " img": {
    height: "auto",
    width: "auto",
    maxHeight: "80%",
    maxWidth: "80%",
    margin: "auto",
  },
  " > .image": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "150px",
    maxWidth: "90%",
  },
  " > span": {
    fontSize: 18,
    fontFamily: "system-ui",
    fontWeight: 500,
  },
});

interface SkillProps {
  name: string;
  img: string;
}

const Skill: React.FC<{ SkillProps: SkillProps }> = ({ SkillProps }) => {
  return (
    <SkillDiv>
      <div className="image">
        <Image
          src={SkillProps.img}
          alt={SkillProps.name}
          width={300}
          height={300}
        />
      </div>
      <span> {SkillProps.name}</span>
    </SkillDiv>
  );
};

export default Skill;
