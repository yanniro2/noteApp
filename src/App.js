// import logo from "./logo.svg"
import "./App.css";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import React from "react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
function App() {
  const [notes, setNotes] = React.useState(
    typeof window !== "undefined" ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = React.useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addHandle() {
    const addNew = {
      id: nanoid(),
      title: "Undifined",
      body: "",
      lastmodific: Date.now(),
    };
    setNotes([addNew, ...notes]);
  }

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updateNote) => {
    const updateArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      } else {
        return note;
      }
    });
    setNotes(updateArray);
  };

  // const editText = (key, value) => {
  //   props.onUpdateNote({
  //     ...props.activeNote,
  //     [key]: value,
  //     lastmodific: Date.now(),
  //   });
  // };

  return (
    <div className="App">
      <SideBar
        key={notes.id}
        addHandle={addHandle}
        notes={notes}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
