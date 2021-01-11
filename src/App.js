import './App.css';
import React, {useState, useEffect} from "react";
import marked from "marked";
import Editor from "./components/Editor.js";
import Previewer from "./components/Previewer.js";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [markedValue, setMarkedValue] = useState("");
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
    setMarkedValue(marked(value));
  }

  const toggleEditorClass = () => {
    setActive1(!active1);
  }

  const togglePreviewerClass = () => {
    setActive2(!active2);
  }

  useEffect(() => {
    let str = "# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And here\'s some other cool stuff: \nHere\'s some code, \`<div></div>\`, between 2 backticks. \n\`\`\` \nfunction anotherExample() \{\n return \"why you not usin' arrow function dude?!\" \n }\n\`\`\`\nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \nThere\'s also [links](_blank), and \n> Block Quotes! \n1. And there are numbererd lists too. \n1. Use just 1s if you want! \n1. And last but not least, let\'s not forget embedded images: \n\n![Batman Logo](https:\/\/www.freepnglogos.com/uploads/black-logo-batman-png-1.png) \nnananananana... BATMAN!!!";
    setInputValue(str);
    setMarkedValue(marked(str));
  }, [])

  return (
    <div className="container">
      <div className={"heading" + (active1 ? " hide" : (active2 ? " hide" : ""))}>Markdown Previewer with React and Marked.js<span className="provvy">coded by Paolo Provveduto</span></div>
      <Editor styleToggle1={active1} styleToggle2={active2} onclick={toggleEditorClass} value={inputValue} onchange={handleChange} />
      <Previewer onclick={togglePreviewerClass} styleToggle1={active1} styleToggle2={active2} innerHtml={markedValue} />
    </div>
  );
}

export default App;
