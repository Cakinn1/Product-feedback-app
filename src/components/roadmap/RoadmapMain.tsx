import { useState } from "react";
import { MainProps, ProductRequestsProps } from "../../App";
import Header from "./Header";
import RoadmapCard from "./RoadmapCard";
import StatusSection from "./StatusSection";

interface RoadmapMainProps {
  setIsModalOpen: (value: boolean) => void;
  productData: MainProps;
  setProductData: (value: MainProps) => void;
  liveProductData: ProductRequestsProps[];
  plannedData: ProductRequestsProps[];
  inProgressData: ProductRequestsProps[];
}

export default function RoadmapMain(props: RoadmapMainProps) {
  const {
    setIsModalOpen,
    productData,
    setProductData,
    inProgressData,
    liveProductData,
    plannedData,
  } = props;
  // const [amountToMap, setAmountToMap] = useState(productData.productRequests.map((item) => item.status ))
  // console.log(amountToMap.filter((item) => item !== "suggestion" ))

  // console.log(productData.productRequests.filter((item) => item.status === "planned"))
  // console.log(productData.productRequests.filter((item) => item.status === "in-progress"))

  function handleCounter(id: number) {
    const updateCounter = productData.productRequests.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          upvotes: item.upvotes + 1,
        };
      } else {
        return item;
      }
    });
    setProductData({ ...productData, productRequests: updateCounter });
  }

  return (
    <div className="max-w-[1128px] mx-auto py-20">
      <Header setIsModalOpen={setIsModalOpen} />
      <div className="flex w-full pt-20 gap-x-12">
        <StatusSection
          handleCounter={handleCounter}
          status="Planned"
          statusInfo="Ideas prioritized for research"
          data={plannedData}
        />
        <StatusSection
          handleCounter={handleCounter}
          status="In-progress"
          statusInfo="Currently being developed"
          data={inProgressData}
        />
        <StatusSection
          handleCounter={handleCounter}
          status="Live"
          statusInfo="Released features"
          data={liveProductData}
        />
      </div>
    </div>
  );
}
