import Features from "../components/Features";

import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

function Home() {
   return (
      <div className="home-wrapper">
         <Hero />
         <Features />
         <Testimonials />
      </div>
   );
}

export default Home;
