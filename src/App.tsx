import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Sub, SubsResponseFromApi} from './components/types';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  // especificamos entre brackets que tipo de dato va a tener el useState
  // en caso de que sean varios se puede usar <any>
  // en este caso le indicamos que tiene un array de suscriptores los cuales
  // fueron definidos previamente con una interface
  // otra manera de indicar un array de Sub es <Sub[]>
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  // indicamos en el useRef que vamos a usar un elemento div y lo comenzamos nulo
  const divRef = useRef<HTMLDivElement>(null)

  // el fetch recibe  un objeto que no es un array de Subs
  // hay que corregir el fetch ya que typescript no funciona en runtime sino que
  // valida en estatico o buildtime por lo que se debe
  useEffect(() => {

    //const fetchSubs = (): Promise<SubsResponseFromApi> => {
    // en vez de esto, implementamos la manera de axios de especificar que tipo de datos va a recibir el get para evitar el mapFromApiToSubs
    const fetchSubs = () => {
      return axios
      .get<SubsResponseFromApi>('http://localhosto:3001/subs')
      .then(response => response.data)
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Fer Subs</h1>
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
