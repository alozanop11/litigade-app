import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import Attorneys from "./components/Attorneys";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="relative">
        <Home />
      </div>
      <Product />
      <Pricing />
      <Clients />
      <Attorneys />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
