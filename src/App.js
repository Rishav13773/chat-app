import React, { useState } from 'react'
import Login from './components/Login'
import Room from './components/Room'
import Cookies from 'universal-cookie';
import Chat from './components/Chat';

const App = () => {
  const cookies = new Cookies()
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const [user, setUser] = useState("");

  if (!isAuth) {
    return (
      <div>
        <Login setIsAuth={setIsAuth} setUser={setUser} />
      </div>
    )
  }

  return (
    <div>
      {room ? <div><Chat room={room} user={user} /></div> : <Room setRoom={setRoom} />}
    </div>

  )
}

export default App