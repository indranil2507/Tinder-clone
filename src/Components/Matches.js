import React,{useState} from 'react'
import People from "../shared/Data"

function Matches() {

    const [messages,setMessages]= useState(People)
    return (
        <div>
             {/* {
                messages.map((person)=>(
                   <div>
                       {person.name}
                    </div>
                   
                  
                ))} */}

                Matches

        </div>
    )
}

export default Matches
