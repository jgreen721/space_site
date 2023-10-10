import React from 'react'

const SelectItem = ({setCounter,counter,destination,handleChangeDestination}) => {


  return (
    <li onClick={()=>{
      // setCounter(counter)
      handleChangeDestination(counter)
      }} className="destination-selection-item">
      <h5 className="thin uppercase select-item-h5 bellafair">{destination}</h5>
    </li>
  )
}

export default SelectItem