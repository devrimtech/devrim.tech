import React from 'react';
import './App.css';
import { Navbar } from './components';

import { Header } from './containers';
const App = () => (
  <div className="App">
    <Navbar />
    <Header />
  </div>
);

export default App;
