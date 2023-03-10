import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import GetRecommendations from "./Pages/GetRecommendations";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import Top50Books from "./Pages/Top50Books";
import About from "./Pages/About";
import RegisterPage from "./Pages/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import RecommendationsUnauth from "./components/RecommendationsUnauth";
import Search from "./Pages/Search";

function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/topbooks" element={<Top50Books />}></Route>
        <Route
          path="/recommendations"
          element={
            isAuthenticated() ? (
              <GetRecommendations />
            ) : (
              <RecommendationsUnauth />
            )
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
