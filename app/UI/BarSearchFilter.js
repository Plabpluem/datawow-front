import { useRouter } from "next/navigation";
import searchIcon from "../image/search.png";
import Community from "./CommunitySelect";
import { useState } from "react";

const BarSearchFilter = ({ searchData, filterData }) => {
  const router = useRouter();
  const [changeNavbar, setChangeNavbar] = useState(false);
  const [statusTransition, setTransition] = useState(false);

  const sendFilterSearch = (e) => {
    const value = e.target.value;
    searchData(value);
  };

  const onFilterData = (data) => {
    filterData(data);
  };

  const onGotoCreate = () => {
    const checkLogin = JSON.parse(localStorage.getItem("user"));
    if (checkLogin) {
      router.push("/createpost");
    } else {
      router.push("/login");
    }
  };

  const onFocusHandler = () => {
    if (window.innerWidth < 640) {
      setTransition(true);
      setTimeout(() => {
        setChangeNavbar(true);
      }, 300);
    }
  };

  const onBlurHandler = () => {
    if (window.innerWidth < 640) {
      setTransition(false);
      setTimeout(() => {
        setChangeNavbar(false);
      });
    }
  };
  return (
    <div className="flex justify-between static h-[40px]">
      <span
        className={`${
          statusTransition ? "onTransitionWide sm:onDisableTransitionWide" : ""
        } w-[70%] sm:w-full flex gap-[8px] h-[40px] rounded-[8px] py-[10px] px-[14px] bg-transparent border-[1px] outline-none border-green-100  searchInput hover:border-green-100 hover:bg-transparent active:bg-transparent focus:bg-transparent`}
      >
        <img src={searchIcon.src} alt="" />
        <input
          onChange={sendFilterSearch}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-transparent buttonFont placeholder-description-color"
        />
      </span>
      {!changeNavbar && (
        <div
          className={`flex gap-[10px] ${
            statusTransition ? "onEnable sm:onDisable" : ""
          }`}
        >
          <Community filterData={(data) => onFilterData(data)} />
          <button
            onClick={onGotoCreate}
            type="button"
            className="rounded-[8px] border-[1px] border-success-green w-[105px] text-white px-[16px] py-[10px] bg-success-green buttonFont text-sm font-semibold"
          >
            Create+
          </button>
        </div>
      )}
    </div>
  );
};

export default BarSearchFilter;
