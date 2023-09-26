import React from "react"

export function getNotes() {
  fetch(process.env.REACT_APP_SERVER_URL)
    .then(res => res.json())
    .then(obj => console.log(obj))
    .catch(err => console.log(err))
}

export function postNote(obj) {
  fetch(process.env.REACT_APP_NOTES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(obj),
  })
    .then(this.getNotes())
    .catch((err) => console.log(err));
}
