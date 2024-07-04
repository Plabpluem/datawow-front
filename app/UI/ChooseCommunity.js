'use client'
import { useState } from "react";
import correctIcon from '../image/correct.png'
import dropdownIcon from '../image/dropdown.png'

const communityList = [
  "History",
  "Food",
  "Pets",
  "Health",
  "Fashion",
  "Exercise",
  "Others",
];

const ChooseCommunity = (props) => {
    const [selectCommu,setSelectCommu]=useState(props.community?props.community:null)
    const [statusModal,setStatusModel] = useState(false)

    const onClickOpenModal = () => {
        setStatusModel(prev => !prev)
    }

    const onClickChoose = (item) => {
        setSelectCommu(item)
        props.sendCommu(item)
        setStatusModel(false)
    }
  return (
    <section className="relative">
      <button type="button" onClick={onClickOpenModal} className="w-full sm:w-[195px] buttonFont text-success-green border border-success-green rounded-[8px] px-[16px] py-[10px] w-[195px] bg-white text-sm font-semibold flex justify-center items-center gap-[8px] shadowBox">
        {selectCommu?selectCommu:'Choose a Community'} 
        <img src={dropdownIcon.src} alt="" />
      </button>
      {statusModal && <div className="shadowBox w-full sm:w-[320px] absolute top-[50px] rounded-[8px] border border-borderDefault bg-white shadowBoxLg">
        {communityList.map((item,index) => {
          return (
            <a
              href="#"
              className={item === selectCommu ?`flex items-center justify-between px-4 py-2 text-sm text-grayHeader font-medium hover:bg-green-100 bg-green-100`:`flex items-center justify-between px-4 py-2 text-sm text-grayHeader font-medium hover:bg-green-100`}
              role="menuitem"
              id="menu-item-0"
              onClick={()=> onClickChoose(item)}
              key={index}
            >
              {item}
              {item === selectCommu &&<img className="w-[12px] h-[9px]" src={correctIcon.src} alt="" />}
            </a>
          );
        })}
      </div>}
    </section>
  );
};

export default ChooseCommunity;
