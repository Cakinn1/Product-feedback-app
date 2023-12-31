import React from "react";
import { CommentsProps } from "../../App";

export default function CommentsCard(props: CommentsProps) {
  const { content, id, user } = props;

  return (
    <div className={`border-b space-y-6 w-full mb-6 ]`}>
      <div className="flex gap-x-4 w-full mb-6">
        <div>
          <img className="rounded-full h-10 w-10" src={user.image} alt="" />
        </div>
        <div className="space-y-4 text-sm text-[#3a4374] flex-1">
          <div className="flex justify-between items-center">
            <div>
              <p>@{user.username}</p>
              <h1 className="font-bold">{user.name}</h1>
            </div>
            <h1 className="text-[#4661e6] cursor-pointer duration-300 font-bold hover:underline">Reply</h1>
          </div>
          <div>
            <p className="break-words w-[600px]">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
