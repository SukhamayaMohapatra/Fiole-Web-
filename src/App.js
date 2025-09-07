import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Header />
      <HeroSection />
      <Dashboard />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
