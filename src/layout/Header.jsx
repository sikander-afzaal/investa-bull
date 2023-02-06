import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper fixed top-0 z-20 left-0 bg-headerBg  bg-center min-h-[160px] bg-cover md:bg-[100%__100%] bg-no-repeat isolate">
      {headerToggle && (
        <div
          className="fixed top-0 left-0 bg-black opacity-60 z-[88] w-full h-full"
          onClick={() => setHeaderToggle(false)}
        ></div>
      )}
      {/* <img
        src="/header-bg.png"
        className="h-[160px] md:static absolute -z-10 left-0 top-0 md:h-[180px] lg:h-auto w-full object-cover lg:object-fill 2xl:object-contain"
        alt=""
      /> */}
      <div className="contain md:m-0 -mt-[75px] static md:absolute left-1/2 md:-translate-x-1/2 top-[27%] md:-translate-y-1/2 flex justify-between items-center gap-5">
        <img src="/logo.png" className="w-[170px] object-contain" alt="" />
        <nav
          className={`flex z-[89] transition-all duration-1000  justify-start  w-full max-w-[450px] md:max-w-none md:w-auto md:h-auto h-screen md:flex-row flex-col md:justify-center md:items-center items-center sm:items-start md:bg-transparent bg-black gap-10 md:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-[800px]"
          } md:p-0 px-[3rem] py-[6rem]`}
        >
          <a
            href="#"
            className="uppercase text-white font-nexa font-bold text-sm"
          >
            Home
          </a>
          <a
            href="#"
            className="uppercase text-[#A3A3A3] font-nexa font-bold text-sm"
          >
            About us
          </a>
          <a
            href="#"
            className="uppercase text-[#A3A3A3] font-nexa font-bold text-sm"
          >
            Incubator
          </a>
          <button className="font-clash md:hidden block text-xl font-semibold text-white border-2 hover:shadow-transparent border-solid border-pinkish-purple hover:bg-transparent transition-all duration-300 shadow-btn bg-pinkish-purple rounded-[5px] w-[164px] min-h-[42px]">
            Login
          </button>
        </nav>
        <button className="font-clash md:block hidden text-xl font-semibold text-white border-2 hover:shadow-transparent border-solid border-pinkish-purple hover:bg-transparent transition-all duration-300 shadow-btn bg-pinkish-purple rounded-[5px] w-[164px] h-[42px]">
          Login
        </button>
        {headerToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            onClick={() => setHeaderToggle(false)}
            className="w-8 h-8 relative cursor-pointer z-[90] md:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 relative cursor-pointer z-[90] md:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Header;
