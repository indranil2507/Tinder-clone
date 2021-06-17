import React,{useState} from 'react'
import Header from './Components/Header';
import Loading from './Components/Loading';
import SwipeButton from './Components/SwipeButton'
import './App.css';
import TinderCards from './Components/TinderCards';

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
      <div className="app">
       <Header/>
       <TinderCards/>
       <SwipeButton />
       
      
      
      </div>
    );

  }


  
}

export default App;
