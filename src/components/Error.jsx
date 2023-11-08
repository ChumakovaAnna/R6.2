import React from 'react'

export default function Error({string}) {
  console.log(string)
  return (
    <div className='error'>{string}</div>
  )
}
