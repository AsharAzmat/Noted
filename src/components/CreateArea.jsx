import React, { useState } from "react";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* when clicked, then only expand and show title option */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Write a note..."
          rows={isExpanded ? 3 : 1} // have 1 row originally, when clicked, then expand to 3 rows
        />
        <Zoom in={isExpanded && true}>
          <Fab onClick={submitNote}>
            <AddToPhotosIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
