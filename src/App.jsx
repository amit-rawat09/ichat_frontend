import React from 'react'
import './App.css'
import socketIO from "socket.io-client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Join from './component/Join/Join';
import Chat from './component/chat/chat';

// const ENDPOINT = `http://localhost:4500/`
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] })

function App() {

  // socket.on("connect", () => {

  // })
  return (
    <div>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div >
  )
}

export default App