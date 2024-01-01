import React, { useState } from "react";
import { Products } from "../typings/typings";
import Button from "./ui/NavHeader/Button";
import Sort from "./ui/NavHeader/Sort";
import data from "../contants/data.json";
import { MainProps } from "../App";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import SortingModal from "./roadmap/SortingModal";

interface NavHeaderProps {
  productData: MainProps;
  setProductData: (value: MainProps) => void;
  setIsModalOpen: (value: boolean) => void;
  handleSort: (value: string) => void;
}

export default function NavHeader(props: NavHeaderProps) {
  const { productData, setProductData, setIsModalOpen, handleSort } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('Most Upvotes')

  const numberOfSuggestions = productData.productRequests.filter((item) => {
    return item.status === "suggestion";
  });

  const textValue: string[] = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  return (
    <nav className="border bg-[#373f68] h flex justify-between items-center py-3 px-6 text-white rounded-lg">
      <div className="flex items-center gap-8">
        <div className="flex gap-3">
          <img
            src="/assets/suggestions/icon-suggestions.svg"
            alt="suggestion icon"
          />
          <span className="font-bold text-[18px]">
            {numberOfSuggestions.length} Suggestions
          </span>
        </div>
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="flex cursor-pointer relative gap-x-4"
        >
          <h1 className="text-sm">Sort By:</h1>
          <div className="flex items-center gap-x-4">
            <p className="font-bold">{select}</p>
            <FaChevronDown className="text-sm" />
          </div>
          {modalOpen && (
            <div className="absolute p-2 -bottom-[200px] px-4 z-50 space-y-2 rounded-md text-black bg-white w-[200px] ">
              {textValue.map((item, index) => (
                <SortingModal setSelect={setSelect} key={index} text={item} handleSort={handleSort} />
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="bg-[#ad1fea] text-sm px-6 font-semibold py-3 rounded-lg"
      >
        + Add Feedback
      </button>
    </nav>
  );
}
