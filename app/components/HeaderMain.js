"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import navIcon from "../image/navIcon.png";
import MenuMobile from "./MenuMobile";

const HeaderMain = () => {
  const router = useRouter();
  const [userStatus, setUserStatus] = useState(null);
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    setUserStatus(JSON.parse(localStorage.getItem("user")));
  }, []);
  const onGotoLogin = () => {
    router.push("/login");
  };

  const onOpenMenu = () => {
    setMenuStatus((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-10 w-full h-[72px] sm:h-[60px] bg-primary-green text-white flex items-center px-8 justify-between overflow-x-hidden">
      <h5 className="headerFont text-[20px] font-border">a Board</h5>
      <div className="flex gap-[20px] items-center">
        {!userStatus && (
          <>
            <button
              onClick={onGotoLogin}
              className="hidden sm:block buttonFont bg-success-green rounded-lg w-[105px] h-[40px] text-sm font-semibold cursor-point"
            >
              Sign In
            </button>
            <img
              src={navIcon.src}
              alt=""
              className="sm:hidden cursor-pointer"
              onClick={onOpenMenu}
            />
          </>
        )}
        {userStatus && (
          <>
            <div className="hidden sm:flex flex gap-[20px] items-center">
              <span className="font-medium">{userStatus}</span>
              <img
                className="rounded-[200px] w-[40px] h-[40px]"
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFnM4R~Xig-O~nJkc8R8uQhphsY1UaQ9YnBgsqONNvThKZ9s2nvwEucopPxjang6KKwhXlxnYp-fk6T67JQp82cjOJ6uT1qullZjT8hbXApE-OgDG1CZkCtwCV6z-2m9vJ69WgEubFhGiMOpGpU2qJliwBPBJEZP~9aKZkpm1gcIUb0NifUZCa1JFoNf9Nw~UKWN7gVLdzwgCx5O0R65m8RmrSI-X2L4HV0xIP3nJCvCXk3cORAOmv5RGCXRIlDvF99YkuiZmI896WrYq0pPB7YqVnhVlsavw2xHWs1nWdD0pKumg6ONb-XxlvsN5IIMF3RPI09wxqmumM0PN2xF6Q__"
                alt=""
              />
            </div>
            <img
              src={navIcon.src}
              alt=""
              className="sm:hidden cursor-pointer"
              onClick={onOpenMenu}
            />
          </>
        )}
      </div>
      {menuStatus && <MenuMobile onClose={(data) => setMenuStatus(data)} />}
    </header>
  );
};

export default HeaderMain;
