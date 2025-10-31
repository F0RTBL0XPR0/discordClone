import { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, firestoreDb } from "./firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("TANGINA MO SHAD");

    // ...
  } else {
    // User is signed out
    // ...
  }
});

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(firestoreDb, "messages");
  const [messages, setMessages] = useState([]);
  const bottom = useRef();
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      room,
    });

    setNewMessage("");
  };
  return (
    <div className="bg-[#323339] flex-1 flex flex-col min-h-0 relative h-full">
      <div className="h-[88.8dvh] overflow-auto p-2">
        <div className="flex flex-col items-center pt-230 text-white">
          <h1 className="text-[32px]">Welcome To</h1>
          <h1 className="text-[32px] leading-7">{room}</h1>
          <h1 className="text-[14px] text-gray-300 mt-3">
            This is the beginning of the server
          </h1>
        </div>
        {messages.map((message, index) => {
          const previousMessage = messages[index - 1];
          const showProfile =
            !previousMessage || previousMessage.user !== message.user;

          return (
            <div
              key={message.id}
              className={`flex items-center space-x-2 ${
                showProfile ? "mt-2" : "mt-0"
              } hover:bg-[#3A3B41]`}
            >
              {showProfile ? (
                <img
                  src={message.photoURL}
                  alt={message.user}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10"></div>
              )}
              <div>
                {showProfile && (
                  <p className="text-s text-gray-400">{message.user}</p>
                )}
                <p className="text-white">{message.text}</p>
              </div>
            </div>
          );
        })}
        <div ref={bottom}></div>
      </div>

      <form onSubmit={handleSubmit} className="absolute w-full bottom-[7px]">
        <input
          type="text"
          className="w-full h-[58px] p-2 rounded bg-[#222327] placeholder-[#898A92] text-white resize-none focus:outline-none"
          placeholder="Message general"
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          value={newMessage}
        />
      </form>
    </div>
  );
};
