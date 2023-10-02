import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-full h-[200vh] bg-slate-300 flex justify-center items-center">
      <div className="w-[97%] h-[98%] flex flex-col justify-between items-center">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
