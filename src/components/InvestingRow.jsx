import { Fade } from "react-awesome-reveal";

const InvestingRow = ({ num, img, title, desc, order, btn }) => {
  return (
    <div
      className={`flex justify-between gap-10 items-center w-full ${
        order ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      <div className="flex lg:max-w-[400px] justify-start items-start flex-col gap-8">
        <Fade
          triggerOnce
          className="w-full"
          cascade
          direction={order ? "right" : "left"}
        >
          <img
            src={num}
            className="h-[65px] md:h-[88px] md:ml-16 object-contain"
            alt=""
          />
          <div className="w-full bg-borderWhite rounded-full h-[4px] "></div>
          <h3 className="text-white uppercase font-mesa font-normal text-[23px]">
            {title}
          </h3>
          <p className="text-[#fffdfd] text-[15px] font-normal font-clash leading-[1.9]">
            {desc}
          </p>
          {btn && <button className="purple-btn">More Details</button>}
        </Fade>
      </div>
      <Fade
        className="flex justify-center items-center"
        triggerOnce
        delay={1000}
        direction={!order ? "right" : "left"}
      >
        <img
          src={img}
          className="object-contain max-w-[426px] w-[80%] md:w-full"
          alt=""
        />
      </Fade>
    </div>
  );
};

export default InvestingRow;
