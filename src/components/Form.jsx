import React from "react";
import { useState } from "react";
import {postNote} from '../API'

export default function Form() {
  const [form, setForm] = useState({
    id: 0,
    content: ''
  });

  const fetchNotes = () => {
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(obj => console.log(obj))
    .catch(err => console.log(err))
  }

  const handleChange = ({target}) => {
    console.log(target.value);
    // setForm(form.content = 0);
    // console.log(form.content)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(form);
    fetchNotes()
    setForm({
      id: 0,
      content: ''
    })
  }

  return(
    <form className="form" onSubmit={handleSubmit}>
      <textarea className='textarea' value={form.content} onChange={handleChange}></textarea>
      <button className="button_save">сохранить</button>
    </form>
  )
}