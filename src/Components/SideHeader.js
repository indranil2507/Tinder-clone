import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import dp from "../assets/dp.jpeg"
import {Link } from "react-router-dom"

import "./SideHeader.css"

function SideHeader() {
    return (
        <>
        <div className="sideheader">
            <div className="dp">
            <img className="dp-icon" src={dp} alt="dp"/>
            <p>My Profile</p>
            </div>
            
            <WorkIcon fontSize="small" className="icon"/>

        </div>
        <div style={{paddingBottom:50}}>
            <Link to="/">Matches</Link>
            <Link to="/messages">Messages</Link>
        </div>
        </>
    )
}

export default SideHeader
