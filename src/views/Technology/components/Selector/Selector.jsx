import React from 'react'
import SelectionItem from './SelectionItem';
import "./Selector.css"

const Selector = ({counter,handleChangeCounter}) => {
    const selections = [
        {id:1,counterVal:0},
        {id:2,counterVal:1},
        {id:3,counterVal:2},
    ];

  return (
    <ul className="technology-selector">
        {selections.map(selection=>(
            <SelectionItem key={selection.id} selection={selection} counter={counter} handleChangeCounter={handleChangeCounter}/>
        ))}
    </ul>
  )
}

export default Selector