import React from "react";
import Header from "../comments/Header";
import { FaChevronLeft } from "react-icons/fa6";
import FeedbackHeader from "./FeedbackHeader";
import FeedbackMain from "./FeedbackMain";

interface AddFeedbackModalProps {
  setIsModalOpen: (value: boolean) => void;
  createNewFeedback: () => void;
  titleInput: string;
  categoryInput: string;
  inputDescription: string;
  setInputDescription: (value: string) => void;
  setTitleInput: (value: string) => void;
  setCategoryInput: (value: string) => void;
}

export default function AddFeedbackModal(props: AddFeedbackModalProps) {
  const {
    setIsModalOpen,
    createNewFeedback,
    categoryInput,
    inputDescription,
    titleInput,
    setCategoryInput,
    setInputDescription,
    setTitleInput,
  } = props;
  return (
    <div className="absolute z-50  bg-[#f2f4ff] w-full h-full top-0 left-0">
      <div className="max-w-[500px]  space-y-6  mx-auto pt-[100px]">
        <FeedbackHeader setIsModalOpen={setIsModalOpen} />
        <div>
          <FeedbackMain
          setIsModalOpen={setIsModalOpen}
            setInputDescription={setInputDescription}
            setTitleInput={setTitleInput}
            setCategoryInput={setCategoryInput}
            titleInput={titleInput}
            categoryInput={categoryInput}
            inputDescription={inputDescription}
            createNewFeedback={createNewFeedback}
          />
        </div>
      </div>
    </div>
  );
}
