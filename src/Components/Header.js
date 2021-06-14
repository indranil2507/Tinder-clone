import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import Logo from '../assets/download.jpeg'
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            
            <IconButton>
            <PersonIcon  classname="header__icon"/>
            </IconButton>
            <img className="header__logo"
            src={Logo} alt=" "/>
             
             <IconButton>
            <ForumIcon classname="header__icon"/>
            </IconButton>
          
            
        </div>
    )
}

export default Header
