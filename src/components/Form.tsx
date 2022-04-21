import React, { useState } from 'react'

const Form = () => {

  const [inputValues, setInputValues] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })
  
  const handleSubmit = () => {

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  // TODO: RETOMAR 45:36
  // https://www.youtube.com/watch?v=15VKbky2gB4&ab_channel=midudev

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange = {handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick"/>
        <input onChange = {handleChange} value={inputValues.subMonths} type="number" name='subMonth' placeholder="subMonth"/>
        <input onChange = {handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar"/>
        <input onChange = {handleChange} value={inputValues.description} type="text" name='description' placeholder="description"/>
        <button>Save new sub!</button>
      </form>
    </div>
  )

}

export default Form