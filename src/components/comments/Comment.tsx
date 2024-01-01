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
  setTitleInput: (value: string) => void;
  titleInput: string;
  contentInputField: string;
  handleTitleChange: (value: number) => void;
  setStatusInput: (value: string) => void;
  statusInput: string;
  handleChangeStatus: (value: number) => void;
  setFilteredData: (value: ProductRequestsProps[]) => void;
  handleFeedbackSave: () => void;
  handleCategoryChange: (value: number) => void;
  setCategoryInput: (value: string) => void;
  categoryInput: string;
  handleDescriptionChange: (value: number) => void;
  setInputDescription: (value: string) => void;
  inputDescription: string;
  handleDeletion: (value: number) => void;
}
export default function Comment(props: CommentProps) {
  const {
    handleDeletion,
    filteredData,
    handleCounter,
    addComments,
    setContentInputField,
    contentInputField,
    handleTitleChange,
    setTitleInput,
    titleInput,
    setStatusInput,
    statusInput,
    handleChangeStatus,
    setFilteredData,
    handleFeedbackSave,
    categoryInput,
    handleCategoryChange,
    setCategoryInput,
    setInputDescription,
    handleDescriptionChange,
    inputDescription,
  } = props;
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const singleData = filteredData.filter((item) => {
    return item.id === parseInt(id!);
  });
  const object = singleData[0];

  console.log(object);

  return (
    <section className="max-w-[800px] space-y-4 mx-auto py-[60px] w-full">
      <Header
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        setIsModalOpen={setIsModalOpen}
      />
      <CardHeader handleCounter={handleCounter} object={object} />
      <CommentCard object={object} />
      <AddComments
        contentInputField={contentInputField}
        setContentInputField={setContentInputField}
        addComments={addComments}
        object={object}
      />
      {isModalOpen && (
        <EditCommentModal
          handleDeletion={handleDeletion}
          inputDescription={inputDescription}
          setInputDescription={setInputDescription}
          handleDescriptionChange={handleDescriptionChange}
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
          handleCategoryChange={handleCategoryChange}
          handleFeedbackSave={handleFeedbackSave}
          handleChangeStatus={handleChangeStatus}
          setStatusInput={setStatusInput}
          statusInput={statusInput}
          titleInput={titleInput}
          setTitleInput={setTitleInput}
          handleTitleChange={handleTitleChange}
          object={object}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
}
