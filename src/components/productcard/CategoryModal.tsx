import React from "react";

interface CategoryModalProps {
  text: string;
  setCategoryInput: (value: string) => void
}

export default function CategoryModal(props: CategoryModalProps) {
  const { text, setCategoryInput } = props;
  return (
      <h1 onClick={() => setCategoryInput(text)} className="duration-300  w-fit hover:text-[#ad1fea] cursor-pointer">
        {text}
      </h1>
  );
}
