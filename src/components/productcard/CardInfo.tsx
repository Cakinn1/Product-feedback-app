import { FaComment } from "react-icons/fa";
interface CardInfoProps {
  title: string;
  description: string;
  category: string;
  commentsLength: number | undefined;
}

export default function CardInfo(props: CardInfoProps) {
  const { category, commentsLength, description, title } = props;
  return (
    <div className="flex items-center w-full">
      <div className="space-y-1">
        <h1 className="group-hover:text-[#4661e6] text-[#3a4374] text-lg font-bold duration-300">
          {title}
        </h1>
        <p className="text-[#647196] text-[15px]">{description}</p>
        <div className="text-[#4661e6] font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-3 rounded-lg">
          {category.slice(0, 1).toUpperCase() + category.slice(1)}
        </div>
      </div>
      <div className="flex justify-end gap-x-2 flex-1 items-center">
        <FaComment className="text-lg text-[#CDD2EE]"/>
        <span className="font-bold">{commentsLength}</span>
      </div>
    </div>
  );
}
