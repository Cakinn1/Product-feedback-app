import { useState } from "react";
import FeaturesCard from "../components/FeaturesCard";
import NavHeader from "../components/NavHeader";
import NavHeaderLeft from "../components/NavHeaderLeft";
import data from "../contants/data.json";



export default function Home() {
  const [productData, setProductData] = useState<any>(data);


  return (
    <section className="max-w-[1100px] gap-x-[20px]  mx-auto py-32 flex">
      <NavHeaderLeft />
      <div className="max-w-[855px] mx-auto  w-full">
        <NavHeader setProductData={setProductData} productData={productData} />
        <FeaturesCard />
      </div>
    </section>
  );
}
