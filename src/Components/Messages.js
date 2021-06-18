import React,{useState} from 'react'
import People from "../shared/Data"
import "./Messages.css"
import {Link} from "react-router-dom"

function Matches({filterPerson}) {

    const [messages,setMessages]= useState(People)
    const [num,setNum] = useState(5)
  

    //  const selectNumber=()=>{
    //     props.number=num;
    // }
    return (
        <div className="message-container">
            
             {
                messages.map((person)=>(
                    <Link to="/messages/people"  onClick={() => filterPerson(person.id)}>
                         <div className="message" key={person.id} >
                       <div className="image">
                           <img src={person.image} alt={person.name} className="message-dp"/>
                       </div>
                       <div className="Name">
                       {person.name}
                       <p style={{fontSize:16}}>Hi There </p>

                       </div>
                     </div>
                     </Link>
                  
            ))}

        </div>
    )
}

export default Matches
