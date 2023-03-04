import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const HeaderBar = styled(AppBar)({
  background: "#673ab7",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  height: "80px",
});

const Title = styled(Box)({
  flexGrow: 1,
  textAlign: "center",
  "& h1": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
    lineHeight: "1.2",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
  },
});

const NavButton = styled(Button)({
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

const NavBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.getAttribute("href")!.substring(1);
    const element = document.getElementById(id);
    const yOffset = -80;
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <HeaderBar position="fixed">
      <Toolbar>
        <Title>
          <h1>App Name</h1>
        </Title>
        <NavBox>
          <NavButton href="#feature1" onClick={handleClick}>
            Feature 1
          </NavButton>
          <NavButton href="#feature2" onClick={handleClick}>
            Feature 2
          </NavButton>
          <NavButton href="#feature3" onClick={handleClick}>
            Feature 3
          </NavButton>
          <NavButton href="#feature4" onClick={handleClick}>
            Feature 4
          </NavButton>
        </NavBox>
      </Toolbar>
    </HeaderBar>
  );
};