import react from 'react'
import Header from './Components/Header';
import SwipeButton from './Components/SwipeButton'
import './App.css';
import TinderCards from './Components/TinderCards';

function App() {
  return (
    <div className="app">
     <Header/>
     <TinderCards/>
     <SwipeButton />
     
    
    
    </div>
  );
}

export default App;
