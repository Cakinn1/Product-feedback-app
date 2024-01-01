import React from "react";
import { FaChevronUp } from "react-icons/fa6";

interface UpvotesProps {
  handleCounter?: (value: number) => void;
  upvotes: number;
  id: number;
  isRoadmap?: boolean
}
export default function Upvotes(props: UpvotesProps) {
  const { handleCounter, upvotes, id, isRoadmap } = props;
  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        if (handleCounter) handleCounter(id);
      }}
      className={`${isRoadmap ? "flex gap-x-3 text-sm py-2 items-center" : "flex flex-col h-[60px]"}  hover:bg-[#cfd7ff]  cursor-pointer duration-300 px-2 space-y-1 bg-[#f2f4ff] rounded-lg justify-center items-center  py-21`}
    >
      <FaChevronUp className="text-[10px] text-[#4661E6]" />
      <p className="text-[#373f68] font-semibold">{upvotes}</p>
    </div>
  );
}
