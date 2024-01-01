import React, { useEffect, useState } from "react";
import FeedbackInput from "./FeedbackInput";
import CategoryInput from "./CategoryInput";
import CategoryModal from "./CategoryModal";
import FeedbackButtons from "./FeedbackButtons";

interface FeedbackMainProps {
  createNewFeedback: () => void;
  titleInput: string;
  categoryInput: string;
  inputDescription: string;
  setInputDescription: (value: string) => void;
  setTitleInput: (value: string) => void;
  setCategoryInput: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
}

export default function FeedbackMain(props: FeedbackMainProps) {
  const {
    createNewFeedback,
    categoryInput,
    inputDescription,
    titleInput,
    setCategoryInput,
    setInputDescription,
    setTitleInput,
    setIsModalOpen,
  } = props;
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  useEffect(() => {
    setCategoryInput("Feature");
  }, []);
  return (
    <div className="bg-white space-y-2 p-8 rounded-lg">
      <div>
        <h1 className="text-[#3a4374] font-bold text-2xl">
          Create New Feedback
        </h1>
      </div>

      <FeedbackInput
        onChangeInput={setTitleInput}
        title="Feedback Title"
        description="Add a short, descriptive headline"
      />
      <CategoryInput
        categoryInput={categoryInput}
        setCategoryInput={setCategoryInput}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
      <FeedbackInput
        isTextarea={true}
        onChangeInput={setInputDescription}
        title="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
      />
      <FeedbackButtons
        setIsModalOpen={setIsModalOpen}
        createNewFeedback={createNewFeedback}
      />
    </div>
  );
}
