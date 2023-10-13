import React, {useState,useRef} from 'react'
import { FormatHeader } from '../../components'
import { Selector } from './components'
import "./Technology.css"

const Technology = ({technology}) => {
  const [counter,setCounter] = useState(0);
  const tabletImg = useRef();
  const desktopImg = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  console.log("Technology",technology)


  const handleChangeCounter=(val)=>{
    if(titleRef.current.classList.contains("technology-header-shrink"))return;

    titleRef.current.className = "technology-header-shrink thin uppercase"
    tabletImg.current.className = "slide-tablet-tech-img-offscreen-up"
    desktopImg.current.className = "sliderightoffscreen"
    descriptionRef.current.className = "thin barlow technology-description fadeblur-description"

    setTimeout(()=>{
    setCounter(val)
    titleRef.current.className = "technology-header thin uppercase"
    tabletImg.current.className = "technology-tablet-img"
    desktopImg.current.className = "technology-desktop-img sliderightonscreen"
    descriptionRef.current.className = "thin barlow technology-description clear-text"



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
            <img ref={tabletImg} className="technology-tablet-img" src={technology[counter].images.landscape} alt="" />
          </div>
       



               <div className="technology-content-card">
                 <div className="technology-card-column">
                   <Selector counter={counter} handleChangeCounter={handleChangeCounter}/>
                 </div>
                 <div className="technology-card-column">
                      <div className="technology-content-name-div">
                        <p className="uppercase thin l-spacing semi-muted">The Terminology...</p>
                        <div className="technology-header-div">
                        <h3 ref={titleRef} className="technology-header uppercase thin">{technology[counter].name}</h3>
                        </div>
                      </div> 
                      <div className="technology-description-div my-3">
                        <p ref={descriptionRef} className="thin barlow technology-description clear-text">{technology[counter].description}</p>
                      </div> 
                 </div>    
               </div>
          </div>
        <div className="content-column technology-content-column technology-desktop-img-div">
            {/* <div className="technology-deskto"> */}
              <img ref={desktopImg} className="technology-desktop-img" src={technology[counter].images.portrait} alt="" />
            {/* </div> */}
      </div>
    </div>
    </div>
  )
}

export default Technology