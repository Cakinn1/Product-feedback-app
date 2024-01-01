import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

interface HeaderProps {
  setIsModalOpen: (value: boolean) => void;
}

export default function Header(props: HeaderProps) {
  const { setIsModalOpen } = props;
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="flex hover:opacity-50 text-sm duration-300 cursor-pointer w-fit gap-x-2 items-center"
    >
      <FaChevronLeft className=" text-[#4661e6]" />
      <h1 className="text-[#647196]">Go Back</h1>
    </div>
  );
}
