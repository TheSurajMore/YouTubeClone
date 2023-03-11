import React from "react";
import '../Styles/SidebarMenu.css';

const SidebarMenu = ({Icon, title}) => {
    return(<div className="SidebarMenu" >
        {Icon}
        <h2 className="sidebarTitle" >{title}</h2>
    </div>)
 }

 export default SidebarMenu;