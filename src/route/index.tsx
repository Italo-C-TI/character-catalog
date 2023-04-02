import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Loading } from "components";
import { Favorites, Home } from "pages";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
