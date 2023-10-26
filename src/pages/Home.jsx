import Features from "../components/Features";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import "./Home.css";

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
