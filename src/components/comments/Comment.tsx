import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import Header from "./Header";
import CardHeader from "./CardHeader";
import { ProductRequestsProps } from "../../App";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComments from "./AddComments";
import EditCommentModal from "./EditCommentModal";

export interface CommentProps {
  filteredData: ProductRequestsProps[];
  handleCounter: (value: number) => void;
  addComments: (value: number) => void;
  setContentInputField: (value: string) => void;
  contentInputField: string
}
export default function Comment(props: CommentProps) {

  const { filteredData, handleCounter, addComments, setContentInputField, contentInputField } =
    props;
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const singleData = filteredData.filter((item) => {
    return item.id === parseInt(id!);
  });
  const object = singleData[0];

  return (
    <section className="max-w-[800px] space-y-4 mx-auto py-[60px] w-full">
      <Header setIsModalOpen={setIsModalOpen} />
      <CardHeader handleCounter={handleCounter} object={object} />
      <CommentCard object={object} />
      <AddComments
      contentInputField={contentInputField}
        setContentInputField={setContentInputField}
        addComments={addComments}
        object={object}
      />
      {isModalOpen && (
        <EditCommentModal  setIsModalOpen={setIsModalOpen}/>
      )}
      
    </section>
  );
}
