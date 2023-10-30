import React from "react";

export default function Note({item}) {
  return(
    <div className="note">
      <div className="delete">X</div>
      <span>{item.content}</span>
    </div>
  )
}