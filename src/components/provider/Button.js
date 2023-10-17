
import { useContext } from 'react';
import { DataContext } from './Provider'

function Button () {
  const {key, name} = useContext(DataContext)


  return (
    
    <button onClick={key}>{name}</button>
  )
}

export {Button}