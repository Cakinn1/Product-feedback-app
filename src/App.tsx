import { useState } from "react";
import Comment from "./components/comments/Comment";
import FeedBack from "./pages/FeedBack";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./contants/data.json"


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
export interface CommentsProps {
  content: string;
  id: number;
  user: UserProps;
}
interface UserProps {
  image: string;
  name: string;
  username: string;
}

export default function App() {
  const [productData, setProductData] = useState<MainProps>(data);

  //  only return suggestion products
  const filteredData = productData?.productRequests.filter((item) => {
    return item?.status === "suggestion";
  });

  // later make sure the current user can only like once
  function handleCounter(id: number) {
    const updateCounter = productData.productRequests.map((item) => {
      return item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item;
    });
    setProductData({ ...productData, productRequests: updateCounter });
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home handleCounter={handleCounter} filteredData={filteredData} setProductData={setProductData} productData={productData} />} />
          <Route path="/comment/:id" element={<Comment handleCounter={handleCounter} filteredData={filteredData} />} />
          <Route path="/feedback/add" element={<FeedBack />} />
        </Routes>
      </Router>
    </div>
  );
}
