import * as React from "react";
import {Toolbar, CssBaseline, useScrollTrigger}  from "@mui/material";
import {Features} from "./compornent/Features";
import {Footer} from "./compornent/Footer";
import {Characters} from "./compornent/Characters";
import {AppScreenshot} from "./compornent/AppScreenShot";
import {Header} from "./compornent/Header";

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

export const App = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Header></Header>
      </ElevationScroll>
      <Toolbar />
      <AppScreenshot
        title="タグスト"
        image="https://via.placeholder.com/150"
      ></AppScreenshot>
      <Features id="feature1"></Features>
      <Characters></Characters>
      <Features id="feature2"></Features>
      <Features id="feature3"></Features>
      <Footer></Footer>
    </React.Fragment>
  );
}
