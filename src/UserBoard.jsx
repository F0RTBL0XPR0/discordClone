// UserBoard.jsx
import React, { useEffect, useState } from "react";
import { auth, rtdb } from "./firebase-config"; // use rtdb instead of firestoreDb
import {
  ref,
  onValue,
  set,
  onDisconnect,
  serverTimestamp,
} from "firebase/database";

export default function UserBoard() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // console.log("No user signed in");
        return;
      }

    //   console.log("User signed in:", user.uid);

      const userStatusRef = ref(rtdb, `/status/${user.uid}`);

      onDisconnect(userStatusRef).set({
        state: "offline",
        last_changed: serverTimestamp(),
        username: user.displayName || "Unknown",
        photoURL: user.photoURL || null,
      });

      set(userStatusRef, {
        state: "online",
        last_changed: serverTimestamp(),
        username: user.displayName || "Unknown",
        photoURL: user.photoURL || null,
      });

      const statusRef = ref(rtdb, "/status");
      onValue(statusRef, (snapshot) => {
        const data = snapshot.val() || {};
        const online = Object.values(data)
          .filter((u) => u.state === "online")
          .map((u) => ({
            username: u.username,
            photoURL: u.photoURL || null,
          }));

        setOnlineUsers(online); // update state
        // console.log("Currently online users:", online);
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full md:w-[264px] bg-[#323339] p-2 overflow-auto border-[#393A3F] border-l-2 h-full">
      <div className="pt-[20px] pr-[4px] pl-[0px]">
        <h1 className="text-[14px] text-[#9B9CA3]">
          Online - {onlineUsers.length}
        </h1>
      </div>

      {onlineUsers.map((user, index) => (
        <div key={index} className="flex items-center mt-4">
          <img
            src={user.photoURL || "/default-pfp.png"} // fallback if no photo
            alt={user.username}
            className="w-8 h-8 rounded-full mr-2"
          />
          <h1 className="text-white font-medium">{user.username}</h1>
        </div>
      ))}
    </div>
  );
}
