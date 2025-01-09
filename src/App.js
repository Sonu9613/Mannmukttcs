import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Business from "./pages/Business";
import Professionals from "./pages/Professionals";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/About" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
