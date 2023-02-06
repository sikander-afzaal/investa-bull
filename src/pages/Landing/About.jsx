import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="wrapper bg-aboutBg pb-[60px] bg-repeat-x -mt-[60px] bg-contain bg-center">
      <div className="contain md:flex-row flex-col-reverse justify-between items-center gap-5">
        <div className="flex justify-start md:self-end items-center sm:text-left text-center  sm:items-start flex-col gap-7 sm:gap-[50px]">
          <Fade triggerOnce cascade direction="left">
            <p className="text-white  font-clash font-normal text-[15px] leading-[1.9] max-w-[500px]">
              You can view constantly updating new projects as they pitch
              Through our live, interactive video/audio AMA events. We have
              partnered with the Largest ‘Ama lounges’ from across the world to
              stream ‘The project Pitch’ live to audiences through our simple
              but engaging platform which is phone and desktop compatible,
              allowing for a clear and hassle free experience
            </p>{" "}
            <button className="purple-btn">Launch App</button>
          </Fade>
        </div>
        <Fade
          className=" flex justify-center items-center"
          triggerOnce
          direction="right"
          delay={500}
        >
          <img
            src="/phone.png"
            className="md:self-start animate-bounce lg:max-w-full max-w-[70%] md:max-w-[40%]"
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
};

export default About;
