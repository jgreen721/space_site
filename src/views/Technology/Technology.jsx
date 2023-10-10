import React, {useState,useRef} from 'react'
import { FormatHeader } from '../../components'
import { Selector } from './components'
import "./Technology.css"

const Technology = ({technology}) => {
  const [counter,setCounter] = useState(0);
  const tabletImg = useRef();
  const desktopImg = useRef();
  const titleRef = useRef();
  console.log("Technology",technology)


  const handleChangeCounter=(val)=>{

    titleRef.current.classList.add("fade-out")
    tabletImg.current.classList.add("slide-el-up")
    // desktopImg.current.classList.add("fade-out")

    setTimeout(()=>{
    setCounter(val)
    titleRef.current.classList.remove("fade-out")
    tabletImg.current.classList.remove("slide-el-up")

    },1500)
  }


  return (
    <div className="view-container technology-container">
      <div className="flex-content-contain technology-content-container">
        <div className="content-column technology-content-column barlow">
          <div className="technology-title-div">
            <FormatHeader thinClassname="text-white" strongClassname="text-white muted" number="03" title="Space Launch 10"/>   
          </div>
          <div className="tablet-img-container">
            <img ref={tabletImg} className="tablet-img" src={technology[counter].images.landscape} alt="" />
          </div>
       



               <div className="technology-content-card">
                 <div className="technology-card-column">
                   <Selector counter={counter} handleChangeCounter={handleChangeCounter}/>
                 </div>
                 <div className="technology-card-column">
                      <div className="technology-content-name-div">
                        <p className="uppercase thin l-spacing semi-muted">The Terminology...</p>
                        <h3 ref={titleRef} className="technology-header uppercase thin">{technology[counter].name}</h3>
                      </div> 
                      <div className="technology-content-descriptione-div my-3">
                        <p className="thin barlow technology-blurb">{technology[counter].description}</p>
                      </div> 
                 </div>    
               </div>
          </div>
        <div className="content-column technology-content-column technology-desktop-img-div">
            {/* <div className="technology-deskto"> */}
              <img ref={desktopImg} className="technology-img" src={technology[counter].images.portrait} alt="" />
            {/* </div> */}
      </div>
    </div>
    </div>
  )
}

export default Technology