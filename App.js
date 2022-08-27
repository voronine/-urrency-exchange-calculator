import React from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Rate from "./Rate/Rate"
import About from "./About/About";

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>

            <Routes>
              <Route exact path="/" element={<Rate />} />
              <Route exact path="/about" element={<About />} />
            </Routes>

          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br /></div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}
export default App;
