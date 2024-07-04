import commentIcon from "../image/Comment Icon.png";
import { useRouter } from "next/navigation";

const ListTopic = ({
  _id,
  user,
  title,
  description,
  community,
  searchTerm,
  timestamp,
  comment,
}) => {
  const router = useRouter();

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

  const onClickToDetail = (id) => {
    router.push(`./${id}`);
  };

  const highlightText = (text, highlight) => {
    if (highlight.length < 2) {
      return text;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "rgba(197, 163, 101, 1)" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="p-[20px]  w-full flex flex-col gap-[5px] border-[0.5px] border-gray-100 cursor-pointer"
      onClick={() => onClickToDetail(_id)}
    >
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-[10px] items-center">
          <img
            className="w-[31px] h-[31px] rounded-[50%]"
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
      <div className="flex flex-col gap-[10px] cursor-pointer">
        <div className="text-text-primary flex flex-col gap-[2px]">
          <h1 className="text-[16px] font-semibold">
            {highlightText(title, searchTerm)}
          </h1>
          <p className="text-[12px] font-normal ">{description}</p>
        </div>
        <div className="text-gray-300 flex gap-[5px] items-center text-[12px]">
          <img className="w-[12px] h-[12px]" src={commentIcon.src} alt="" />
          <p>{comment} Comments</p>
        </div>
      </div>
    </div>
  );
};

export default ListTopic;
