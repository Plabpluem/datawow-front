import { useRef, useState } from "react";
import commentIcon from "../image/Comment Icon.png";
import { createComment } from "@/lib/comment";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AddModal from "./AddModal";

const ListTopicDetail = ({
  user,
  title,
  description,
  community,
  comment,
  timestamp,
}) => {
  const [statusCreateComment, setStatusComment] = useState(false);
  const commentRef = useRef();
  const params = useParams();
  const router = useRouter();

  const convertTimestamp =
    (new Date().getTime() - new Date(timestamp).getTime()) / 1000 / 60 / 60;

  const realTime =
    convertTimestamp / 24 > 30
      ? Math.floor(convertTimestamp / 24 / 30) + "mo."
      : convertTimestamp > 24
      ? Math.floor(convertTimestamp / 24) + "d"
      : convertTimestamp > 1
      ? Math.floor(convertTimestamp) + "h"
      : convertTimestamp * 60 > 1
      ? Math.floor(convertTimestamp * 60) + "m"
      : Math.floor(convertTimestamp * 60 * 60) + "s";

  const addCommentHandler = () => {
    const statusLogin = JSON.parse(localStorage.getItem("user"));
    if (statusLogin) {
      setStatusComment(true);
    } else {
      router.push("/login");
    }
  };

  const onSubmitComment = async (e) => {
    const data = {
      comment: commentRef.current.value,
      user: JSON.parse(localStorage.getItem("user")),
    };
    await createComment(data, params.topicId);
  };
  return (
    <div className="max-w-[800px] flex flex-col gap-[20px] ">
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            <img
              className="w-[48px] h-[48px] rounded-[50%]"
              src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFnM4R~Xig-O~nJkc8R8uQhphsY1UaQ9YnBgsqONNvThKZ9s2nvwEucopPxjang6KKwhXlxnYp-fk6T67JQp82cjOJ6uT1qullZjT8hbXApE-OgDG1CZkCtwCV6z-2m9vJ69WgEubFhGiMOpGpU2qJliwBPBJEZP~9aKZkpm1gcIUb0NifUZCa1JFoNf9Nw~UKWN7gVLdzwgCx5O0R65m8RmrSI-X2L4HV0xIP3nJCvCXk3cORAOmv5RGCXRIlDvF99YkuiZmI896WrYq0pPB7YqVnhVlsavw2xHWs1nWdD0pKumg6ONb-XxlvsN5IIMF3RPI09wxqmumM0PN2xF6Q__"
              alt=""
            />
            <p className="font-[14px] text-gray-300">
              {user} &nbsp;
              <span className="text-[12px] text-gray-300 font-normal">
                {realTime} ago
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="buttonFont py-[4px] px-[8px] bg-backgroundLight rounded-[16px] text-blackCommunity text-xs">
              {community}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[28px]">
          <div className="text-text-primary flex flex-col gap-[5px]">
            <h1 className="text-[28px] font-semibold ">{title}</h1>
            <p className="text-[12px] font-normal">{description}</p>
          </div>
          <div className="text-gray-300 flex gap-[5px] items-center text-[12px]">
            <img className="w-[12px] h-[12px]" src={commentIcon.src} alt="" />
            <p>{comment} Comments</p>
          </div>
        </div>
      </div>
      {!statusCreateComment && (
        <button
          onClick={addCommentHandler}
          className="w-[134px] text-sm font-semibold border rounded-[8px] py-[10px] px-[16px] text-success-green border-success-green buttonFont "
        >
          Add Comments
        </button>
      )}
      {statusCreateComment && (
        <>
          <form
            onSubmit={onSubmitComment}
            className="hidden sm:flex flex-col gap-[10px]"
          >
            <textarea
              ref={commentRef}
              style={{ height: "100px" }}
              className="w-full outline-none resize-none border-[1px] border-borderDefault px-[14px] py-[10px] rounded-[8px] border placeholder-text-green-300"
              name=""
              id=""
              placeholder="What's on your mind..."
            ></textarea>
            <div className="buttonFont flex justify-end gap-[12px]">
              <button
                onClick={() => setStatusComment(false)}
                className="text-success-green w-[105px] text-sm font-semibold border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white w-[105px] text-sm font-semibold bg-success-green border-[1px] border-success-green py-[10px] px-[16px] rounded-[8px] "
              >
                Post
              </button>
            </div>
          </form>
          <AddModal closeModal={(data) => setStatusComment(data)} />
        </>
      )}
    </div>
  );
};

export default ListTopicDetail;
