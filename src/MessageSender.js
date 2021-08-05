import { Avatar,Input } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import "./messagesender.css"

function MessageSender() {
    
    const [items,setItems] = useState([])
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const additem = (event) => {
        event.preventDefault()
        setItems({...items,input,image})
        setInput("");
        setImage("");
    }

    const handleSubmit = () => {
        console.log("submitting")
    }
    return (
        <div className="messagesender">
            <div className="messagesender_top">
                <Avatar src="https://pbs.twimg.com/profile_images/1396372546443005953/IBI7wqyf_400x400.jpg" alt=""/>
                <form>
                    <input type="text" className="messagesender_input" placeholder="what's on your mind" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <Input type="file" className="messagessender_fileselector" onChange={handleChange}/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messagesender_bottom">
                <div className="messagesender_option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messagesender_option">
                    <PhotoLibrary style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
            
                <div className="messagesender_option">
                    <InsertEmoticon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
