import React from 'react'
import "./People.css"
import PeopleHero from './PeopleHero'
import DoneAllIcon from '@material-ui/icons/DoneAll';

function People(props) {
    // console.log(person)
    return (
        <div className="people-section">
            <div className="people-main-section">
                <div className="main-head">
                    <div className="head-dp-sec">
                    <img src={props.person.image} alt={props.person.id} className="head-dp"/>
                    </div>
                 
                   <p>You matched with {props.person.name} on 13/5/21</p>
                </div>
                <div className="main-hero">
                    <p style={{marginBottom:25}}>You Matched with {props.person.name}</p>
                    <img src={props.person.image} alt={props.person.id} className="hero-dp"/>
                    <p>Know when {props.person.name} has read your message</p>
                    <button className="btn"><DoneAllIcon fontSize="small"/>{" "} Get Read Receips</button>
                </div>
                <div className="main-footer">
                    footer
                </div>

            </div>
            <div className="people-side-section">
               <div className="side-image">
                    <img src={props.person.image} alt={props.person.id} className="side-dp"/>
               </div>
               <div className="side-text">
                  <p className="Name">{props.person.name}</p> 
                  <div className="info">
                      <p>{props.person.sex}</p>
                      <p>{props.person.text}</p>
                  </div>
               </div>
               <div className="side-footer">
                   <div className="button">
                        unmatch
                   </div>
                   <div className="button">
                       report
                    </div>


               </div>
            </div>

        
            {/* {props.person.name} */}
            
            
             
             
        </div>
    )
}

export default People
