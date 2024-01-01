import React, { useState } from "react";
import { ProductRequestsProps } from "../../App";

interface AddCommentsProps {
  object: ProductRequestsProps;
  addComments: (value: number) => void;
  setContentInputField: (value: string) => void;
  contentInputField: string;
}
export default function AddComments(props: AddCommentsProps) {
  const { object, addComments, setContentInputField, contentInputField } =
    props;
  const maxCharacters = 250;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputValue = e.target.value;
    e.preventDefault()
    if (inputValue.length <= maxCharacters) {
      setContentInputField(inputValue);
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={(e) => e.key === "Enter" && addComments(object.id)}
      className="bg-white p-6 rounded-2xl space-y-4 "
    >
      <h1 className="text-[#3a4374] font-bold pt-4">Add Comment</h1>
      <textarea
        value={contentInputField}
        onChange={handleChange}
        className="resize-none h-[130px] text-[#647196] hover:border-[#ad1fea] focus:border-[#ad1fea]  border border-white duration-300 w-full rounded-lg p-6 focus:outline-none bg-[#f2f4ff]"
        placeholder="Type your comment here"
      ></textarea>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-gray-500 ">
          {maxCharacters - contentInputField.length} characters remaining
        </p>{" "}
        <button
          onClick={() => addComments(object.id)}
          className="bg-[#ad1fea] text-white px-6 rounded-lg py-2 hover:brightness-150 duration-300"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
}

// <input onChange={(e) => setContentInputField(e.target.value)} className="border text-black" type="text" />
//         <button onClick={() => addComments(object.id)}>onlcik</button>
