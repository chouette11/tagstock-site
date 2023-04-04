import * as React from "react";
import { Toolbar, CssBaseline, useScrollTrigger } from "@mui/material";
import { Features1 } from "./compornent/Features1";
import { Footer } from "./compornent/Footer";
import { AppScreenshot } from "./compornent/AppScreenShot";
import { Header } from "./compornent/Header";
import top from "./image/top.jpg";
import { Features2 } from "./compornent/Features2";
import { Features3 } from "./compornent/Features3";

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
        <AppScreenshot title="タグスト" image={top} />
        <Features1 id="feature1" />
        <Features2 id="feature2"/>
        <Features3 id="feature3"/>
      <Footer />
    </React.Fragment>
  );
};
