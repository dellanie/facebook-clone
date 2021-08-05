import { Avatar } from '@material-ui/core';
import { AccountCircleOutlined, ExpandMore, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react';
import "./post.css"

function Post({profilePic,imageName,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post_topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p> {/* creating time stamp and passing it as an integer  utc for internation timezone */}
                </div>
            </div>

            <div className="post_message">
                <p>{message}</p>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp/>
                    <p>Like</p>
                    </div>
                <div className="post_option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleOutlined/>
                     <ExpandMore/>
                </div>
            </div>
        </div>
    )
}

export default Post
