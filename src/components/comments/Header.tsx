import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface HeaderProps {
  setIsModalOpen: (value: boolean) => void
}

export default function Header(props: HeaderProps) {
  const {setIsModalOpen} = props
  return (
    <div className="flex  mb-10 justify-between items-center text-sm">
      <Link to="/" className="flex hover:brightness-150 duration-300 items-center gap-x-2">
        <FaChevronLeft className="text-[10px] text-[#4661E6]" />
        <h1 className="text-[#647196] ">Go Back</h1>
      </Link>
      <button onClick={() => setIsModalOpen(true)} className="text-white font-semibold bg-[#4661e6] px-6 py-3 hover:brightness-150 duration-300 rounded-md">
        Edit Feedback
      </button>
    </div>
  );
}
