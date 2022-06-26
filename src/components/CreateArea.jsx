import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expanded, setExpanded] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded ? (
          <input
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows={expanded === false ? "1" : "3"}
          value={note.content}
          onClick={expand}
        />
        <Zoom in={expanded}>
          <Fab
            onClick={submitNote}
            sx={{
              ":hover": {
                color: "#f5ba13",
              },
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
