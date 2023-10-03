import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import { poems } from "./text/poems";
import Poem from "./components/Poem/Poem";
import { Divider } from "@mui/material";
import Cover from "./components/Cover/Cover";

function App() {
  return (
    <div className='App'>
      <MenuBar />
      <Cover />
      <Divider />
      {poems.map((poem, index) => (
        <>
          <Poem
            key={index}
            author={poem.author}
            title={poem.title}
            poem={poem.poemLines}
          />
          <Divider />
        </>
      ))}
    </div>
  );
}

export default App;
