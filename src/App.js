import React, { useState } from "react";
import Login from "./components/Login";
import Room from "./components/Room";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";

const App = () => {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const [user, setUser] = useState("");

  if (!isAuth) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuth={setIsAuth} setUser={setUser} />}
        />
      </Routes>
    );
  }

  return (
    <div>
      {room ? (
        <div>
          <Chat room={room} user={user} setIsAuth={setIsAuth} isAuth={isAuth} />
        </div>
      ) : (
        <Routes>
          <Route path="/room" element={<Room setRoom={setRoom} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
