import React from 'react'
import group_pic from "./assets/group_pic.png"
export default function GroupTitle() {
  return (
    <div className="h-[32px] flex justify-center center items-center pt-[5px] pb-[5px] ">
      <img src={group_pic} className="w-5 rounded-sm mr-[9px]" />
      <h1 className="text-[14px] font-[500] [word-spacing:0.2px] text-[#DFE0E2]">
        the nump clique
      </h1>
    </div>
  );
}
