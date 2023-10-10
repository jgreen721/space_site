import React from 'react'
import SelectItem from "./SelectItem"
import "./Selector.css"

const Selector = ({destinations,setCounter,handleChangeDestination}) => {
  console.log(destinations)
  return (
    <ul className="destinations-select-list">
      {destinations.map(d=>(
        <SelectItem handleChangeDestination={handleChangeDestination} setCounter={setCounter} key={d.id} counter={d.counter} destination={d.name}/>
      ))}
    </ul>
  )
}

export default Selector