import React, {useState, useEffect} from "react";
import Form from './Form';
import {ListNotes} from './ListNotes';

export default function CRUD() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState();

  /**
   * Запрос на получение заметок
   */
  const getNotes = () => {
    fetch(process.env.REACT_APP_SERVER_URL)
    .then(response => response.json())
    // .then(res => console.log(res))
    .then(response => setNotes(response))
    .then(console.log(notes))
    .catch(err => setError(err));
  }

  /**
   * Запрос на добавление заметки
   * @param {*} obj 
   */
  const postNote = (obj) => {
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(obj),
    })
      .then(getNotes())
      .catch(err => setError(err));
  }

  useEffect(() => {
    getNotes()
  }, []);

  return(
    <div>
      <Form getNotes={() => getNotes()} postNote={() => postNote()}></Form>
      <ListNotes notes={notes}></ListNotes>
    </div>
  )
}