import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WrapApp } from "./app.style";
import DetailMovie from "./components/Page/DetailMovie";
import HomeMovie from "./components/Page/HomeMovie";

function App() {
  return (
    <WrapApp>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeMovie />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </WrapApp>
  );
}

export default App;
