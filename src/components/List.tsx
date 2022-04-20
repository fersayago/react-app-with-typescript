import React from 'react';
import Sub from '../interfaces/iSub'

interface Props {
  subs: Array<Sub>
}

const List = ({subs}: Props) => {
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

export default List;