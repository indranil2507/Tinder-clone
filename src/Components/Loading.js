import React,{useState,useEffect} from 'react'
import "./Loading.css"
import logow from "../assets/tinder-logo-1.png"

function Loading() {
    const [active,setActive] = useState(true)
    // let n =3
    //     while(n>0){
    //         if(active){
    //             setActive(!active)
               
    //         }
    //         else{
    //             setActive(!active)
    
    //         }
    //         n--;

    //     }
    // useEffect(() => {
    //     let n =10
    //     while(n>0){
    //         if(active){
    //             setActive(!active)
               
    //         }
    //         else{
    //             setActive(!active)
    
    //         }
    //         n--;

    //     }
       
        
    //   },)

      console.log(active)

    return (
        
        <div className="loading">
            <img className="logo" src={logow} alt="logo" />
        </div>
    )
}

export default Loading
