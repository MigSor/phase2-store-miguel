import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CtaButton from "../components/CtaButton";
function Hero() {
   const history = useHistory();

   function goToProductsPage() {
      history.push("/products");
   }
   return (
      <div className="hero">
         <div className="hero-left">
            <h1>
               Welcome to <strong className="store-name">FakeStore</strong>
            </h1>
            <h3>Surprise your loved ones this Christmas Season</h3>
            <h3>
               We have a range of <em>Men's clothing</em>, <em>Women's clothing</em>
               <br />
               <em>Electronics</em> and <em>Jewelry</em>
            </h3>

            <CtaButton goTo={goToProductsPage} text="Shop Now" />
         </div>
      </div>
   );
}

export default Hero;
