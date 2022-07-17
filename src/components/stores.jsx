import 'bootstrap/dist/css/bootstrap.css';
import React from "react"

function Stores(props){
    return (
        <div >
            <img style = {{cursor: "pointer"}}className= "storeclass" src = {props.src} />
            
              <h3 style = {{cursor: "pointer"}}className="storesymbol"> {props.location}</h3> 
         
        </div>
    )
}

export default Stores;