import { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";
import NavHeader from "../components/NavHeader";
import NavHeaderLeft from "../components/NavHeaderLeft";
import { MainProps, ProductRequestsProps } from "../App";
import AddFeedbackModal from "../components/productcard/AddFeedbackModal";

interface HomeProps {
  productData: MainProps;
  filteredData: ProductRequestsProps[];
  setProductData: (value: MainProps) => void;
  handleCounter: (value: number) => void;
}

export default function Home(props: HomeProps) {
  const { filteredData, productData, setProductData, handleCounter } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="max-w-[1100px] gap-x-[20px]  mx-auto py-32 flex">
      <NavHeaderLeft />

      <div className="max-w-[855px] mx-auto  w-full">
        <button onClick={() => setIsModalOpen(true)}>+ Add Feedback</button>
        {isModalOpen && <AddFeedbackModal setIsModalOpen={setIsModalOpen} />}

        {/* <NavHeader setProductData={setProductData} productData={productData} /> */}
        <div className="space-y-5 mt-5">
          {filteredData?.map((data) => {
            return (
              <FeaturesCard
                handleCounter={handleCounter}
                key={data.id}
                {...data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
