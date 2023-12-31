import React from "react";
import FeaturesCard from "../FeaturesCard";
import { CommentProps } from "./Comment";
import Upvotes from "../productcard/Upvotes";
import { ProductRequestsProps } from "../../App";
import CardInfo from "../productcard/CardInfo";

interface CardHeaderProps {
  object: ProductRequestsProps;
  handleCounter: (value: number) => void;
}

export default function CardHeader(props: CardHeaderProps) {
  const { object, handleCounter } = props;
  const commentsLength = object.comments?.length;
  return (
    <div className="border mb-5 w-full border-white   bg-white h-[151px] p-6 rounded-2xl">
      <div className="flex gap-x-8">
        <Upvotes handleCounter={handleCounter} key={object.id} id={object.id} upvotes={object.upvotes} />
        <CardInfo
          title={object.title}
          description={object.description}
          category={object.category}
          commentsLength={commentsLength}
        />
        
      </div>
    </div>
  );
}
