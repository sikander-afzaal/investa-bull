import { Fade } from "react-awesome-reveal";
import InvestingRow from "../../components/InvestingRow";

const Investing = () => {
  return (
    <div className="wrapper mt-[70px] lg:mt-[140px]">
      <div className="contain flex-col justify-center items-center">
        <Fade triggerOnce direction="down">
          <h2 className="title">simple, interactive, investing</h2>
        </Fade>
        <div className="flex justify-start items-center flex-col w-full gap-[80px] md:gap-[150px] mt-[100px]">
          <InvestingRow
            num="/one.png"
            title="Live AMA"
            desc="Whether you intend to invest or just stay up to date on the latest
          blockchain trends, Investabull should be your go too application as an
          investor ,for the best presale token prices And As a project to
          achieve unbeatable visibility and reach"
            img="/invest1.png"
          />
          <InvestingRow
            order
            num="/two.png"
            title="RECORDED AMAS"
            desc="Here we have all previous Amas, which are stored for a set time period for future reference until well after the TGE or ‘Token Generation Event’ upon launch giving a great point of reference for future reference"
            btn
            img="/invest2.png"
          />
          <InvestingRow
            num="/three.png"
            title="UPCOMING AMAS"
            desc="Here is the list of upcoming live ’investabull’ events from various AMA lounges from around the world. You can set alarms and click to sync with your calendar so you never miss an opportunity, Or send a link via multiple platforms to others so they also never miss an opportunity"
            img="/invest3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Investing;
