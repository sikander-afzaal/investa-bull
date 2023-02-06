import { Fade } from "react-awesome-reveal";
import BeginBox from "../../components/BeginBox";

const Begin = () => {
  return (
    <div className="wrapper bg-center bg-cover bg-beginBg mt-[90px] lg:mt-[150px]">
      <div className="contain flex-col justify-center items-center gap-[50px] md:gap-[80px]">
        <Fade triggerOnce direction="down">
          <h2 className="title">WHERE DO I BEGIN?</h2>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-full gap-x-[60px] gap-y-[70px] sm:gap-y-[100px] xl:gap-[160px] auto-rows-fr">
          <Fade triggerOnce direction="up" cascade>
            <BeginBox
              title="ATTACH YOUR WALLET"
              desc="1. ATTACH YOUR WEB3 WALLET, by hitting “connect wallet” and following the usual steps provides you with a personalized dashboard attached by just your wallet"
            />

            <BeginBox
              title="VIEW LIVE/INVEST"
              desc="3. funds now showing on our dashboard ready to use in the ‘Live investabull Ama’"
            />
            <BeginBox
              title="FUND YOUR ACCOUNT"
              desc="2. Swap your tokens to our ‘stable coin’ on the built in DEX or Buy our Token with credit/debit card on our built in ‘Fiat ramp’"
            />
            <BeginBox
              title="JOIN LIVE AMA"
              desc=" 4. by clicking ‘live Ama’ button on your dashboard you are taken to our ‘unique investabull’ live stream user interface and can invest with just 1 x click by pressing the heart button ( set at $50 as standard but can be changed as often as you wish ,min/max 10-100 usd )"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Begin;
