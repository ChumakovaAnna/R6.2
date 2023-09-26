import React, {useEffect, useState} from "react";
import {getNotes} from '../API'

export const ListNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    fetch(process.env.REACT_APP_SERVER_URL)
    .then(res => res.json())
    .then(obj => console.log(obj))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getNotes()
  }, []);

  
  return(
    <div>
      
    </div>
  )
}