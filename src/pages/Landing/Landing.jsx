import About from "./About";
import Begin from "./Begin";
import Featured from "./Featured";
import Hero from "./Hero";
import Investing from "./Investing";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Investing />
      <Begin />
      <Featured />
    </div>
  );
};

export default Landing;
