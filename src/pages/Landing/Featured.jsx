import { Fade } from "react-awesome-reveal";

const Featured = () => {
  const FEATURED = [
    "/feat1.png",
    "/feat2.png",
    "/feat3.png",
    "/feat4.png",
    "/feat5.png",
    "/feat1.png",
    "/feat6.png",
    "/feat3.png",
  ];
  return (
    <div className="wrapper mt-[120px] ">
      <div className="contain flex-col justify-center items-center gap-[60px]">
        <Fade direction="down" triggerOnce>
          <h2 className="title">Featured On</h2>
        </Fade>
        <div className="grid lg:bg-map bg-contain bg-no-repeat bg-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] auto-rows-fr w-full">
          <Fade cascade triggerOnce direction="up" damping={0.2}>
            {FEATURED.map((elem, idx) => {
              return (
                <div
                  key={idx + "feat"}
                  className="border-solid border-[1.5px] border-white flex justify-center items-center h-[144px]"
                >
                  <img
                    src={elem}
                    className="object-contain max-w-[200px]"
                    alt=""
                  />
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Featured;
