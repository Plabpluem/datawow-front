import homeLine from "../image/homeWhite.png";
import Icon from "../image/blogWhite.png";
import backIcon from "../image/backWhite.png";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MenuMobile = ({ onClose }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    setUserStatus(JSON.parse(localStorage.getItem("user")));
  }, []);

  const goToPage = (link) => {
    const checkLogin = JSON.parse(localStorage.getItem("user"));

    if (link === "/ourblogs" && !checkLogin) {
      router.push("/login");
    } else {
      router.push(link);
    }
    onClose(false);
  };

  return (
    <section className="sm:hidden h-full w-screen bg-black/50 fixed top-0 left-0 z-10 ">
      <div className="w-[280px] h-full bg-primary-green rounded-l-[12px] text-green-100 absolute right-0 ">
        <div className="flex flex-col gap-[36px] pt-6">
          <div className="px-[30px] py-[6px]">
            <img
              src={backIcon.src}
              alt=""
              className="w-[16px] h-[12px]"
              onClick={() => onClose(false)}
            />
          </div>
          <div className="flex flex-col gap-[4px] px-[16px]">
            <a
              className="py-[8px] px-[12px] flex gap-[12px] items-center"
              onClick={() => goToPage("/")}
            >
              <img src={homeLine.src} alt="" className="h-[21px] w-[21px]" />
              <p
                className={
                  pathname === "/" ? " text-[16px] font-extrabold" : ""
                }
              >
                Home
              </p>
            </a>
            <a
              className="py-[8px] px-[12px] text-[16px] font-medium flex gap-[12px] items-center"
              onClick={() => goToPage("/ourblogs")}
            >
              <img src={Icon.src} alt="" className="h-[20px] w-[20px]" />
              <p
                className={
                  pathname === "/ourblogs" ? " text-[16px] font-extrabold" : ""
                }
              >
                Our Blog
              </p>
            </a>
          </div>
          <div className="absolute bottom-4 flex flex-row-reverse items-center gap-[10px] px-[16px]">
            {userStatus ? (
              <>
                <span className="font-medium">{userStatus}</span>
                <img
                  className="rounded-[200px] w-[40px] h-[40px]"
                  src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFnM4R~Xig-O~nJkc8R8uQhphsY1UaQ9YnBgsqONNvThKZ9s2nvwEucopPxjang6KKwhXlxnYp-fk6T67JQp82cjOJ6uT1qullZjT8hbXApE-OgDG1CZkCtwCV6z-2m9vJ69WgEubFhGiMOpGpU2qJliwBPBJEZP~9aKZkpm1gcIUb0NifUZCa1JFoNf9Nw~UKWN7gVLdzwgCx5O0R65m8RmrSI-X2L4HV0xIP3nJCvCXk3cORAOmv5RGCXRIlDvF99YkuiZmI896WrYq0pPB7YqVnhVlsavw2xHWs1nWdD0pKumg6ONb-XxlvsN5IIMF3RPI09wxqmumM0PN2xF6Q__"
                  alt=""
                />
              </>
            ) : (
              <button type="button" onClick={()=>goToPage('/login')}className=" buttonFont bg-success-green rounded-lg w-[105px] h-[40px] text-sm font-semibold cursor-point">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuMobile;
