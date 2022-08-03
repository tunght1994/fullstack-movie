import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WrapApp } from "./app.style";
import Header from "./components/Header";
import DetailMovie from "./components/Page/DetailMovie";
import HomeMovie from "./components/Page/HomeMovie";

function App() {
  return (
    <WrapApp>
      <BrowserRouter>
      <Header />
      <div className="main">
          <Routes>
            <Route path="/" element={<HomeMovie />} />
            <Route path="/detail/:id" element={<DetailMovie />} />
          </Routes>
      </div>
      </BrowserRouter>
    </WrapApp>
  );
}

export default App;
