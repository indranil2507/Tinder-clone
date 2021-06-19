import React,{useState} from 'react'
import People from "../shared/Data"
import "./Matches.css"
import {Link } from "react-router-dom"

function Matches({filterPerson}) {

    const [match,setMatch]= useState(People)
    return (
        <div className="matches">
             {
                match.map((person)=>(
                    <Link to="/matches/people"  onClick={() => filterPerson(person.id)}>
                   <div className="match">
                        <div 
                     style={{backgroundImage:`url(${person.image})`}}
                     className="card-match">
                         <p className="match-name">{person.name}</p>
                     </div>
                    </div>
                    </Link>
                   
                  
                ))}

               

        </div>
    )
}

export default Matches
