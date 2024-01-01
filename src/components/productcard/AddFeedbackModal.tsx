import React from 'react'
import Header from '../comments/Header'

interface AddFeedbackModalProps {
    setIsModalOpen: (value: boolean) => void
}

export default function AddFeedbackModal(props: AddFeedbackModalProps ) {
    const {setIsModalOpen} = props
  return (
    <div className="absolute z-50 bg-[#f2f4ff] w-full h-full top-0 left-0">
    <div className="max-w-[500px] space-y-6  mx-auto pt-[100px]">
    {/* <div className="flex  mb-10 justify-between items-center text-sm">
      <Link
        to="/"
        className="flex hover:brightness-150 duration-300 items-center gap-x-2"
      >
        <FaChevronLeft className="text-[10px] text-[#4661E6]" />
        <h1
          onClick={() => {
            setFilteredData(
              filteredData.filter((item) => item.status === "suggestion")
            );
          }}
          className="text-[#647196] "
        >
          Go Back
        </h1>
      </Link>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white font-semibold bg-[#4661e6] px-6 py-3 hover:brightness-150 duration-300 rounded-md"
      >
        Edit Feedback
      </button>
    </div> */}
      <div>
    
      </div>
    </div>
  </div>
  )
}
