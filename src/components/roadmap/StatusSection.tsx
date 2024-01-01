import React from "react";
import RoadmapCard from "./RoadmapCard";
import { ProductRequestsProps } from "../../App";

interface statusSectonProps {
  status: string;
  data: ProductRequestsProps[];
  statusInfo: string;
  handleCounter: (value: number) => void;
}

export default function StatusSection(props: statusSectonProps) {
  const { status, data, statusInfo, handleCounter } = props;
  return (
    <div className="flex flex-col w-[30%]">
      <div>
        <h1 className="text-[#3a4374] text-lg font-bold">
          {status} <span>({data.length})</span>
        </h1>
        <p className="text-[#647196]">{statusInfo}</p>
      </div>
      <div className="mt-4 space-y-4">
        {data.map((item) => (
          <RoadmapCard handleCounter={handleCounter} {...item} />
        ))}
      </div>
    </div>
  );
}
