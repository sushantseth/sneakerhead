import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import Dynamicsearch from './dynamicsearch';
import NewArrival from './renderpage';

function Sneaker(){
    return <div>
        <NewArrival backend = "shoes"/>
    </div>
}

function Apparel(){
    return (<div>
        <NewArrival backend = "apparel"/>
    </div>)
}

function Nike(){
    return (<div>
        <NewArrival backend = "Nike"/>
    </div>)
}

function Addidas(){
    return (<div>
        <NewArrival backend = "Addidas"/>
    </div>)
}

function NewArrivalpage(){
    return (<div>
        <NewArrival backend = "newarrival"/>
    </div>)
}
function Searchbarpageload(){
    
    return (<div>
       <Dynamicsearch />
    </div>)
}

export  {Sneaker,Apparel, Nike, Addidas,NewArrivalpage,Searchbarpageload}