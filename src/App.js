import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import ProductModal from "./components/ProductModal";

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/products/:name" component={ProductModal} />
            <Route path="/account" component={Account} />
            <Footer />
         </Router>
      </div>
   );
}

export default App;
