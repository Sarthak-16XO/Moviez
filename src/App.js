import { Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieBookingPage from "./Pages/MovieBookingPage";
import MoviesPage from "./Pages/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Navbar sticky="top" bg="dark" variant="dark">
          <h1 className="p-2 text-white m-2 ">Moviez</h1>
        </Navbar>
      </Link>
      <Routes>
        <Route exact path="/" element={<MoviesPage />} />
        <Route exact path="/bookmovie/:id" element={<MovieBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
