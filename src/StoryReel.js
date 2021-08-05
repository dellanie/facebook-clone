import React from 'react';
import Story from './Story';
import "./storyreel.css";

function StoryReel() {
    return (
        <div className="storyreel">
           <Story
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCPEywnZuSLYXIj703yWqVbJVUyXOMO0m_w&usqp=CAU"
           profileSrc="https://pbs.twimg.com/profile_images/1396372546443005953/IBI7wqyf_400x400.jpg"
           title="llanie"
           /> 
          <Story
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAUIGLZRZgJbghJTsnJcku-bc6beuyPZHvg&usqp=CAU"
           profileSrc="https://pbs.twimg.com/profile_images/1263473851826044930/4fGCy9VS_400x400.jpg"
           title="llanie"
           /> 
          <Story
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3mUNVTBZCXKNufU2oObxMzmwMulaOTX_dg&usqp=CAU"
           profileSrc="https://pbs.twimg.com/profile_images/1397176432099532801/vDM3LTHP_400x400.jpg"
           title="llanie"
           /> 
        </div>
    )
}

export default StoryReel
