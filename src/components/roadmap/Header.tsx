import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setIsModalOpen: (value: boolean) => void;
}

export default function Header(props: HeaderProps) {
  const { setIsModalOpen } = props;
  const navigate = useNavigate();
  return (
    <div className="bg-[#373f68]  flex justify-between items-center text-white p-6 rounded-lg">
      <div className="flex flex-col  w-fit">
        <div
          onClick={() => navigate("/")}
          className="flex  cursor-pointer items-center gap-x-2"
        >
          <FaChevronLeft />
          <h1>Go Back</h1>
        </div>
        <h1 className="text-2xl font-bold">Roadmap</h1>
      </div>
      <button
        onClick={() => {
          navigate("/");
          setIsModalOpen(true);
        }}
        className="bg-[#ad1fea] text-sm px-6 font-semibold py-3 rounded-lg"
      >
        + Add Feedback
      </button>
    </div>
  );
}
