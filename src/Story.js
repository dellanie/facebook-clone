import { Avatar } from '@material-ui/core'
import React from 'react';
import "./story.css"

function Story({ image, profileSrc, title}) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story"> {/* backgroundimage inline styling */}
            <Avatar src={profileSrc} className="story_avatar"/>
            <h4>{title}</h4>
            
        </div>
    )
}

export default Story
