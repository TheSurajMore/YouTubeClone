import React from "react";
import '../Styles/Sidebar.css'
import SidebarMenu from "./SidebarMenu";
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater,
         ThumbUpAltOutlined, ExpandMoreOutlined } from "@mui/icons-material";

const Sidebar = () => {
    return(<div className="Sidebar" >
        <SidebarMenu Icon={<Home className="sidebarIcon" />} title={'Home'} />
        <SidebarMenu Icon={<Whatshot className="sidebarIcon" />} title={'Trending'} />
        <SidebarMenu Icon={<Subscriptions className="sidebarIcon" />} title={'Subscription'} />
        <hr/>
        <SidebarMenu Icon={<VideoLibrary className="sidebarIcon" />} title={'Library'} />
        <SidebarMenu Icon={<History className="sidebarIcon" />} title={'History'} />
        <SidebarMenu Icon={<OndemandVideo className="sidebarIcon" />} title={'Your Videos'} />
        <SidebarMenu Icon={<WatchLater className="sidebarIcon" />} title={'Watch Later'} />
        <SidebarMenu Icon={<ThumbUpAltOutlined className="sidebarIcon" />} title={'Liked Videos'} />
        <SidebarMenu Icon={<ExpandMoreOutlined className="sidebarIcon" />} title={'Show More'} />
        <hr/>
    </div>)
}

export default Sidebar;