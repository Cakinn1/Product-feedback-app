import React from "react";
import { ButtonProps } from "../../../typings/typings";
import { Link } from "react-router-dom";

export default function Button({backgroundValue, textValue, linkTo}:ButtonProps) {
  return (
    <Link to={`${linkTo}`}
      className={`text-white px-6 hover:bg-opacity-50 duration-300 bg-[${backgroundValue}] flex items-center rounded-lg gap-2 py-3`}
    >
      <img src="/assets/shared/icon-plus.svg" alt="" />
      <span className="font-bold text-[14px]">{textValue}</span>
    </Link>
  );
}
