import React, {useState,useRef} from 'react'
import "./Destination.css"
import { FormatHeader,FormatStat } from '../../components'
import { Selector } from './components'




const Destination = ({planets}) => {
  const [counter,setCounter] = useState(0)
  console.log(planets)
  const titleRef = useRef();
  const planetRef = useRef();


  const handleChangeDestination=(planetId)=>{
    if(planetRef.current.classList.contains("fade-out"))return;
    planetRef.current.classList.add("fade-out")
    titleRef.current.classList.add("slide-el-up")
    setTimeout(()=>{
      setCounter(planetId)

      planetRef.current.classList.remove("fade-out")
      titleRef.current.classList.remove("slide-el-up")
    },1000)

  }
  return (
    
    <div className="view-container destination-container">
      <div className="flex-content-container">
        <div className="content-column barlow">
          {/* <div className="dashboard-card"> */}
            <FormatHeader thinClassname="text-white" strongClassname="text-white muted" number="01" title="Pick Your Destination"/>   
            <div className="destination-img-div">
              <img ref={planetRef} className="destination-img" src={planets[counter].images.png} alt="img" />
            </div>     
        </div>
        {/* </div> */}
        <div className="content-column flex-center">
          <div className="destination-content-card">
            <Selector handleChangeDestination={handleChangeDestination} destinations={planets.map((p,idx)=>({id:idx+1,counter:idx,name:p.name}))} setCounter={setCounter}/>
            <h1 ref={titleRef} className="destination-header">{planets[counter].name}</h1>
            <h5 className="my-3 thin bellafair destination-blurb blurb-heigt">{planets[counter].description}</h5>
            <ul className="stats-list">
              <FormatStat field="Avg. Distance" value={planets[counter].distance}/>
              <FormatStat field="Est. Travel Time" value={planets[counter].travel}/>
            </ul>
        </div>
      </div>
    </div>
  </div>
  ) 
}

export default Destination