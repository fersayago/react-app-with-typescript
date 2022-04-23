import React, { useReducer, useState } from 'react'
import { Sub } from './types'

interface FormState {
  inputValues: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: "clear";
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
  switch (action.type){
    case "change_value":
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      return INITIAL_STATE
  }
}

const Form = ({onNewSub}: FormProps) => {
  //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const[inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);
  
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }

  // para poder ver el tipo de evento hacemos la función dentro del elemento
  // del formulario y al hacer hover sobre event nos dara el tipo de typescript
  // que posee.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const {name, value} =event.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleClear = () => {
    dispatch({
      type: "clear"
    })
  }

  // TODO: Arreglar para el cambio de subMonths

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange = {handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick"/>
        <input onChange = {handleChange} value={inputValues.subMonths} type="number" name='subMonth' placeholder="subMonth"/>
        <input onChange = {handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar"/>
        <textarea onChange = {handleChange} value={inputValues.description} name='description' placeholder="description"/>
        <button onClick={handleClear} type='button'>
          Clear the form
        </button>
        <button>Save new sub!</button>
      </form>
    </div>
  )

}

export default Form