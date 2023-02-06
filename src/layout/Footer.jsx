const Footer = () => {
  return (
    <div className="wrapper bg-footerBg  bg-no-repeat lg:pt-[200px] pb-10 lg:pb-[80px] mt-[180px] lg:mt-[100px] bg-center">
      <div className="contain lg:flex-row flex-col justify-between items-center lg:items-start gap-10 lg:gap-5">
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-10">
          <img src="/logo.png" className="h-[64px] object-contain" alt="" />
          <p className="font-clash text-[#D0D0D0] text-[15px] leading-[1.5] font-medium max-w-[340px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est
            odio.
          </p>
        </div>
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-5">
          <h3 className="font-mesa uppercase text-neonBlue font-normal text-sm">
            Documents
          </h3>
          <a href="#" className="text-base text-white font-clash font-normal">
            Whitepaper
          </a>
          <a href="#" className="text-base text-white font-clash font-normal">
            Pitch Deck
          </a>
          <a href="#" className="text-base text-white font-clash font-normal">
            Blog
          </a>
        </div>
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-5">
          <h3 className="font-mesa uppercase text-neonBlue font-normal text-sm">
            Menu
          </h3>
          <a href="#" className="text-base text-white font-clash font-normal">
            About Us
          </a>
          <a href="#" className="text-base text-white font-clash font-normal">
            Features
          </a>
        </div>
        <div className="flex justify-start items-center lg:text-left text-center lg:items-start flex-col gap-5">
          <h3 className="font-mesa uppercase text-neonBlue font-normal text-sm">
            Social
          </h3>
          <a
            target="blank"
            href="#"
            className="text-base gap-5 grid grid-cols-[20px__auto] place-items-center text-white font-clash font-normal"
          >
            <img src="/twitter.png" alt="" /> Twitter
          </a>
          <a
            target="blank"
            href="#"
            className="text-base gap-5 grid grid-cols-[20px__auto] place-items-center text-white font-clash font-normal"
          >
            <img src="/telegram.png" alt="" /> Telegram
          </a>
          <a
            target="blank"
            href="#"
            className="text-base gap-5 grid grid-cols-[20px__auto] place-items-center text-white font-clash font-normal"
          >
            <img src="/fb.png" alt="" /> Facebook
          </a>
          <a
            target="blank"
            href="#"
            className="text-base gap-5 grid grid-cols-[20px__auto] place-items-center text-white font-clash font-normal"
          >
            <img src="/yt.png" alt="" /> Youtube
          </a>
          <a
            target="blank"
            href="#"
            className="text-base gap-5 grid grid-cols-[20px__auto] place-items-center text-white font-clash font-normal"
          >
            <img src="/discord.png" alt="" /> Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
