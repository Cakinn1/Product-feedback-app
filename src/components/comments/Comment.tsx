import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import Header from "./Header";
import CardHeader from "./CardHeader";
import { ProductRequestsProps } from "../../App";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export interface CommentProps {
  filteredData: ProductRequestsProps[];
  handleCounter: (value: number) => void
}
export default function Comment(props: CommentProps) {
  const { filteredData, handleCounter } = props;
  const { id } = useParams();

  const singleData = filteredData.filter((item) => {
    return item.id === parseInt(id!);
  });
  const object = singleData[0];

  return (
    <section className="max-w-[800px] space-y-4 mx-auto py-[60px] w-full">
      <Header />
      <CardHeader handleCounter={handleCounter} object={object} />
      <CommentCard object={object}/>
    </section>
  );
}
