import React from "react";
import { styled, Grid, Box, AppBar, Toolbar, Button } from "@mui/material";
import icon from "../image/icon.jpg";

export const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.getAttribute("href")!.substring(1);
    const element = document.getElementById(id);
    const yOffset = -80;
    const y =
      element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <HeaderBar elevation={0}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              margin={4}
            >
              <img src={icon} alt="icon" style={{ width: 40 }} />
              <Title>
                <h1>タグスト</h1>
              </Title>
            </Grid>
          </Grid>
          <Grid item>
            <NavBox>
              <NavButton href="#feature1" onClick={handleClick}>
                活用シーン
              </NavButton>
              <NavButton href="#feature2" onClick={handleClick}>
                使い方（動画）
              </NavButton>
              <NavButton href="#feature3" onClick={handleClick}>
                実装予定
              </NavButton>
            </NavBox>
          </Grid>
        </Grid>
      </Toolbar>
    </HeaderBar>
  );
};

const HeaderBar = styled(AppBar)({
  background: "white",
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
    color: "black",
    fontFamily: "Montserrat, sans-serif",
  },
});

const NavButton = styled(Button)({
  color: "black",
  "&:hover": {
    backgroundColor: "white",
  },
});

const NavBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});