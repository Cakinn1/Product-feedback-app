import React from "react";
interface FeedBackInputProps {
  title: string;
  description: string;
  isInput?: boolean;
  isTextarea?: boolean;
  onChangeInput: (value: string) => void;
}

export default function FeedbackInput(props: FeedBackInputProps) {
  const { description, title, isInput, isTextarea, onChangeInput } = props;
  return (
    <div className="space-y-2 text-[#3a4374]  text-sm">
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      {isTextarea ? (
        <textarea
          onChange={(e) => onChangeInput(e.target.value)}
          className="h-[100px] resize-none w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
        ></textarea>
      ) : (
        <input
          onChange={(e) => onChangeInput(e.target.value)}
          type="text"
          className="w-full cursor-pointer hover:border-[#ad1fea] duration-300 border border-white bg-[#f2f4ff] focus:outline-none py-3 px-4 rounded-md mt-1"
        />
      )}
    </div>
  );
}
