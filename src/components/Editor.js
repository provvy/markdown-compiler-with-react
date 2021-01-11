import React from "react";

const Editor = (props) => {
  return (
    <div className={"editor-div" + (props.styleToggle1 ? " active" : (props.styleToggle2 ? " hide" : ""))}>
      <header className="header"><span className="span">Editor</span><i onClick={props.onclick} className="fas fa-expand-arrows-alt"></i></header>
      <textarea onChange={props.onchange} value={props.value} id="editor" className="editor"></textarea>
    </div>
  );
}

export default Editor;
