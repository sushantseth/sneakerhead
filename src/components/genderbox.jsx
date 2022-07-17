import 'bootstrap/dist/css/bootstrap.css';
import React from "react"

function GenderBox(props){
    return (
        <div >
            <img className= "genderclass" src = {props.src} />
            
              <h2 className="gendersymbol"> {props.gender}</h2> 
         
        </div>
    )
}

export default GenderBox;