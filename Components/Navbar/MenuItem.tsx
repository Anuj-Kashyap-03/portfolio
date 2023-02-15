import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";



const MyLink = styled(Link)({
  display: "flex",
  gap: "30px",
  flex: 1,
  textDecoration: "none",
  padding: "8px 20px",
  alignItems: "center",
  borderRadius: "8px",
  color: "var(--text-color-1)",
  ": hover": {
    background: "var(--hover-color-1) !Important",
  },
  "& > *": {
    fontWeight: "600",
    textTransform: "capitalize",
  },
  "& svg": {
    fontSize: "21px",
  },
});

interface Props {
  [key: string]: any;
}

const MenuItem: React.FC<Props> = ({ i }) => {
  return (
    <MyLink href={i.link}>
      <div>{i.icon}</div>
      <div>{i.name}</div>
    </MyLink>
  );
};

export default MenuItem;
