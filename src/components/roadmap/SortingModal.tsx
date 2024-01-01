import React from "react";

interface SortingProps {
  handleSort: (value: string) => void;
  setSelect: (value: string) => void;
  text: string;
}
export default function SortingModal(props: SortingProps) {
  const { handleSort, text, setSelect } = props;
  return (
    <h1
      onClick={() => {
        setSelect(text);
        handleSort(text);
      }}
      className="border-b pb-2"
    >
      {text}
    </h1>
  );
}
