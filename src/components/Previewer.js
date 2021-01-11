import React from "react";

const Previewer = (props) => {
  return (
    <div className={"previewer-div" + (props.styleToggle1 ? " hide" : (props.styleToggle2 ? " active" : ""))}>
      <header className="header"><span className="span">Previewer</span><i onClick={props.onclick} className="fas fa-expand-arrows-alt"></i></header>
      <div dangerouslySetInnerHTML={{__html: props.innerHtml}} className="preview" id="preview"></div>
    </div>
  );
}

export default Previewer;
