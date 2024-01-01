import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import Header from "../feedback/Header";
import Main from "../feedback/Main";
import { ProductRequestsProps } from "../../App";

interface EditCommentModalProps {
  setIsModalOpen: (value: boolean) => void;
  object: ProductRequestsProps;
  handleTitleChange: (value: number) => void;
  setTitleInput: (value: string) => void;
  titleInput: string;
  setStatusInput: (value: string) => void;
  statusInput: string;
  handleChangeStatus: (value: number) => void;
  handleFeedbackSave: () => void;
  handleCategoryChange: (value: number) => void;
  setCategoryInput: (value: string) => void;
  categoryInput: string;
  handleDescriptionChange: (value: number) => void;
  setInputDescription: (value: string) => void;
  inputDescription: string;
  handleDeletion: (value: number) => void
}

export default function EditCommentModal(props: EditCommentModalProps) {
  const {
    setIsModalOpen,
    object,
    handleTitleChange,
    setTitleInput,
    titleInput,
    setStatusInput,
    statusInput,
    handleChangeStatus,
    handleFeedbackSave,
    categoryInput,
    handleCategoryChange,
    setCategoryInput,
    handleDescriptionChange,
    inputDescription,
    setInputDescription,
    handleDeletion
  } = props;
  return (
    <div className="absolute z-50 bg-[#f2f4ff] w-full h-full top-0 left-0">
      <div className="max-w-[500px] space-y-6  mx-auto pt-[100px]">
        <Header setIsModalOpen={setIsModalOpen} />
        <div>
          <Main
          handleDeletion={handleDeletion}
            inputDescription={inputDescription}
            setInputDescription={setInputDescription}
            handleDescriptionChange={handleDescriptionChange}
            categoryInput={categoryInput}
            setCategoryInput={setCategoryInput}
            handleCategoryChange={handleCategoryChange}
            setIsModalOpen={setIsModalOpen}
            handleFeedbackSave={handleFeedbackSave}
            handleChangeStatus={handleChangeStatus}
            setStatusInput={setStatusInput}
            statusInput={statusInput}
            titleInput={titleInput}
            setTitleInput={setTitleInput}
            handleTitleChange={handleTitleChange}
            object={object}
          />
        </div>
      </div>
    </div>
  );
}
