import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';

class App extends Component {
  render() {
    return (
      <div className="emp-sys-app">

        <Header />
        <Sidebar />

       </div>
    );
  }
}
export default App;