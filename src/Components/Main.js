import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Main(props) {
  const editText = (key, value) => {
    props.onUpdateNote({
      ...props.activeNote,
      [key]: value,
      lastmodific: Date.now(),
    });
  };
  if (!props.activeNote) {
    return <div className="active-note-disable">No Notes Created!!!</div>;
  }
  return (
    <div className="Main">
      <div className="input-area">
        <input
          type="text"
          name="title"
          id="title"
          autoFocus
          className="title-input"
          placeholder="Enter title ..."
          value={props.activeNote.title}
          onChange={(event) => editText(event.target.name, event.target.value)}
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="10"
          className="body-input"
          placeholder="Enter the some text ..."
          value={props.activeNote.body}
          onChange={(event) => editText(event.target.name, event.target.value)}
        ></textarea>
      </div>
      <div className="view-area">
        <div className="show">
          <h3 className="show-title">
            {props.activeNote ? `${props.activeNote.title}` : ""}
          </h3>
          <ReactMarkdown className="show-p">
            {props.activeNote ? `${props.activeNote.body}` : ""}
          </ReactMarkdown>
          <small className="show-s">
            Last Modified
            {props.activeNote
              ? ` ${new Date(props.activeNote.lastmodific).toLocaleDateString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}`
              : ""}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Main;
