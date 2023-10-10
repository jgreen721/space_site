import './App.css'
import {useEffect, useState} from "react"
import {Dashboard, Destination, Crew, Technology} from "./views"
import {Navbar} from "./components"
import {Routes,Route} from "react-router-dom"

function App() {
  const [planets,setPlanets] = useState([])
  const [crew,setCrew] = useState([])
  const [technology,setTechnology] = useState([])

  useEffect(()=>{
  
    fetch("data.json")
    .then(res=>res.json())
    .then(res=>{
      // console.log("Res",res)
      console.table(res.destinations)
      setPlanets(res.destinations)
      setCrew(res.crew);
      setTechnology(res.technology)
    })
  },[])

  return (
      <div className="app">
        <Navbar/>
  {planets.length ? 
        <Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/destination" element={<Destination planets={planets}/>}/>
<Route path="/crew" element={<Crew crew={crew}/>}/>
<Route path="/technology" element={<Technology technology={technology}/>}/>
        </Routes>
 : "Loading"}
    </div>
  )
}

export default App
