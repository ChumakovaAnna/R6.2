import React from "react"

/**
 * Запрос на получение заметок
 */
export function getNotes() {
  let result;
  console.log('API')

  fetch(process.env.REACT_APP_SERVER_URL)
    .then(response => response.json())
    .then(response => console.log(response))

    .catch(err => console.log(err))
  
  //   result = 0
  return result
}

/**
 * Запрос на добавление заметки
 * @param {*} obj 
 */

export function postNote(obj) {
  fetch(process.env.REACT_APP_NOTES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(obj),
  })
    .then(this.getNotes())
    .catch((err) => console.log(err));
}

/**
 * Запрос на удаление заметки
 * @param {*} id 
 */
export function removeNote(id) {
  fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
  .then(this.getNotes())
  .catch((err) => console.log(err));
}