const BeginBox = ({ title, desc }) => {
  return (
    <div className="relative max-w-[450px] h-full w-full  isolate ">
      <img src="/begin-box.png" className="w-full  object-cover " alt="" />
      <div className="flex absolute left-1/2 -translate-x-1/2 w-full max-w-[80%] top-[21%] z-10 justify-start items-start flex-col gap-1 sm:gap-3">
        <h3 className="text-white text-center self-center font-mesa text-sm sm:text-base font-normal">
          {title}
        </h3>
        <p className="text-[#efefef] leading-[1.64] font-clash text-xs sm:text-[15px] font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BeginBox;
