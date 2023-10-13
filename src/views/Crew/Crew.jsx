import React, {useState, useRef,useEffect} from 'react'
import { FormatHeader } from '../../components'
import { Selector } from './components'
import "./Crew.css"

const Crew = ({crew}) => {
  const [counter,setCounter] = useState(0)
  const imgRef = useRef();
  const mobileImgRef = useRef();
  const descriptionRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef()


  const handleChangeCrew = (val)=>{
    imgRef.current.className = "crew-img fadeblur"
    mobileImgRef.current.className = "mobile-crew-img riseoffscreen"
    descriptionRef.current.className = "crew-content-blurb-div pinch-shut"
    nameRef.current.className = "thin bellafair destination-blurb uppercase sliderightoffscreen"
    titleRef.current.className = "crew-content-role-div pinch-x-shut"
    // tabletImg.current.classList.add("slide-el-up")
    // desktopImg.current.classList.add("fade-out")

    setTimeout(()=>{
    setCounter(val)
    // mobileImgRef.current.classList.remove("drop-el")
    // imgRef.current.classList.remove("drop-el")
    imgRef.current.className = "crew-img clear-text"
    mobileImgRef.current.className = "mobile-crew-img riseonscreen"
    descriptionRef.current.className = "crew-content-blurb-div open-wide"
    nameRef.current.className = "thin bellafair destination-blurb uppercase sliderightonscreen"
    titleRef.current.className = "crew-content-role-div open-x-wide"




    // tabletImg.current.classList.remove("slide-el-up")

    },1500)

  }
  return (
    <div className="view-container crew-container">
      <div className="flex-content-container crew-content-container">
        <div className="content-column barlow">
          <div className="crew-title-div">
            <FormatHeader thinClassname="text-white" strongClassname="text-white muted" number="02" title="Meet your crew"/>   
          </div>
          <div className="mobile-crew-img-div">
              <img ref={mobileImgRef} className="mobile-crew-img" src={crew[counter].images.png} alt="" />
            </div>
            <div className="mobile-selector-div">
            <Selector handleChangeCrew={handleChangeCrew} counter={counter}/>

            </div>



               <div className="crew-content-card">
            {/* <Selector handleChangeDestination={handleChangeDestination} destinations={planets.map((p,idx)=>({id:idx+1,counter:idx,name:p.name}))} setCounter={setCounter}/> */}
            <div ref={titleRef} className="crew-content-role-div">
            <h4 className="crew-header uppercase thin">{crew[counter].role}</h4>
            </div> 
            <div className="crew-content-name-div">
            <h3 ref={nameRef} className="thin bellafair destination-blurb uppercase">{crew[counter].name}</h3>
            </div> 
            <div ref={descriptionRef} className="crew-content-blurb-div">
            <p className="bellafair blurb-height">{crew[counter].bio}</p>
            </div>
            <div className="desktop-selector">
            <Selector handleChangeCrew={handleChangeCrew}  counter={counter}/>
            </div>
        </div>    
        </div>
        <div className="content-column flex-end">
            <div className="crew-img-div">
              <img ref={imgRef} className="crew-img" src={crew[counter].images.png} alt="" />
            </div>
      </div>
    </div>
    </div>
  )
}

export default Crew