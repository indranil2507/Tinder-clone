import React,{useState} from 'react'
import Header from './Components/Header';
import Loading from './Components/Loading'
import SwipeButton from './Components/SwipeButton'
import './App.css';
import TinderCards from './Components/TinderCards';
import SideHeader from './Components/SideHeader';
import Matches from './Components/Matches';
import Messages from './Components/Messages';
import Hero from './Components/Hero';
import People from './Components/People';
import Data from './shared/Data.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MessageSharp } from '@material-ui/icons';

function App() {
  const [loading,setLoading] = useState(true)
  const [number,setNumber] = useState(0)
  const [person,setPerson] = useState([])

  const filterPerson=(id)=>{
    const newperson = Data.filter((item) => item.id === id);
    setPerson(...newperson);
    console.log(id)
    console.log(person)
  };


  

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])

  if(loading){
    return(
      <div>
       <Loading/>
      </div>
    )

  }
  else{
    return (
   
      <Router>

        <div className="app">
        <div className="sideSection">
       

          <SideHeader />
          <Switch>
          <div class="scrollbar" id="style-4">
         <div class="force-overflow">
          <Route exact path="/">
                <Matches setNumber={setNumber} filterPerson={filterPerson}/>
            </Route>
            <Route path="/matches/people">
                <Matches setNumber={setNumber} filterPerson={filterPerson}/>
            </Route>
            <Route path="/messages">
                <Messages setNumber={setNumber} filterPerson={filterPerson}/>
            </Route>
            <Route path="/messages/people">
                <Messages setNumber={setNumber} filterPerson={filterPerson}/>
            </Route>
            

        </div>
      </div>
           
           </Switch> 
        </div>
        <div className="mainSection">
        {/* <Header/> */}
        <Route exact path="/">
                <Hero/>
            </Route>
            <Route exact path="/messages">
                <Hero/>
            </Route>
            <Route path="/matches/people">
                <People person={person} number={number}/>
            </Route>
            <Route path="/messages/people">
                <People person={person} number={number}/>
            </Route>

        </div>
     
       
      
      
      </div>
      </Router>
      
    );

  }


  
}

export default App;
