import React from 'react';
import { useState } from 'react';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className="Page">
        <Header />
        <Content />
        <Footer />
      </div>
      
    );
  }
}

export default App
