import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Sub} from './components/types';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'suscriptor',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=sub',
    description: "Hace de moderador a veces",
  },
  {
    nick: 'suscriptor2',
    subMonths: 6,
    avatar: 'https://i.pravatar.cc/150?u=sub2',
  }
]

function App() {
  // especificamos entre brackets que tipo de dato va a tener el useState
  // en caso de que sean varios se puede usar <any>
  // en este caso le indicamos que tiene un array de suscriptores los cuales
  // fueron definidos previamente con una interface
  // otra manera de indicar un array de Sub es <Sub[]>
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, [])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
      <h1>Fer Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
