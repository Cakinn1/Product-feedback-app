import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

interface FeedbackHeaderProps {
  setIsModalOpen: (value: boolean) => void;
}
export default function FeedbackHeader(props: FeedbackHeaderProps) {
  const { setIsModalOpen } = props;

  return (
    <div className="flex   mb-10 justify-between items-center text-sm">
      <div
        onClick={() => setIsModalOpen(false)}
        className="flex cursor-pointer hover:brightness-150 duration-300 items-center gap-x-2"
      >
        <FaChevronLeft className="text-[10px] text-[#4661E6]" />
        <h1 className="text-[#647196] ">Go Back</h1>
      </div>
    </div>
  );
}
