import { useRef } from "react";
import { createComment } from "@/lib/comment";
import { useParams } from "next/navigation";

const AddModal = ({closeModal }) => {
  const params = useParams();
  const commentRef = useRef();

  const onSubmitAddHandler = async (e) => {
    const data = {
      comment: commentRef.current.value,
      user: JSON.parse(localStorage.getItem("user")),
    };
    await createComment(data, params.topicId);
  };

  const onCloseModal =() => {
    closeModal(false)
  }
  return (
    <div className="sm:hidden fixed left-0 top-0 bg-black/50 w-full min-h-full z-40 flex justify-center items-center">
      <div className="relative w-[685px] bg-white rounded-[12px] py-[30px] px-[15px] mx-8">
        <svg
          className="absolute right-[15px] top-[15px] w-[10px] h-[10px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={onCloseModal}
        >
          <path
            fill="#243831"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
        <form
          onSubmit={onSubmitAddHandler}
          className="flex flex-col gap-[30px]"
        >
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[14px]">
              <h1 className="text-text-primary text-[20px] font-medium">
                Add Comments
              </h1>
              <textarea
                className="border border-borderDefault rounded-[8px] py-[10px] px-[14px] outline-none"
                placeholder="What's on your mind..."
                style={{ height: "120px" }}
                name=""
                id=""
                ref={commentRef}
              ></textarea>
            </div>
            <div className="buttonFont flex flex-col justify-end gap-[10px]">
              <button type="button" onClick={onCloseModal} className="w-full text-success-green w-[105px] text-sm font-semibold border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px]">
                Cancel
              </button>
              <button
                type="submit"
                className="w-full text-white w-[105px] text-sm font-semibold bg-success-green border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px] "
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
