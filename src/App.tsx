import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import { poems } from "./text/poems";
import Poem from "./components/Poem/Poem";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className='App'>
      <MenuBar />
      {poems.map((poem, index) => (
        <>
          <Poem key={index} title={poem.title} poem={poem.poemLines} />
          <Divider />
        </>
      ))}
    </div>
  );
}

export default App;
