import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="pb-[140px] pt-[160px] min-h-[500px] md:pt-[100px] lg:pt-[160px] bg-heroBg bg-cover bg-center lg:h-screen md:min-h-[620px] wrapper">
      <div className="contain flex-col justify-start items-center lg:text-left text-center  lg:items-start gap-8 lg:gap-14">
        <div className="flex justify-start items-center lg:items-start flex-col gap-2">
          <Fade triggerOnce direction="down" cascade>
            <h4 className="uppercase tracking-[0.435em] font-orbitron text-white font-semibold text-xl md:text-2xl opacity-80">
              Welcome to
            </h4>
            <img
              src="/hero-title.png"
              className="w-full md:h-[70px] object-contain"
              alt=""
            />
          </Fade>
        </div>
        <Fade triggerOnce delay={800} cascade direction="up">
          <p className="text-gray max-w-[550px] text-sm font-normal font-monument leading-[2.25]">
            The worlds first Decentralised and interactive, blockchain project
            investment presale dapp,
          </p>
          <button className="purple-btn">Launch App</button>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
