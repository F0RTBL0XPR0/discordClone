import React from "react";

export default function Servers() {
  return (
    <div className="w-[72px] h-full bg-[#2C2D32] flex flex-col items-center">
      <div className="border-b pb-2 border-[#393A3F]">
        <div className="group rounded-[12px] w-[40px] h-[40px] bg-[#35353A] flex items-center justify-center cursor-pointer hover:bg-[#5865F2] transition-all  duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[24px] h-[24px]"
          >
            <path
              fill="currentColor"
              d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
              className="w-[24px] h-[24px] text-[#DFE0E2] group-hover:text-white"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white w-[4px] h-10 mt-2 rounded-tr-2xl rounded-br-2xl absolute left-0"></div>
        <img
          src="src\assets\group_pic.png"
          className="w-[40px] mt-2 rounded-[12px] cursor-pointer"
        />
      </div>
    </div>
  );
}
