"use client";
import { useState } from "react";
import correctIcon from "../image/correct.png";

const communityList = [
  "History",
  "Food",
  "Pets",
  "Health",
  "Fashion",
  "Exercise",
  "Others",
];

const Community = ({ filterData }) => {
  const [show, setShow] = useState(false);
  const [selectCommu, setSelectCommu] = useState(null);

  const onShow = () => {
    setShow((prev) => !prev);
  };

  const onClickChoose = (item) => {
    if (item === selectCommu) {
      setSelectCommu("Community");
      filterData("Community");
    } else {
      setSelectCommu(item);
      filterData(item);
    }
    setShow(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-x-[5px] rounded-[8px] px-[14px] py-[8px] text-sm font-semibold bg-transparent buttonFont text-text-color"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onShow}
        >
          {selectCommu ? selectCommu : "Community"}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[10px] h-[15px]">
            <path
              fill="#191919"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
      </div>
      {show && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {communityList.map((item, index) => {
              return (
                <a
                  href="#"
                  className={
                    item === selectCommu
                      ? `flex items-center justify-between px-4 py-2 text-sm text-grayHeader font-medium hover:bg-green-100 bg-green-100`
                      : `flex items-center justify-between px-4 py-2 text-sm text-grayHeader font-medium hover:bg-green-100`
                  }
                  role="menuitem"
                  id="menu-item-0"
                  onClick={() => onClickChoose(item)}
                  key={index}
                >
                  {item}
                  {item === selectCommu && (
                    <img
                      className="w-[12px] h-[9px]"
                      src={correctIcon.src}
                      alt=""
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
