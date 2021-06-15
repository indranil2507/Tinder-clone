import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'

function TinderCards() {
    const [people,setPeople]=useState([
        {
        id: 1,
        name: 'susan smith',
       
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      
      },
      {
        id: 2,
        name: 'anna johnson',
        
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
       
      }
    ]);

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
              
                {people.map((person)=>(
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
                     </div>

                      </div>
         
                   
                     </TinderCard>
                ))}

                
               
            

            </div>

            
            
        </div>
       
    )
}

export default TinderCards
