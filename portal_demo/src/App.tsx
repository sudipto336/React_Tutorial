import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventBubbling from "./components/EventBubbling/EventBubbling";
import SimpleModalComp from "./components/SimpleModal/SimpleModalComp";

function App() {
  return (
    <>
      <EventBubbling />
      <br />
      <br />
      <br />
      <SimpleModalComp />
    </>
  );
}

export default App;
