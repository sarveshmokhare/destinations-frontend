import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header"
import Footer from "./Footer"
import AllPlaces from "./AllPlaces";
import AddPlace from "./AddPlace"

function App() {
  return (
    <div className="main-box">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AllPlaces />} />
          <Route path="/places/new" element={<AddPlace />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
