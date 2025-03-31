import React, { useState } from 'react'
import './Join.css'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById('join-input').value
  document.getElementById('join-input').value = ""
}

function Join() {
  const [name, setName] = useState("");

  return (
    <div className='joinpage'>
      <div className="joincontainer">
        <IoChatbubbleEllipsesOutline className='logo' />
        <h1>iChat</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' id='join-input' />
        <Link onClick={(e) => !name ? e.preventDefault() : ""} to="/chat"><button className='joinbtn' onClick={sendUser}>Join Now</button></Link>
      </div>
    </div>
  )
}

export default Join

export { user }