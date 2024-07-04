import homeLine from "../image/home-line.png"
import Icon from "../image/Icon.png"
import { usePathname, useRouter } from "next/navigation";
const NavbarLeft = () => {
  const pathname = usePathname()
  const router = useRouter()

  const goToPage = (link) => {
    const checkLogin = JSON.parse(localStorage.getItem("user"));
    
    if (link === "/ourblogs" && !checkLogin) {
      router.push("/login");
    } else {
      router.push(link);
    }
  };
  return (
    <div className="hidden sm:block pt-[32px] bg-gray-100 w-[280px] h-full static left-0">
      <ul className="flex flex-col px-[16px] gap-[4px]  text-primary-green">
        <a onClick={()=>goToPage('/')} className="cursor-pointer py-[8px] px-[12px] flex gap-[12px] items-center">
            <img src={homeLine.src} alt="" className="h-[21px] w-[21px]"/>
          <p className={pathname === '/'?" text-[16px] font-extrabold":""}>Home</p>
        </a>
        <a onClick={()=>goToPage('/ourblogs')}  className="cursor-pointer py-[8px] px-[12px] text-[16px] font-medium flex gap-[12px] items-center">
            <img src={Icon.src} alt="" className="h-[20px] w-[20px]"/>
          <p className={pathname === '/ourblogs'?" text-[16px] font-extrabold":""}>Our Blog</p>
        </a>
      </ul>
    </div>
  );
};

export default NavbarLeft;
