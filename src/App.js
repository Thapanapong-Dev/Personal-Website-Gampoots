import "./css/app.css";
import "./css/custom.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderBar } from "./components/navigate/headerBar";

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      {/* <Routes>
        
      </Routes>
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
