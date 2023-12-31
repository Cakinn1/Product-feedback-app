import React from "react";
import { ProductRequestsProps } from "../pages/Home";
import Upvotes from "./productcard/Upvotes";
import CardInfo from "./productcard/CardInfo";

interface FeaturesCardProps extends ProductRequestsProps {
  handleCounter: (value: number) => void
}

export default function FeaturesCard(props: FeaturesCardProps) {
  const { category, description, id, status, title, upvotes, comments, handleCounter } = props;
  const commentsLength: number | undefined = comments?.length
  return (
    <div className=" border w-full border-white cursor-pointer group hover:border-[#ad1fea] duration-300 bg-white h-[151px] p-6 rounded-2xl">
      <div className="flex gap-x-8">
        <Upvotes key={id} id={id} upvotes={upvotes} handleCounter={handleCounter} />
        <CardInfo title={title} description={description}  category={category} commentsLength={commentsLength} />
      </div>
    </div>
  );
}
