import React from "react";

export default function Note({item, id, removeNote}) {
  const removeOnClick = () => {
    removeNote(id)
  }

  return(
    <div className="note">
      <div className="delete" onClick={removeOnClick}>X</div>
      <span>{item.content}</span>
    </div>
  )
}