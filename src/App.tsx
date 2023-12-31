import { useState } from "react";
import Comment from "./components/comments/Comment";
import FeedBack from "./pages/FeedBack";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./contants/data.json";

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
  const [contentInputField, setContentInputField] = useState<string>("");
  const [counter, setCounter] = useState<number>(10);

  function addComments(id: number) {
    if (!contentInputField.trim()) {
      return;
    }

    const newComment: CommentsProps = {
      content: contentInputField,
      id: counter,
      user: {
        image: "/user-images/image-anne.jpg",
        name: "Anne Valentine",
        username: "annev1990",
      },
    };
    setCounter(counter + 1);
    const updateComments = productData.productRequests.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          comments: item.comments
            ? [...item.comments, newComment]
            : [newComment],
        };
      } else {
        return item;
      }
    });
    setProductData({ ...productData, productRequests: updateComments });
  }

  console.log(productData);
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
    <div className="relative">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleCounter={handleCounter}
                filteredData={filteredData}
                setProductData={setProductData}
                productData={productData}
              />
            }
          />
          <Route
            path="/comment/:id"
            element={
              <Comment
                contentInputField={contentInputField}
                setContentInputField={setContentInputField}
                addComments={addComments}
                handleCounter={handleCounter}
                filteredData={filteredData}
              />
            }
          />
          <Route path="/feedback/add" element={<FeedBack />} />
        </Routes>
      </Router>
    </div>
  );
}
