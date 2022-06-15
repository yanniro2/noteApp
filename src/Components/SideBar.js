import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
function SideBar({ notes, addHandle, deleteNote, activeNote, setActiveNote }) {
  const getShortList = notes.sort((a, b) => b.lastmodific - a.lastmodific);

  return (
    <div className="sidebar">
      <div className="heading-sideBar">
        <h1>Notes</h1>
        <button onClick={addHandle}>
          <IoIosAddCircle />
        </button>
      </div>
      {getShortList.map((data) => (
        <div
          className={activeNote === data.id ? "title active" : "title"}
          onClick={() => setActiveNote(data.id)}
        >
          <div>
            <h3>{data.title}</h3>
            <button onClick={() => deleteNote(data.id)}>
              <AiTwotoneDelete className="icon" />
            </button>
          </div>
          <p>{data.body && data.body.substring(0, 100) + "...."}</p>
          <small className="small-s">
            Last Modified [
            {new Date(data.lastmodific).toLocaleDateString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            ]
          </small>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
