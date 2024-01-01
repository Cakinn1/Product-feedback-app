import React from "react";
import CategoryModal from "./CategoryModal";
import { categoryValues } from "../../contants/constValues";

interface CategoryInputProps {
  setIsCategoryOpen: (value: boolean) => void;
  setCategoryInput: (value: string) => void;
  isCategoryOpen: boolean;
  categoryInput: string;
}

export default function CategoryInput(props: CategoryInputProps) {
  const { setIsCategoryOpen, isCategoryOpen, setCategoryInput, categoryInput } =
    props;

  return (
    <div className="space-y-2 text-[#3a4374]  relative text-sm">
      <h1 className="font-bold">Category</h1>
      <p>Choose a category for your feedback</p>
      <h1
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
      >
        {categoryInput}
      </h1>
      <div>
        {isCategoryOpen && (
          <div className="absolute shadow-sm z-50 space-y-2 p-4 bg-white  w-full">
            {categoryValues.map((value, index) => (
              <CategoryModal
                setCategoryInput={setCategoryInput}
                key={index}
                text={value}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
