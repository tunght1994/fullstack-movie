import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WrapApp } from "./app.style";
import Header from "./components/Header";
import DetailMovie from "./components/Page/DetailMovie";
import HomeMovie from "./components/Page/HomeMovie";
import Movies from "./components/Page/Movies";
import TvShows from "./components/Page/TvShows";

function App() {
  return (
    <WrapApp>
      <BrowserRouter>
      <Header />
      <div className="main">
          <Routes>
            <Route path="/" element={<HomeMovie />} />
            <Route path="/detail/:id" element={<DetailMovie />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tv-shows' element={<TvShows />} />
          </Routes>
      </div>
      </BrowserRouter>
    </WrapApp>
  );
}

export default App;
