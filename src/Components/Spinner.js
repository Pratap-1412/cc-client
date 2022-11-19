import React from 'react'
import spinner from './img-rsrc/spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={spinner} alt = '' height={"50px"} width={"50px"} />
    </div>
  )
}
