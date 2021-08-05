import { Avatar, IconButton } from '@material-ui/core';
import { Add, ExpandMore, Flag, Forum, Home, Search, StorefrontOutlined, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';
import React from 'react';
import "./header.css";
import { Notifications } from '@material-ui/icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src="data:image/png;base64,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"
                alt="Facebook logo"/>
            </div>

            <div className="header_input">
                <Search/>
                <input placeholder="Search" type="text"/>
            </div>

            <div className="header_center">
                <Home fontsize="large" className="header_option"/>
                <Flag fontsize="large" className="header_option"/>
                <Subscriptions fontsize="large" className="header_option"/>
                <StorefrontOutlined fontsize="large" className="header_option"/>
                <SupervisedUserCircle fontsize="large" className="header_option"/>
            </div>
            
            <div className="header_right">
                <div className="header_info">
                <Avatar />
                <h4>logged in</h4> 
                </div>
  
            
                <div>
                    <IconButton>
                        <Add/>
                    </IconButton>

                    <IconButton>
                        <Forum/>
                    </IconButton>


                    <IconButton>
                        <Notifications/>
                    </IconButton>

                    <IconButton>
                         <ExpandMore/>  
                    </IconButton>              
                         
                </div> 
            </div>                   
        </div>
    )
}

export default Header
