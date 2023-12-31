import React from "react";
import { FaChevronUp } from "react-icons/fa6";

interface UpvotesProps {
  handleCounter: (value: number) => void;
  upvotes: number;
  id: number;
}
export default function Upvotes(props: UpvotesProps) {
  const { handleCounter, upvotes, id } = props;
  return (
    <div
      onClick={() => handleCounter(id)}
      className="flex flex-col hover:bg-[#cfd7ff] h-[60px] cursor-pointer duration-300 px-2 space-y-1 bg-[#f2f4ff] rounded-lg justify-center items-center  py-2"
    >
      <FaChevronUp className="text-[10px] text-[#4661E6]" />
      <p className="text-[#373f68] font-semibold">{upvotes}</p>
    </div>
  );
}
