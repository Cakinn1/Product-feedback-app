import { useEffect, useState } from "react";
import Comment from "./components/comments/Comment";
import FeedBack from "./pages/FeedBack";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./contants/data.json";
import RoadmapMain from "./components/roadmap/RoadmapMain";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<ProductRequestsProps[]>(
    productData.productRequests.filter((item) => item.status === "suggestion")
  );
  const plannedData = productData.productRequests.filter(
    (item) => item.status === "planned"
  );
  const inProgressData = productData.productRequests.filter(
    (item) => item.status === "in-progress"
  );
  const liveProductData = productData.productRequests.filter(
    (item) => item.status === "live"
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

    setProductData((prevData) => {
      const updateComments = prevData.productRequests.map((item) => {
        return item.id === id
          ? {
              ...item,
              comments: item.comments
                ? [...item.comments, newComment]
                : [newComment],
            }
          : item;
      });

      setFilteredData(
        updateComments.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateComments,
      };
    });
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
    setProductData((prevData) => {
      const updateCounter = prevData.productRequests.map((item) => {
        return item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item;
      });

      setFilteredData(
        updateCounter.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateCounter,
      };
    });
  }

  function handleTitleChange(id: number) {
    setProductData((prevData) => {
      const updateTitle = prevData.productRequests.map((item) => {
        return item.id === id ? { ...item, title: titleInput } : item;
      });

      setFilteredData(
        updateTitle.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateTitle,
      };
    });
  }

  // function uniqueCategory() {
  //   const currentCategories = productData.productRequests.map((item) => {
  //     return item.category;
  //   });
  //   const hashSet = new Set([...currentCategories]);
  //   const uniqueCategoryArray = Array.from(hashSet);
  //   // console.log(uniqueCategoryArray, data);
  // }

  // useEffect(() => {
  // uniqueCategory();
  // }, []);

  function handleChangeStatus(id: number) {
    setProductData((prevData) => {
      const updateStatus = prevData.productRequests.map((item) => {
        return item.id === id ? { ...item, status: statusInput } : item;
      });

      setFilteredData(
        updateStatus.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateStatus,
      };
    });
  }

  function handleFeedbackSave() {
    setFilteredData(
      filteredData.filter((item) => item.status === "suggestion")
    );
  }

  function handleCategoryChange(id: number) {
    setProductData((prevData) => {
      const updateCategory = prevData.productRequests.map((item) => {
        return item.id === id ? { ...item, category: categoryInput } : item;
      });
      setFilteredData(
        updateCategory.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateCategory,
      };
    });
  }

  function handleDescriptionChange(id: number) {
    setProductData((prevData) => {
      const updateDescription = prevData.productRequests.map((item) => {
        return item.id === id
          ? { ...item, description: inputDesription }
          : item;
      });

      setFilteredData(
        updateDescription.filter((item) => item.status === "suggestion")
      );

      return {
        ...prevData,
        productRequests: updateDescription,
      };
    });
  }

  function handleDeletion(id: number) {
    const deleteItem = filteredData.filter((item) => {
      return item.id !== id;
    });
    setFilteredData(deleteItem);
  }

  const [feedbackCounter, setFeedbackCounter] = useState<number>(13);
  function createNewFeedback() {
    const newFeedback: ProductRequestsProps = {
      category: categoryInput,
      description: inputDesription,
      id: feedbackCounter,
      status: "suggestion",
      title: titleInput,
      upvotes: 0,
      comments: [],
    };

    setFeedbackCounter(feedbackCounter + 1);

    setProductData({
      ...productData,
      productRequests: [...productData.productRequests, newFeedback],
    });
    setFilteredData((prevData) => {
      return prevData.concat(newFeedback);
    });
  }

  function handleSortNav(text: string) {
    const defaultFilter = productData.productRequests
      .slice()
      .filter((item) => item.status === "suggestion");

    if (text === "All") {
      setFilteredData(defaultFilter);
    } else if (text === "bug") {
      setFilteredData(defaultFilter.filter((item) => item.category === "bug"));
    } else if (text === "feature") {
      setFilteredData(
        defaultFilter.filter((item) => item.category === "feature")
      );
    } else if (text === "enhancement") {
      setFilteredData(
        defaultFilter.filter((item) => item.category === "enhancement")
      );
    } else if (text === "UI") {
      setFilteredData(defaultFilter.filter((item) => item.category === "UI"));
    } else if (text === "UX") {
      setFilteredData(defaultFilter.filter((item) => item.category === "UX"));
    }
  }

  function handleSort(text: string) {
    const defaultFilter = productData.productRequests
      .slice()
      .filter((item) => item.status === "suggestion");

    switch (text) {
      case "Most Upvotes":
        setFilteredData(defaultFilter.sort((a, b) => b.upvotes - a.upvotes));
        break;
      case "Least Upvotes":
        setFilteredData(defaultFilter.sort((a, b) => a.upvotes - b.upvotes));
        break;
      case "Most Comments":
        setFilteredData(
          defaultFilter.sort(
            (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
          )
        );
        break;
      case "Least Comments":
        setFilteredData(
          defaultFilter.sort(
            (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0)
          )
        );
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleSort("Most Upvotes");
  }, []);

  return (
    <div className="relative ">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSort={handleSort}
                handleSortNav={handleSortNav}
                plannedData={plannedData}
                inProgressData={inProgressData}
                liveProductData={liveProductData}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                setInputDescription={setInputDescription}
                setTitleInput={setTitleInput}
                setCategoryInput={setCategoryInput}
                titleInput={titleInput}
                categoryInput={categoryInput}
                inputDescription={inputDesription}
                createNewFeedback={createNewFeedback}
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
                productData={productData}
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
          {/* <Route path="/feedback/add" element={<FeedBack />} /> */}
          <Route
            path="/roadmap"
            element={
              <RoadmapMain
                plannedData={plannedData}
                inProgressData={inProgressData}
                liveProductData={liveProductData}
                productData={productData}
                setProductData={setProductData}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
