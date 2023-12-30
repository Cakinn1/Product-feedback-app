import React, { useState } from "react";
import { Products } from "../typings/typings";
import Button from "./ui/NavHeader/Button";
import Sort from "./ui/NavHeader/Sort";
import data from "../contants/data.json"

export default function NavHeader({ productData, setProductData }: any) {
  const [helperFilter, setHelperFilter] = useState<any>(data)
  const [selection, setSelection] = useState<string>("");

  function storeCurrentSelect(value: string) {
    setSelection(value);

    if(selection === 'Most Upvotes') {
      setProductData([...productData.productRequests]?.sort((a: any, b:any) => b.upvotes - a.upvotes))
    } else if (selection === 'Least Upvotes') {
      setProductData([...productData.productRequests]?.sort((a: any, b: any) => a.upvotes - b.upvotes))
    }
  }
  console.log(productData)


  const numberOfSuggestions = productData.productRequests?.filter(
    (item: any) => item.status === "suggestion"
  ).length;



  return (
    <nav className="border bg-[#373f68] flex justify-between items-center py-3 px-6 text-white rounded-lg">
      <div className="flex items-center gap-8">
        <div className="flex gap-3">
          <img
            src="/assets/suggestions/icon-suggestions.svg"
            alt="suggestion icon"
          />
          <span className="font-bold text-[18px]">
            {numberOfSuggestions} Suggestions
          </span>
        </div>
          <Sort selection={selection} setSelection={setSelection} storeCurrentSelect={storeCurrentSelect} />
      </div>

      {productData?.productRequests?.map((item: any) => {
        return <h1>{item.upvotes}</h1>
      })}

      <Button
        linkTo="/feedback/add"
        textValue="Add Feedback"
        backgroundValue="#AD1FEA"
      />
    </nav>
  );
}
