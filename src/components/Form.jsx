import React from "react";
import { useState } from "react";

export default function Form({getNotes, postNote, setError}) {
  const [form, setForm] = useState();

  const handleChange = ({target}) => {
    // console.log(target.value)
    if(target.value) {
      setForm(target.value);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (form) {

      const newNote = {
        id: 0,
        content: `${form}`
      }
      postNote(newNote);
      getNotes()
      setForm('')
    } else {
      setError("поле не должно быть пустым")
    }
  }

  return(
    <form className="form" onSubmit={handleSubmit}>
      <textarea className='textarea' value={form} onChange={handleChange}></textarea>
      <button className="button_save">сохранить</button>
    </form>
  )
}