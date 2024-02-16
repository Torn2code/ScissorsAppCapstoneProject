import React from 'react';
import Header from './components/Header';
import ProductShowcase from './components/ProductShowcase';
import PasteUrl from './components/PasteUrl';
import FaQ from './components/FaQ';
import GetLink from './components/GetLink';
import Footer from './components/Footer';
import './ScissorsApp.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductShowcase />
      <PasteUrl />
      <FaQ />
      <GetLink />
      <Footer />
    </div>
  );
}

export default App;