import { useRef, useState } from "react";
import ChooseCommunity from "./ChooseCommunity";
import { editTopic } from "@/lib/topic";

const EditModal = ({ onClose, title, description, id, community }) => {
  const [titleData, setTitleData] = useState(title);
  const [descriptionData, setDescriptionData] = useState(description);
  const [communityData, setCommunityData] = useState(community);

  const closeEditModal = () => {
    onClose(false);
  };

  const onSubmitEditHandler = async (e) => {
    const data = {
      title: titleData,
      description: descriptionData,
      community: communityData,
    };
    await editTopic(data, id);
    onClose(false);
  };
  return (
    <div className="fixed left-0 top-0 bg-black/50 w-full min-h-full z-40 flex justify-center items-center">
      <div className="relative mx-4 w-[685px] min-h-[510px] bg-white rounded-[12px] py-[30px] px-[16px] sm:p-[30px]">
        <svg
          className="absolute right-[15px] top-[20px] w-[15px] h-[15px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          onClick={closeEditModal}
        >
          <path
            fill="#243831"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
        <form
          onSubmit={onSubmitEditHandler}
          className="flex flex-col gap-[30px]"
        >
          <h1 className="text-text-primary text-[28px] font-semibold">
            Edit Post
          </h1>
          <div className="flex flex-col gap-[30px] sm:gap-[10px]">
            <div className="flex flex-col gap-[10px]">
              <ChooseCommunity
                community={community}
                sendCommu={(data) => setCommunityData(data)}
              />
              <div className="flex flex-col gap-[14px]">
                <input
                  type="text"
                  placeholder="Title"
                  className="border border-borderDefault rounded-[8px] py-[10px] px-[14px] outline-none"
                  value={titleData}
                  onChange={(e) => setTitleData(e.target.value)}
                />
                <textarea
                  className="border border-borderDefault rounded-[8px] py-[10px] px-[14px] outline-none"
                  placeholder="What's on your mind..."
                  style={{ height: "245px" }}
                  name=""
                  id=""
                  value={descriptionData}
                  onChange={(e) => setDescriptionData(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="buttonFont flex-col sm:flex-row flex justify-end gap-[12px]">
              <button
                onClick={closeEditModal}
                className="text-success-green w-full sm:w-[105px] text-sm font-semibold border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white w-full sm:w-[105px] text-sm font-semibold bg-success-green border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px] "
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

export default EditModal;
