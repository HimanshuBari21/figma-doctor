import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/colors.css"

import Nav from './components/Nav'
import ProfileBar from './components/ProfileBar'
import SearchExplore from './components/SearchExplore'
import BottomNav from './components/BottomNav'
import Doctormonth from './components/Doctormonth'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="our-black">
      <Nav />
      <ProfileBar />
      <SearchExplore />
      <BottomNav />
      <Doctormonth />
    </div>
  </StrictMode>
);
