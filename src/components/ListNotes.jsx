import React from "react";
import Note from "./Note";

export const ListNotes = ({notes, removeNote}) => {
  return(
    <div className="listNotes">
      {notes ? notes.map(item => <Note key={item.id} id={item.id} removeNote={removeNote} item={item} ></Note>) : null}
    </div>
  )
}