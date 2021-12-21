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
import Slider from './components/Slider';
import Search from './components/Search/Search';
import News from './components/News';
import Login from './components/Login/Login';
import Decoration from './components/Decoration';
import Forum from "./components/forum/forum";
import Contacts from "./components/contacts/contacts";
/* npm install */
/* npm install react-icons --save */
/* npm install node-sass --save */
/* npm install react-router-dom --save */



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
          <Route path="/Search" element={<SearchApp />} />
          <Route path="/Login" element={<LoginApp />} />
          <Route path="/Forum" element={<ForumApp />} />
          <Route path="/Contacts" element={<ContactsApp />} />
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
        <Hello/>
        <Decoration/>
        <Slider/>
        <News/>
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

function  SearchApp() {
  return (
    <div className="App">
        <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Search/>
        <Footer/>
    </div>
  );
}


function  LoginApp() {
  return (
    <div className="App">
        <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Login/>
        <Footer/>
    </div>
  );
}

function  ForumApp() {
  return (
    <div className="App">
        <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Forum/>
        <Footer/>
    </div>
  );
}


function  ContactsApp() {
  return (
    <div className="App">
        <header className="App-header">
        <Header />     
        </header>
        <Navigation/>
        <Contacts/>
        <Footer/>
    </div>
  );
}


export default App;
