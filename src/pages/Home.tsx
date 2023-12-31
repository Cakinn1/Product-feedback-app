import { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";
import NavHeader from "../components/NavHeader";
import NavHeaderLeft from "../components/NavHeaderLeft";
import data from "../contants/data.json";

interface CurrentUserProps {
  image: string;
  name: string;
  username: string;
}

export interface MainProps {
  currentUser: CurrentUserProps;
  productRequests: ProductRequestsProps[];
}

export interface ProductRequestsProps {
  category: string;
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number;
  comments?: CommentsProps[];
}
interface CommentsProps {
  content: string;
  id: number;
  user: UserProps;
}
interface UserProps {
  image: string;
  name: string;
  username: string;
}

export default function Home() {
  const [productData, setProductData] = useState<MainProps>(data);

  //  only return suggestion products
  const filteredData = productData.productRequests.filter((item) => {
    return item.status === "suggestion";
  });

  // later make sure the current user can only like once
  function handleCounter(id: number) {
    const updateCounter = productData.productRequests.map((item) => {
      return item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item;
    });

    setProductData({...productData, productRequests: updateCounter})
  }

  return (
    <section className="max-w-[1100px] gap-x-[20px]  mx-auto py-32 flex">
      <NavHeaderLeft />
      <div className="max-w-[855px] mx-auto  w-full">
        <NavHeader setProductData={setProductData} productData={productData} />
        <div className="space-y-5 mt-5">

        {filteredData.map((data) => {
          return <FeaturesCard handleCounter={handleCounter} key={data.id} {...data} />;
        })}
        </div>
      </div>
    </section>
  );
}
