import React from "react";
import "./styles/tailwind.css";
import "./styles.css";

import StandardButton from "./components/buttons/ButtonStandard";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <StandardButton title={"Go to Test Page"} linkTo={"test"} />
      </div>
      <div className="mt-4">
        <StandardButton title={"Go to About Page"} linkTo={"about"} />
      </div>
    </div>
  );
}
