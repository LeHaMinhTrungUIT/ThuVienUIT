import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hello from './components/Hello';
import Navigation from './components/Navigation';
import NewsBulletin from './components/NewsBulletin/NewsBulletin';
import ContentNews from './components/NewsBulletin/ContentNews/ContentNews';
import Service from './components/Service/Service';
import { BrowserRouter,Router, Route, Link, NavLink, Routes } from "react-router-dom";




class App extends React.Component {
  render () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/Service" element={<ServiceApp />} />
          <Route path="/NewsBulletin/ContentNews" element={<ContentNewsApp/>} />
          <Route path="/NewsBulletin" element={<NewsBulletinApp />} />
        </Routes>    
    </div>
    </BrowserRouter>

  );
}
}

function HomeApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Footer/>
    </div>
  );
}

function  NewsBulletinApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <NewsBulletin/>
        <Footer/>
    </div>
  );
}

function  ServiceApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Service/>
        <Footer/>
    </div>
  );
}

function  ContentNewsApp() {
  return (
    <div className="App">
        <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <ContentNews/>
        <Footer/>
    </div>
  );
}


export default App;
