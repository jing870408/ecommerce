import Navigation from "./Practice/Navigation";
import Header from "./Practice/Header";
import Service from "./Practice/Services";
import Portfolio from "./Practice/Protfolio";
import About from "./Practice/About";
import Team from "./Practice/Team";
import PY5 from "./Practice/PY5";
import Contact from "./Practice/Contact";
import Footer from "./Practice/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Team />
      <PY5 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
