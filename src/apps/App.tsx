import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebAudio from "../components/WebAudio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WebAudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
