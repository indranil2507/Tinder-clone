import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import People from '../shared/Data'
import './TinderCard.css'

function TinderCards() {
    const [people,setPeople]=useState(People);

    const swiped = (direction, nameToDelete)=>{
        console.log("removing :" + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame =(name)=>{
        console.log(name+"left the screen")
    }


    return (
        <div className="tinderCards">
        
            <div className="tinderCards__cardContainer">

              
                {
                
                people.map((person)=>(
                    
                   
                     <TinderCard className="swipe"
                     key={person.id}
                     preventSwipe={["up","down"]}
                     onSwipe={(dir) => swiped(dir,person.name)}
                     onCardLeftScreen={()=>outOfFrame(person.name)}>
                      <div className="cardContent">
                      <div 
                     style={{backgroundImage:`url(${person.image})`}}
                     className="card">
                         <h3>{person.name}</h3>
                         <div className="bio">
                         <p>{person.sex}</p>
                         <p>{person.text}</p>
                         </div>
                       
                     </div>

                      </div>
         
                   
                     </TinderCard>
                ))}

                
               
            

            </div>

            
            
        </div>
       
    )
}

export default TinderCards
