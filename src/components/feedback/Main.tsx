import React, { useEffect, useState } from "react";
import { ProductRequestsProps } from "../../App";
import { useNavigate } from "react-router-dom";

interface MainProps {
  object: ProductRequestsProps;
  handleTitleChange: (value: number) => void;
  setTitleInput: (value: string) => void;
  titleInput: string;
  setStatusInput: (value: string) => void;
  statusInput: string;
  handleChangeStatus: (value: number) => void;
  handleFeedbackSave: () => void;
  setIsModalOpen: (value: boolean) => void;
  handleCategoryChange: (value: number) => void;
  setCategoryInput: (value: string) => void;
  categoryInput: string;
  handleDescriptionChange: (value: number) => void;
  setInputDescription: (value: string) => void;
  inputDescription: string;
  handleDeletion: (value: number) => void;
}

export default function Main(props: MainProps) {
  const {
    object,
    handleTitleChange,
    setTitleInput,
    titleInput,
    setStatusInput,
    statusInput,
    handleChangeStatus,
    handleFeedbackSave,
    setIsModalOpen,
    categoryInput,
    handleCategoryChange,
    setCategoryInput,
    handleDescriptionChange,
    inputDescription,
    setInputDescription,
    handleDeletion,
  } = props;
  const [statusModal, setStatusModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCategoryInput(object.category);
    setInputDescription(object.description);
  }, []);

  useEffect(() => {
    handleChangeStatus(object.id);
    handleCategoryChange(object.id);
  }, [statusInput, categoryInput]);



  const handleSaveChanges = () => {
    handleCategoryChange(object.id);
    handleChangeStatus(object.id);
    handleDescriptionChange(object.id);
    handleTitleChange(object.id);
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white space-y-2 text-[#3a4374] rounded-lg p-8 ">
      <h1 className="font-bold text-2xl ">Edit "{object.title}"</h1>

      <div className="space-y-2 text-sm">
        <div>
          <h1 className="font-semibold">Feedback Title</h1>
          <p>Add a short, descriptive headline</p>
          <input
            placeholder={object.title}
            onChange={(e) => setTitleInput(e.target.value)}
            type="text"
            className="w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
          />
        </div>

        <div className="relative  space-y-1 pt-1">
          <h1 className="font-semibold">Update Status</h1>
          <p>Change feedback state</p>
          <h1
            onClick={() => setCategoryModal(!categoryModal)}
            className="w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
          >
            {object.status.slice(0, 1).toUpperCase() + object.status.slice(1)}
          </h1>
          {categoryModal && (
            <div className="absolute z-50 space-y-2 p-4 bg-white  w-full">
              <p
                onClick={() => setStatusInput("suggestion")}
                className="duration-300 hover:text-[#ad1fea] cursor-pointer"
              >
                Suggestion
              </p>
              <p
                onClick={() => setStatusInput("planned")}
                className="duration-300 hover:text-[#ad1fea] cursor-pointer"
              >
                Planned
              </p>
              <p
                onClick={() => setStatusInput("in-progress")}
                className="duration-300 hover:text-[#ad1fea] cursor-pointer"
              >
                In-Progress
              </p>
              <p
                onClick={() => setStatusInput("live")}
                className="duration-300 hover:text-[#ad1fea] cursor-pointer"
              >
                Live
              </p>
            </div>
          )}
          <div className="relative space-y-1 pt-1">
            <h1 className="font-semibold">Category</h1>
            <p>Choose a category for your feedback</p>
            <h1
              onClick={() => setStatusModal(!statusModal)}
              className="w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
            >
              {object.category.slice(0, 1).toUpperCase() +
                object.category.slice(1)}
            </h1>
            {statusModal && (
              <div className="absolute z-50 space-y-2 p-4 bg-white  w-full">
                <p
                  onClick={() => setCategoryInput("Feature")}
                  className="duration-300 hover:text-[#ad1fea] cursor-pointer"
                >
                  Feature
                </p>
                <p
                  onClick={() => setCategoryInput("UI")}
                  className="duration-300 hover:text-[#ad1fea] cursor-pointer"
                >
                  Ui
                </p>
                <p
                  onClick={() => setCategoryInput("UX")}
                  className="duration-300 hover:text-[#ad1fea] cursor-pointer"
                >
                  UX
                </p>
                <p
                  onClick={() => setCategoryInput("Enchancement")}
                  className="duration-300 hover:text-[#ad1fea] cursor-pointer"
                >
                  Enchancement
                </p>
                <p
                  onClick={() => setCategoryInput("Bug")}
                  className="duration-300 hover:text-[#ad1fea] cursor-pointer"
                >
                  Bug
                </p>
              </div>
            )}
          </div>
          <div className="pt-1">
            <h1 className="font-semibold">Feedback Detail</h1>
            <p>
              Include any specific commments on what should be imporved, added,
              etc.
            </p>
            <textarea
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
              className="w-full cursor-pointer  h-[80px] resize-none hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm font-semibold text-white items-center ">
        <button
          onClick={() => {
            setIsModalOpen(false);
            navigate("/");
            handleDeletion(object.id);
          }}
          className="bg-red-500 hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg"
        >
          Delete
        </button>
        <div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-[#3a4374] hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg "
          >
            Cancel
          </button>

          <button onClick={() => handleSaveChanges()} className="bg-[#ad1fea] ml-4 hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
