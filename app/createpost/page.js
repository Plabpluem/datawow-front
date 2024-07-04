"use client";
import { useRouter } from "next/navigation";
import ChooseCommunity from "../UI/ChooseCommunity";
import { useRef, useState } from "react";
import { createTopic } from "@/lib/topic";

const CreatePostPage = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [communityData, setCommunityData] = useState(null);

  const onSubmitCreatePost = async (e) => {
    e.preventDefault();
    const data = {
      user: JSON.parse(localStorage.getItem("user")),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      community: communityData,
    };
    await createTopic(data);
    router.push("/");
  };

  const onCloseCreateModal = () => {
    router.push("/");
  };
  return (
    <div className="absolute top-0 bg-black/50 w-full min-h-full z-40 flex justify-center items-center">
      <div className="relative w-[685px] min-h-[510px] bg-white rounded-[12px] mx-4 py-[30px] px-[16px] sm:p-[30px]">
        <svg
          className="absolute right-[15px] top-[15px] w-[10px] h-[10px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={onCloseCreateModal}
        >
          <path
            fill="#243831"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
        <form
          onSubmit={onSubmitCreatePost}
          className="flex flex-col gap-[30px]"
        >
          <h1 className="text-text-primary text-[28px] font-semibold">
            Create Post
          </h1>
          <div className="flex flex-col gap-[10px]">
            <ChooseCommunity sendCommu={(data) => setCommunityData(data)} />
            <div className="flex flex-col gap-[14px]">
              <input
                ref={titleRef}
                type="text"
                placeholder="Title"
                className="outline-none border border-borderDefault rounded-[8px] py-[10px] px-[14px]"
              />
              <textarea
                ref={descriptionRef}
                className="outline-none border border-borderDefault rounded-[8px] py-[10px] px-[14px]"
                placeholder="What's on your mind..."
                style={{ height: "245px" }}
                name=""
                id=""
              ></textarea>
            </div>
            <div className="buttonFont flex-col sm:flex-row flex justify-end gap-[12px]">
              <button
                onClick={onCloseCreateModal}
                type="button"
                className="w-full text-success-green sm:w-[105px] text-sm font-semibold border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full text-white sm:w-[105px] text-sm font-semibold bg-success-green border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px] "
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
