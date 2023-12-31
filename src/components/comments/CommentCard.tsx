import { ProductRequestsProps } from "../../App";
import CommentsCard from "./CommentsCard";

interface CommentCardProps {
  object: ProductRequestsProps;
}

export default function CommentCard(props: CommentCardProps) {
  const { object } = props;
  const lastComment = object.comments?.length
  console.log(lastComment)



  return (
    <div className="bg-white space-y-6 p-6 rounded-2xl">
      <h1 className="text-[#3a4374] font-bold">
        {object.comments?.length} Comments
      </h1>
      <div>
        {object.comments?.map((comment) => {
          return (
            <CommentsCard
              content={comment.content}
              id={comment.id}
              user={comment.user}
              key={comment.id}
            />
          );
        })}
      </div>
    </div>
  );
}
