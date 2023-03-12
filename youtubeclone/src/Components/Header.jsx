import React, { useState } from "react";
import '../Styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {

    const [search, setSearch] = useState('');

    return(<div className="header" >
        <div className="left" >
        <MenuIcon/>
        <Link to={'/'}>
        <img
        className="YouTube-Logo" 
        src="YouTube-Logo.png" 
        alt="YouTubeLogo"
        />
        </Link>
        </div>
        <div className="middle" >
        <input onChange={e=> setSearch(e.target.value)} value={search} placeholder="Search" />
        {/* <Link to={`/search/${search}`} > */}
        <SearchIcon className="search" />
        {/* </Link> */}
        </div>
        <div className="right" >
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <Avatar src="https://avatars.githubusercontent.com/u/108014979?v=4" />
        </div>
    </div>)
}

export default Header;