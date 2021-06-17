import React,{useState} from 'react'
import Header from './Components/Header';
import Loading from './Components/Loading'
import SwipeButton from './Components/SwipeButton'
import './App.css';
import TinderCards from './Components/TinderCards';
import SideHeader from './Components/SideHeader';
import Matches from './Components/Matches';
import Messages from './Components/Messages';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { MessageSharp } from '@material-ui/icons';

function App() {
  const [loading,setLoading] = useState(true)

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
            <Route exact path="/">
                <Matches/>
            </Route>
            <Route exact path="/messages">
                <Messages/>
            </Route>
           </Switch> 
        </div>
        <div className="mainSection">
        <Header/>
       <TinderCards/>
       <SwipeButton />

        </div>
     
       
      
      
      </div>
      </Router>
      
    );

  }


  
}

export default App;
