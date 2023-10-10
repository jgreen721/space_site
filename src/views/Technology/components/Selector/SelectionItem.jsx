import React from 'react'

const SelectionItem = ({selection,handleChangeCounter,counter}) => {
  return (
    <li onClick={()=>handleChangeCounter(selection.counterVal)} className={counter == selection.counterVal ? "selection-item highlight-select-item" : "selection-item"}>
        <h4 className={counter == selection.counterVal ? "strong" : "thin"}>{selection.id}</h4>
    </li>
  )
}

export default SelectionItem