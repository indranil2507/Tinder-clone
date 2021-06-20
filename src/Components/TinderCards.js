import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import People from '../shared/Data'
import './TinderCard.css'

function TinderCards() {
    const [people,setPeople]=useState(People);
    const [directions,setDirections] = useState("");
    const [likes,setLikes] = useState(0)
    const [dislikes,setDislikes] = useState(0)
    const [superlikes,setSuperlikes] = useState(0)
    // const [count,setCount]= useState(0)


    const swiped = (direction, nameToDelete)=>{
        console.log("removing :" + nameToDelete);
        console.log(direction);
        setSwipe(direction);
        // newlikes(directions);
        

       

        
        
        // setLastDirection(direction);
    }
    const setSwipe=(direction)=>{
        console.log("function called")
        if(direction.toString()==="left"){
            setDislikes((prevState)=>(prevState) + 1)
            // setDislikes(dislikes+1);
            console.log("left swipe")
          
        }
        else if(direction.toString()==="up"){
        setSuperlikes((prevState)=>(prevState) + 1);
        // console.log("superlike")
        }
       else{
             setLikes((prevState)=>(prevState) + 1);
            // console.log("right-swipe")
      
        }
        console.log(likes);
        console.log(dislikes);
        console.log(superlikes);


    }
   

  
    

    // if(directions==="left"){
    //         setDislikes(dislikes++);
    //  }
    //  if(directions==="up"){
    //         setSuperlikes(superlikes++);
    //  }
    // if(directions==="right"){
    //         setLikes(1);
    // }
    

    

    const outOfFrame =(name)=>{
        console.log(name+"left the screen")
    }


    return (
        <>
        <div className="header">
       
        <div className="dislikes">
                Dislikes:{dislikes}
            </div>
        <div className="superlikes">
                SuperLikes:{superlikes}
            </div>
            <div className="likes">
                Likes:{likes}
            </div>
        </div>
            <div className="tinderCards">
        
        <div className="tinderCards__cardContainer">

          
            {
            
            people.map((person)=>(
                
               
                 <TinderCard className="swipe"
                 key={person.id}
                 preventSwipe={["down"]}
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
   
        </>
    
    )
}

export default TinderCards
