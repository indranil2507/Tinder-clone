import React from 'react'
import PeopleHero from './PeopleHero'

function People(props) {
    // console.log(person)
    return (
        <div>
            {props.person.name}
            
             {/* {props.person.map((people)=>{
                 {sex}=people
                 <div>
                     {people.sex}
                         13
                      {people.name}
                </div>
                
             })} */}
             
             
        </div>
    )
}

export default People
