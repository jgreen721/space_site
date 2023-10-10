import "./Selector.css"


const Dot = ({counter,handleChangeCrew,val})=>{

    return(
    <li onClick={()=>handleChangeCrew(val)} className={counter == val ? "dot active-dot" : "dot"}>
    </li>
    )
}


export default Dot;