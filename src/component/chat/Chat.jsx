import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join'
import socketIo, { Socket } from 'socket.io-client'
import "./Chat.css"
import Message from "../Message/Message.jsx";
import ReactScrollToBottom from "react-scroll-to-bottom";

import { IoSend } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const ENDPOINT = "https://ichats.onrender.com/"

let socket;

function Chat() {
  const [id, setid] = useState('')
  const [message, setMessage] = useState([])

  const send = () => {
    const message = document.getElementById('chatInput').value
    socket.emit('message', { message, id })
    document.getElementById('chatInput').value = ""
  }


  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket'] })

    socket.on('connect', () => {
      setid(socket.id)
    })

    console.log(socket);
    socket.emit('joined', { user })

    socket.on('welcome', (data) => {
      setMessage([...message, data])
      console.log(data);
    })
    socket.on("userJoined", (data) => {
      setMessage([...message, data])
      console.log(data);
    })
    socket.on('leave', (data) => {
      setMessage([...message, data])
      console.log(data);
    })

    return () => {
      socket.emit("disconect")
      Socket.off()
    }
  }, [])

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessage([...message, data])
      console.log(user, message, id);
    })

    return () => {
      socket.off()
    }
  }, [message])


  return (
    <div className='chatPage'>
      <div className="chatContainer">
        <div className="header">
          <h2>iChat</h2>
          <a href="/"><MdClose className='close' /></a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {
            message.map((data, idx) => {
              return <Message key={idx} user={data.id === id ? "" : data.user} message={data.message} classs={data.id === id ? "right" : "left"} />
            })
          }
        </ReactScrollToBottom>
        <div className="inputBox">
          <input onKeyDown={(e) => e.key === "Enter" ? send():null} type="text" id='chatInput' />
          <button onClick={send} className='sendBtn' ><IoSend className='send' /></button>
        </div>
      </div>
    </div>
  )
}

export default Chat