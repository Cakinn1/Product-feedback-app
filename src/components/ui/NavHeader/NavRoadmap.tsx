import React from "react";
import { MainProps, ProductRequestsProps } from "../../../App";
import { Link } from "react-router-dom";

interface NavRoadmapProps {
  liveProductData: ProductRequestsProps[];
  plannedData: ProductRequestsProps[];
  inProgressData: ProductRequestsProps[];
}

export default function NavRoadmap(props: NavRoadmapProps) {
  const { inProgressData, liveProductData, plannedData } = props;

  return (
    <div className=" p-6 text-[#647196] bg-white rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-black">Roadmap</h1>
        <Link to="/roadmap" className="text-blue-600 cursor-pointer text-sm underline"> View</Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className={`bg-[#f49f85]  rounded-full h-2 w-2`}></div>
          <h1>Planned</h1>
        </div>
        {plannedData.length}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className={`bg-[#ad1fea] rounded-full h-2 w-2`}></div>
          <h1>In-Progress</h1>
        </div>
        {inProgressData.length}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <div className={`bg-[#62bcfa] rounded-full h-2 w-2`}></div>
          <h1>Live</h1>
        </div>
        {liveProductData.length}
      </div>
    </div>
  );
}
