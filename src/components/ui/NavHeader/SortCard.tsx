import React from "react";
import { sortListItem } from "../../../contants/constValues";
export default function SortCard({
  isSortOpen,
  storeCurrentSelect,
  selection,
}: {
  isSortOpen: boolean;
  selection: string;
  storeCurrentSelect: (value: string) => void;
}) {

    console.log(selection)
  return (
    <div
      className={`absolute w-[255px] shadow-2xl rounded-lg bg-white duration-300 -bottom-[300px] ${
        isSortOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul>
        {sortListItem.map((list, index) => (
          <div
            className={`relative w-full${
              index === sortListItem.length - 1 && "rounded-b-lg border-b-0"
            } ${index === 0 && "rounded-t-lg"} flex w-full items-center`}
          >
            <li
              onClick={() => storeCurrentSelect(list.listAction)}
              key={index}
              className={`hover:text-[#c75af6] w-full  border-b  p-4  cursor-pointer duration-300 ${
                list.listAction === selection ? "text-[#c75af6]" : "text-black"
              } `}
            >
              {list.listAction}
            </li>

            <img className={`absolute duration-300 right-6 ${selection === list.listAction ? "opacity-100" : "opacity-0" }`} src="/assets/shared/icon-check.svg" alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
}
