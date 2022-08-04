import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from "./App";
import HomeScreen from "./routes/Home/HomeScreen";
import SampleScreen from "./routes/Sample/SampleScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<HomeScreen />} />
        <Route path="Sample" element={<SampleScreen />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


window.Neutralino.init ();
