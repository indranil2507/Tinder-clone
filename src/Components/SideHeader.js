import React,{useState} from 'react'
import WorkIcon from '@material-ui/icons/Work';
import dp from "../assets/dp.jpeg"
import {Link } from "react-router-dom"

import "./SideHeader.css"

function SideHeader() {
    const [active,setActive] = useState(0);
    return (
        <>
        <div className="sideheader">
            <div className="dp">
            <img className="dp-icon" src={dp} alt="dp"/>
            <p style={{fontSize:32}}>My Profile</p>
            </div>
            
            <WorkIcon fontSize="small" className="icon"/>

        </div>
        <div className="navigation">
            <div className="nav-item">
                <Link to="/" onClick={()=>setActive(1)} className={`${(active===1 )? "active" : ""}`}>Matches</Link>
            </div>
            <div className="nav-item">
            <Link to="/messages" onClick={()=>setActive(2)} className={`${(active===2 )? "active" : ""}`}>Messages</Link>
            </div>
            
            
        </div>
        </>
    )
}

export default SideHeader
