import React from "react";

interface NavLeftProps {
  handleSortNav: (value: string) => void;
}
export default function NavSortLeft(props: NavLeftProps) {
  const { handleSortNav } = props;
  return (
    <div className=' p-6 min-h-[160px] gap-x-4 flex flex-wrap bg-white rounded-lg space-y-4"'>
      <div onClick={() => handleSortNav("All")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        All
      </div>
      <div onClick={() => handleSortNav("UI")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        UI
      </div>
      <div onClick={() => handleSortNav("UX")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        UX
      </div>
      <div onClick={() => handleSortNav("enhancement")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        Enchancement
      </div>
      <div onClick={() => handleSortNav("bug")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        Bug
      </div>
      <div onClick={() => handleSortNav("feature")} className="text-[#4661e6] flex justify-center items-center h-8 cursor-pointer font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-4 rounded-lg">
        Feature
      </div>
    </div>
  );
}
