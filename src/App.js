import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx'; 
import PageNotFound from './pages/PageNotFound.jsx';
import Products from './pages/Products.jsx';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="*" element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
