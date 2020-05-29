import React from "react";
import Topbar from "./layout/Topbar";
import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i class="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
