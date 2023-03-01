import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { color, height } from "@mui/system";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function App(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              タグスト
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box style={{width:"100%", height:"700px", backgroundColor:"red"}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Grid item>
            <Container maxWidth="xs">
              <Typography fontSize="56px">タスク追加を</Typography>
              <Typography fontSize="56px">シンプルに</Typography>
            </Container>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "300px",
                height: "500px",
                backgroundColor: "primary.dark",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          height: "400px",
          maxWidth: "100%",
          backgroundColor: "blue",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          paddingTop="40px"
        >
          <Box
            style={{ height: "200px", width: "100px", backgroundColor: "white" }}
          ></Box>
          <Typography fontSize="40px">タスク追加を</Typography>
        </Grid>
      </Box>
      <Box
        style={{
          height: "400px",
          maxWidth: "100%",
          backgroundColor: "white",
        }}
      ></Box>
      <Box
        style={{
          height: "400px",
          maxWidth: "100%",
          backgroundColor: "blue",
        }}
      ></Box>
      <Box
        style={{
          height: "400px",
          maxWidth: "100%",
          backgroundColor: "white",
        }}
      ></Box>
      <Box
        style={{
          height: "400px",
          maxWidth: "100%",
          backgroundColor: "blue",
        }}
      ></Box>
      <Box
        style={{ height: "120px", maxWidth: "100%", backgroundColor: "red" }}
      ></Box>
    </React.Fragment>
  );
}
