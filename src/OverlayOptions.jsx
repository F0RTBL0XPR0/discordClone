import React from "react";
import pfp from "./assets/pfp.webp";

import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;


  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    let displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }


export default function OverlayOptions() {
  return (
    <>
      <div className="border border-[rgb(58,59,66)] w-[358px] h-[58px] bg-[#36373E] rounded-[8px] fixed bottom-[8px] left-[8px] flex items-center">
        <div className="group hover:bg-[#45464E] w-[184px] h-[42px] ml-[8px] cursor-pointer rounded-[4px] px-[3px] py[4px] duration-200 flex flex-row items-center ">
          <img
            src={auth.currentUser.photoURL}
            className="w-[32px] h-[32px] [clip-path:circle(50%_at_50%_50%)]"
          />
          <svg
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[30px] bottom-[5px]"
          >
            <circle
              r="8"
              cx="8"
              cy="8"
              className="fill-[#36373E] group-hover:fill-[#45464E] duration-200"
            />
          </svg>
          <svg
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[33px] bottom-[12px]"
          >
            <circle r="5" cx="5" cy="5" fill="#82838B" />
          </svg>

          <svg
            height="6"
            width="6"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[35px] bottom-[14px]"
          >
            <circle r="2.5" cx="3" cy="3" className="fill-[#36373E]" />
          </svg>
          <div className="ml-3 text-white">
            {/* <h1>{auth.currentUser.displayName}</h1> */}
            <h1>{auth.currentUser.displayName.length > 12 ? auth.currentUser.displayName.slice(0, 11) + "..." : auth.currentUser.displayName}</h1>
            <h1 className="text-[12px]">Invisible</h1>
          </div>
        </div>

        <div className="flex items-center flex-1 justify-between">
          <div className="group flex items-center cursor-pointer pr-2 hover:bg-[#404148] rounded-xl">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              baseProfile="full"
              className="text-[#C4C5C9] group-hover:text-white transition-colors"
            >
              <path
                fill="currentColor"
                d="M 37.75,19L 38.25,19C 38.25,19 57,19 57,39C 57,48 55,51 54,52C 54,52 51,54 51.9999,51.25C 51.9999,48.9362 53,44 53,44C 53,44 54,44 54,39C 54,33 50,22.5 39,22.5L 37,22.5C 26,22.5 22,33 22,39C 22,44 23,44 23,44C 23,44 24.0001,48.9362 24.0001,51.25C 25,54 22,52 22,52C 21,51 19,48 19,39C 19,19 37.75,19 37.75,19 Z M 26.5533,39.1655C 28.194,38.9349 29.711,40.0781 29.9416,41.7188L 31.4725,52.6117C 31.7031,54.2524 30.56,55.7694 28.9192,56C 27.2785,56.2306 25.2615,55.0875 25.0309,53.4467L 23.5,42.5538C 23.2694,40.9131 24.9126,39.3961 26.5533,39.1655 Z M 49.4467,39.1655C 51.0874,39.3961 52.7306,40.9131 52.5,42.5538L 50.9691,53.4467C 50.7385,55.0875 48.7215,56.2306 47.0808,56C 45.44,55.7694 44.2969,54.2524 44.5275,52.6117L 46.0584,41.7188C 46.289,40.0781 47.806,38.9349 49.4467,39.1655 Z "
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[16px] h-[16px] text-[#C4C5C9] group-hover:text-white transition-colors"
            >
              <path
                fill="currentColor"
                d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-[#404148] p-2 rounded-xl group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#C4C5C9] w-6 h-6 group-hover:text-white transition-colors"
            >
              <path
                d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"
                fill="currentColor"
              />
              <path
                d="M19 11a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.93V21h-3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.07A7 7 0 0 0 19 11z"
                fill="currentColor"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[16px] h-[16px] text-[#C4C5C9] group-hover:text-white transition-colors"
            >
              <path
                fill="currentColor"
                d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"
              ></path>
            </svg>
          </div>
          <div className="group cursor-pointer hover:bg-[#404148] p-2 justify-center rounded-xl mr-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[23px] h-[24px] text-[#C4C5C9] w-6 h-6 group-hover:text-white transition-colors"
            >
              <path
                fill="currentColor"
                d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
