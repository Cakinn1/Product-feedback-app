interface FeedbackButtonsProps {
  createNewFeedback?: () => void;
  setIsModalOpen: (value: boolean) => void;
}

export default function FeedbackButtons(props: FeedbackButtonsProps) {
  const { createNewFeedback, setIsModalOpen } = props;
  return (
    <div className="flex pt-4 justify-between text-sm font-semibold text-white items-center ">
      {/* <button
        //   onClick={() => {
        //     setIsModalOpen(false);
        //     navigate("/");
        //     handleDeletion(object.id);
        //   }}
        className="bg-red-500 hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg"
      >
        Delete
      </button> */}
      <div className="ml-auto">
        <button
          // onClick={() => setIsModalOpen(false)}
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="bg-[#3a4374] hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg "
        >
          Cancel
        </button>

        <button
          //    onClick={() => handleSaveChanges()}
          onClick={() => {
            if (createNewFeedback) {
              createNewFeedback();
              setIsModalOpen(false);
            }
          }}
          className="bg-[#ad1fea] ml-4 hover:bg-opacity-70 duration-300 py-3 px-6 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
