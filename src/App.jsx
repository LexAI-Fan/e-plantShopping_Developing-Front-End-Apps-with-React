import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import LandingPage from './LandingPage';

function App() {
   const [currentPage, setCurrentPage] = useState('landing');

   const handleHomeClick = () => {
        setCurrentPage('landing');
    };

   const handleGetStartedClick = () => {
        setCurrentPage('products');
    };

   // 删除重复的 handleHomeClick 函数
   // 删除 showProductList 状态

  return (
    <div className="app-container">
      {currentPage === 'landing' ? (
        <LandingPage onGetStartedClick={handleGetStartedClick} />
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;