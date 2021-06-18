import React,{useState} from 'react'
import People from "../shared/Data"
import "./Messages.css"

function Matches() {

    const [messages,setMessages]= useState(People)
    return (
        <div className="message-container">
             {
                messages.map((person)=>(
                   <div className="message" key="person.id">
                       <div className="image">
                           <img src={person.image} alt={person.name} className="message-dp"/>
                       </div>
                       <div className="Name">
                       {person.name}
                       <p style={{fontSize:16}}>Hi There </p>

                       </div>
                     </div>
            ))}

        </div>
    )
}

export default Matches
