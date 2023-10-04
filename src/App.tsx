import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import MenuBar from "./components/MenuBar/MenuBar";
import { poems } from "./text/poems";
import Poem from "./components/Poem/Poem";
import Cover from "./components/Cover/Cover";
import ScrollSpy from "react-ui-scrollspy";
import Divider from "./components/common/Divider";
import { preface } from "./text/preface";
import Preface from "./components/Preface/Preface";

function App() {
  const onPoemLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 0;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='App'>
      <MenuBar />
      <div className='side-nav'>
        {poems.map((poem, index) => {
          return (
            <a
              onClick={(e) => onPoemLinkClick(e)}
              href={`#section-${index}`}
              className='poem-link'
            >
              <div data-to-scrollspy-id={`section-${index}`}>{poem.title}</div>
            </a>
          );
        })}
      </div>
      <div id={"section-cover"}>
        <Cover />
      </div>
      <Divider />
      <div id={"section-preface"}>
        <Preface preface={preface} />
      </div>
      <Divider />
      <ScrollSpy useBoxMethod={false}>
        {poems.map((poem, index) => (
          <div id={`section-${index}`}>
            <Poem
              key={index}
              author={poem.author}
              title={poem.title}
              poem={poem.poemLines}
            />
            <Divider />
          </div>
        ))}
      </ScrollSpy>
    </div>
  );
}

export default App;
