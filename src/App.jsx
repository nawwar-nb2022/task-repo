// import { Route, Routes } from "react-router";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Buy from "./components/Buy/Buy";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
function App() {
  return (
    <div className="App">

      {/* <Buy/> */}
      {/* <Home/> */}
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/Buy" element={<Buy/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
