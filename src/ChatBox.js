import './ChatBox.css'
import { FaPaperPlane } from "react-icons/fa";
import {Avatar} from '@material-ui/core';
import { io } from "socket.io-client";
import { useEffect, useState } from 'react';
import socket from './services/socketservice'

const ChatBox = () => {

    const [message,SetMessage]=useState("")
    const [messages,setMessages]=useState([])

        // socket.on("connect", () => {
        //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        //   });
        // socket.on('chat message',(msg)=>{
        //     alert(msg)
        // })
    socket.on('chat message',(msg)=>{
          setMessages([...messages,msg])
    })
     const SendMessageHandler=(e)=>{
          if(message!=''){
              socket.emit('chat message',message)
              SetMessage('')
          }
          SetMessage('')
     }
    return (
        <div className="ChatBox">
            <div className="Nav">
                <Avatar className="avtr" src="https://avatars.dicebear.com/api/human/hnjnajfnjdf1.svg"/>
                <h2 className="NavName">Margot Flores</h2>
            </div>
            <div className="ChatDisplay">
                {/* <p className={`chatMessage ${true && 'chatReciever'}`}>Hey! this is a check this is a check this is a check!</p>
                <p className="chatMessage">Hey! this is a check!</p>
                <p className="chatMessage chatReciever">Hey! this is a check this is a check this is a check!</p> */}

                {
                (messages.length!=0)?
                messages.map((data)=>
                <p className="chatMessage">
                    {data}
                </p>
                ):<></>}
                {/* <p className="chatMessage chatReciever">Hey! this is a check this is a check this is a check!</p> */}
            </div>
            <div className="LastTab">
                {/* <form onSubmit={()=>SendMessageHandler()}> */}
                <input
                className="MessageTextInputBox"
                 type="text"
                value={message}
                placeholder="Write a message"
                onChange={(e)=>SetMessage(e.target.value)} required/>
                {/* <button type='submit' onClick={()=>SendMessageHandler()}>Send Text</button> */}
                {/* </form> */}
                <a className="iconToSend" onClick={()=>SendMessageHandler()}>
                    <FaPaperPlane/>
                </a>
            </div>
        </div>
     );
}

export default ChatBox;