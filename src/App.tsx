import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppFeatures from "./compornent/Features";
import Footer from "./compornent/Footer";
import Characters from "./compornent/Characters";
import AppScreenshot from "./compornent/AppScreenShot";
import Header from "./compornent/Header";

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
        <Header></Header>
      </ElevationScroll>
      <Toolbar />
      <AppScreenshot
        title="タグスト"
        image="https://via.placeholder.com/150"
      ></AppScreenshot>
      <AppFeatures id="feature1"></AppFeatures>
      <Characters></Characters>
      <AppFeatures id="feature2"></AppFeatures>
      <AppFeatures id="feature3"></AppFeatures>
      <Footer></Footer>
    </React.Fragment>
  );
}
