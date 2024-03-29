import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";

const props =
  { window: () => window, children: <div /> };
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App {...props}/>
  </React.StrictMode>
);

