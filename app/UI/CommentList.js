import Iconuser from "../image/Iconuser.png";

const CommentList = ({ comment, user, timestamp }) => {
  const convertTimestamp = (new Date().getTime() - timestamp) / 1000 / 60 / 60;
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
  return (
    <div className="w-full">
      <div className="flex gap-[10px]">
        <span className="rounded-[50%] bg-backgroundLight w-[40px] h-[40px] flex items-center justify-center">
          <img src={Iconuser.src} alt="" />
        </span>
        <div className="flex flex items-center text-text-color">
          <span className="text-[14px] font-medium">
            {user} &nbsp;
            <span className="text-[12px] text-gray-300 font-normal">
              {realTime} ago
            </span>
          </span>
        </div>
      </div>
      <p className="pl-[50px] text-[12px] text-text-color">{comment}</p>
    </div>
  );
};

export default CommentList;
