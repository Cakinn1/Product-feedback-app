import React, { useState } from "react";
import SortCard from "./SortCard";

export default function Sort({
  selection,
  storeCurrentSelect,
  setSelection,
}: {
  selection: string;
  storeCurrentSelect: (value: string) => void;
  setSelection: (value: string) => void;
}) {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="flex gap-2 cursor-pointer hover:opacity-50 duration-300"
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        <h1>Sort by:</h1>
        <div className="flex gap-2 items-center">
          <span>Most upvotes</span>
          {isSortOpen ? (
            <img
              className="w-3 object-cover h-2 "
              src="/assets/shared/icon-arrow-up.svg"
              alt=""
            />
          ) : (
            <img
              className="w-3 object-cover h-2 "
              src="/assets/shared/icon-arrow-down.svg"
              alt=""
            />
          )}
        </div>
      </div>
      <SortCard
        selection={selection}
        storeCurrentSelect={storeCurrentSelect}
        isSortOpen={isSortOpen}
      />
    </div>
  );
}
