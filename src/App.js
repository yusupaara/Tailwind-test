import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Features from './components/TestHeader2';
import TestHeader3 from './components/TestHeader3';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <TestHeader3 />
      <Header />
    </div>
  );
}

export default App;
