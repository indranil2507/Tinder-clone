import React,{useState} from 'react'
import People from "../shared/Data"
import "./Matches.css"

function Matches() {

    const [match,setMatch]= useState(People)
    return (
        <div className="matches">
             {
                match.map((person)=>(
                   <div className="match">
                        <div 
                     style={{backgroundImage:`url(${person.image})`}}
                     className="card-match">
                         <p className="match-name">{person.name}</p>
                     </div>
                    </div>
                   
                  
                ))}

               

        </div>
    )
}

export default Matches
