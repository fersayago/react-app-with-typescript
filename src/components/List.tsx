import React from 'react';
import Sub from '../interfaces/iSub'

interface Props {
  subs: Array<Sub>
}

// para desestructurar directamente se puede hacer de la siguiente manera:
// const List = ({subs}: Props) => {
const List = (props: Props) => {
  const {subs} = props;
  return (
    <ul>
      {
        subs.map(sub => {
          return(
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMounth}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

// para poder hacer que el componente acepte children debemos convertirlo
// en un arrow function y luego declarar el componente como funcional de la
// siguiente manera:
// const List.FunctionalComponent<Props> = (props: Props) => {}

export default List;