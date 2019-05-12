import React from 'react';
import './App.scss'

import Header from './Header'
import Router from './Router'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router />
      </div>
      <Footer />          
    </div>
  );
}

export default App;
