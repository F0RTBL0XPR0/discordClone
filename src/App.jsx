import { useState, useRef } from "react";
import viteLogo from "/vite.svg";

import "./App.css";
import { Auth } from "./auth";
import Cookies from "universal-cookie";
import { Chat } from "./Chat";
import OverlayOptions from "./OverlayOptions";
import GroupTitle from "./GroupTitle";
import Heading from "./Heading";
import UserBoard from "./UserBoard";
import Channels from "./Channels";
import Servers from "./Servers";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }

  return (
    <>
      {room ? (
        <div className="border h-screen flex flex-col overflow-hidden">
          <GroupTitle />
          <OverlayOptions />
          <div className="h-screen grid grid-cols-[72px_303px_1fr_264px] grid-rows-[48px_1fr]">
            {/* Leftmost vertical bar (full height) */}
            <div className="row-span-3 ">
              <Servers />
            </div>

            {/* Top bar (starts after leftmost bar) */}
            <div className="col-span-3 ">
              <Heading serverName={room} />
            </div>

            {/* Main content area */}
            <div className="">
              <Channels />
            </div>

            {/* Right sidebar */}
            <div className="">
              <Chat room={room} />
            </div>
            <div className="">
              <UserBoard />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-dvh ">
          <div className="rounded-4xl flex flex-col bg-gray-900 w-[300px] h-[300px] justify-center items-center">
            <label className="text-3xl text-white">Enter Room Name:</label>
            <input className="mt-3 bg-gray-400 rounded-[4px]" ref={roomInputRef} />
            <button
              className="mt-12 bg-green-500 p-3 text-2xl rounded-2xl text-white cursor-pointer"
              onClick={() => setRoom(roomInputRef.current.value)}
            >
              Enter Chat
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

// return (
//   <>
//     {room ? (
//       <div className="min-h-screen flex flex-col">
//         <GroupTitle />
//         <div>
//           <Heading />
//         </div>

//         <div className="flex flex-1 min-h-0 flex-row ">
//           <Servers />
//           <Channels />
//           <Chat room={room} />
//           <UserBoard />
//         </div>

//         <OverlayOptions />
//       </div>
//     ) : (
//       <div>
//         <label>Enter Room Name:</label>
//         <input ref={roomInputRef} />
//         <button onClick={() => setRoom(roomInputRef.current.value)}>
//           Enter Chat
//         </button>
//       </div>
//     )}
//   </>
// );
