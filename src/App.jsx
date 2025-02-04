import HorizontalScroll from "./HorizontalScroll";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import "./App.css";

const screens = [Home, About, Portfolio, Pricing, FAQ, Contact];

function App() {
  return (
    <div className="app">
      <HorizontalScroll screens={screens} />
    </div>
  );
}

export default App;
