import { Avatar } from '@material-ui/core';
import { Chat, EmojiFlags, LocalHospital, People, Storefront, YouTube } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import React from 'react';
import "./sidebar.css";
import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src=""
            Icon={Avatar}
            title="LLanie"/>
            <SidebarRow src=""
            Icon={LocalHospital}
            title="Covid-19 Information Center"/>
            <SidebarRow src=""
            Icon={EmojiFlags}
            title="Pages"/>
            <SidebarRow src=""
            Icon={People}
            title="Friends"/>
            <SidebarRow src=""
            Icon={Chat}
            title="Message"/>
            <SidebarRow src=""
            Icon={Storefront}
            title="Marketplace"/>
            <SidebarRow src=""
            Icon={YouTube}
            title="Videos"/>
        </div>
    )
}

export default Sidebar
