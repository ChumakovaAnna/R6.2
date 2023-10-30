import React from "react";
import Note from "./Note";

export const ListNotes = ({notes}) => {
  console.log(notes)
  return(
    <div className="listNotes">
      {notes.map(item => <Note key={item.id} item={item}></Note>)}
    </div>
  )
}