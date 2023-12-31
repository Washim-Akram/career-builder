import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
        <div className="min-h-[calc(100vh-285px)]">
          <Outlet></Outlet>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default App
