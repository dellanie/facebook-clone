import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel';
import "./feed.css";

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post
            profilePic=""
            message="yoo this is the message"
            timestamp="time"
            imageName="imgname"
            username="frankie"
            />

            
            
        </div>
    )
}

export default Feed
