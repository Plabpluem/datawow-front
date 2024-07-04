'use client'
import { useRef } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const userRef = useRef()
    const router = useRouter()
    const onLoginHandler = (e) => {
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify(userRef.current.value))
        router.push('/')
    }
  return (
    <section className="relative flex flex-col-reverse md:flex-row md:min-h-screen ">
      <div className="overflow-y-hidden w-full h-[60vh] md:min-h-screen bg-primary-green z-1 flex items-center justify-center">
        <form onSubmit={onLoginHandler} className="flex flex-col gap-[40px] max-w-[384px] w-full mx-[24px]">
          <h1 className="text-white text-[28px] font-semibold">Sign in</h1>
          <div className="flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Username"
              className="rounded-[8px] px-[14px] py-[10px] outline-none "
              ref={userRef}
            />
            <button type="submit" className="buttonFont bg-success-green text-white rounded-[8px] px-[16px] py-[10px]">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-[362px] md:min-w-[632px] md:min-h-screen bg-primary-green">
        <div className="w-full h-full bg-green-300 z-10 rounded-b-[36px] md:rounded-l-[36px] relative">
          <img className="w-[171px] h-[131px] md:w-[299.61px] md:h-[230px] relative left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]" src="https://s3-alpha-sig.figma.com/img/0fbc/43f4/9761bea793b24e9f6af1620580a39d2f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9n2IMeJE2c91bP8UhSyPXbBV6-kd42WcIhUufUlVh7zLgRJrswKhwT5dYyUJdewJASnuA4H5sfkPRWP~XecimkDJxWo1FarmtAX1dTPNZ9T0DBZFKNm0Do3Xcjp-LYFO3qPDrdLl9X-a5M7ev-j2Bs2mLCqTvneL7V7es3e3DmEMx4Bz5VKI1yoprpILcJpaqAxLwUu7umNwCFXmaTlQUyDLexoBUDahNvRhPEswc2gMo1nEMw41nJ39Klzd-6UyzDnka5XsUbUoS8Puc6uJ2RQpXrIL-UWiZKPJ~Azvfjo~pZIWHMN867A1L19rew-6xSTe8AaaF74-aT7QDawFQ__" alt="" />
          <h3 className="headerFont text-[24px] md:text-[28px] font-normal text-white text-center absolute left-[50%] translate-x-[-50%] top-[65%]">a Board</h3>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
