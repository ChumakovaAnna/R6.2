import React, {useState, useEffect} from "react";
import Form from './Form';
import {ListNotes} from './ListNotes';
import Error from "./Error";

export default function CRUD() {
  const [notes, setNotes] = useState();
  const [error, setError] = useState();

  /**
   * Запрос на получение заметок
   */
  const getNotes = () => {
    console.log('get')
    fetch(process.env.REACT_APP_SERVER_URL)
    .then(response => response.json())
    .then(response => setNotes(response))
    .then(console.log('get fetch'))
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
    .then(console.log('post'))
    .then(setError())
    .then(getNotes())
    .catch(err => setError(err));

    // getNotes()
  }

  /**
   * Запрос на удаление заметки с сервера
   */

  const removeNote = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
    .then(console.log('remove'))
    .then(getNotes())
    .catch(err => setError(err));
  }

  useEffect(() => {
    setError()  
    getNotes()
  }, []);

  return(
    <div>
      <Form getNotes={getNotes} postNote={postNote} setError={setError}></Form>
      {error ? <Error string={error}></Error> : null}
      {notes ? <ListNotes removeNote={removeNote} notes={notes}></ListNotes> : null}
    </div>
  )
}