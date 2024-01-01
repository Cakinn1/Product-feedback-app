import { useEffect, useState } from "react";
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
  const [statusInput, setStatusInput] = useState<string>("");
  const [categoryInput, setCategoryInput] = useState<string>("");
  const [titleInput, setTitleInput] = useState<string>("");
  const [inputDesription, setInputDescription] = useState<string>("");
  const [counter, setCounter] = useState<number>(10);
  const [filteredData, setFilteredData] = useState<ProductRequestsProps[]>(
    productData.productRequests.filter((item) => item.status === "suggestion")
  );

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
    const updateComments = filteredData.map((item) => {
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
    setFilteredData(updateComments);
    setContentInputField("");
  }

  // //  only return suggestion products
  // function renderFilteredData() {
  //   setFilteredData(
  //     productData?.productRequests?.filter((item) => {
  //       return item?.status === "suggestion";
  //     })
  //   );
  // }
  // useEffect(() => {
  //   renderFilteredData();
  // }, []);

  // later make sure the current user can only like once
  function handleCounter(id: number) {
    const updateCounter = filteredData.map((item) => {
      return item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item;
    });
    setFilteredData(updateCounter);
  }

  function handleTitleChange(id: number) {
    setFilteredData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: titleInput,
          };
        } else {
          return item;
        }
      });
    });
  }

  function uniqueCategory() {
    const currentCategories = productData.productRequests.map((item) => {
      return item.category;
    });
    const hashSet = new Set([...currentCategories]);
    const uniqueCategoryArray = Array.from(hashSet);
    // console.log(uniqueCategoryArray, data);
  }

  function handleChangeStatus(id: number) {
    setFilteredData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: statusInput,
          };
        } else {
          return item;
        }
      });
    });
    const updateStatus = filteredData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: statusInput,
        };
      } else {
        return item;
      }
    });

    setFilteredData(updateStatus);
  }

  function handleFeedbackSave() {
    setFilteredData(
      filteredData.filter((item) => item.status === "suggestion")
    );
  }

  useEffect(() => {
    uniqueCategory();
  }, []);

  function handleCategoryChange(id: number) {
    setFilteredData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            category: categoryInput,
          };
        } else {
          return item;
        }
      });
    });
  }

  function handleDescriptionChange(id: number) {
    setFilteredData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            description: inputDesription,
          };
        } else {
          return item;
        }
      });
    });
  }

  function handleDeletion(id: number) {
    const deleteItem = filteredData.filter((item) => {
      return item.id !== id;
    });
    setFilteredData(deleteItem);
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
                handleDeletion={handleDeletion}
                inputDescription={inputDesription}
                setInputDescription={setInputDescription}
                handleDescriptionChange={handleDescriptionChange}
                categoryInput={categoryInput}
                setCategoryInput={setCategoryInput}
                handleCategoryChange={handleCategoryChange}
                handleFeedbackSave={handleFeedbackSave}
                setFilteredData={setFilteredData}
                handleChangeStatus={handleChangeStatus}
                setStatusInput={setStatusInput}
                statusInput={statusInput}
                titleInput={titleInput}
                setTitleInput={setTitleInput}
                handleTitleChange={handleTitleChange}
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
