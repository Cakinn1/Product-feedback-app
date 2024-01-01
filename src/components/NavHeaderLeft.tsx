import React from "react";
import NavRoadmap from "./ui/NavHeader/NavRoadmap";
import { MainProps, ProductRequestsProps } from "../App";
import NavSortLeft from "./ui/NavHeader/NavSortLeft";
import Logo from "./ui/NavHeader/Logo";

interface NavProps {
  productData: MainProps;
  liveProductData: ProductRequestsProps[];
  plannedData: ProductRequestsProps[];
  inProgressData: ProductRequestsProps[];
  handleSortNav: (value: string) => void

}

export default function NavHeaderLeft(props: NavProps) {
  const { productData, inProgressData, liveProductData, plannedData, 
  handleSortNav } = props;
  return (
    <section className="max-w-[255px] space-y-4 w-full">
      <Logo />
      <NavSortLeft handleSortNav={handleSortNav} />
      <NavRoadmap
        plannedData={plannedData}
        inProgressData={inProgressData}
        liveProductData={liveProductData}
      />
    </section>
  );
}
