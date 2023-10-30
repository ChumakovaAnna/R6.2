import React from "react";
import { useState } from "react";

export default function Form({getNotes, postNote}) {
  const [form, setForm] = useState();

  const handleChange = ({target}) => {
    console.log(target.value);
    setForm(target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(form)
    const newNote = {
      'id': 0,
      'content': `${form}`
    }
    console.log(newNote)
    postNote(newNote);
    setForm('')
    getNotes()
  }

  return(
    <form className="form" onSubmit={handleSubmit}>
      <textarea className='textarea' value={form} onChange={handleChange}></textarea>
      <button className="button_save">сохранить</button>
    </form>
  )
}