import React from "react";
import '../Styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

const Header = () => {
    return(<div className="header" >
        <div className="left" >
        <MenuIcon/>
        <img
        className="YouTube-Logo" 
        src="YouTube-Logo.png" 
        alt="YouTubeLogo"
        />
        </div>
        <div className="middle" >
        <input placeholder="Search" />
        <SearchIcon className="search" />
        </div>
        <div className="right" >
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <Avatar/>
        </div>
    </div>)
}

export default Header;