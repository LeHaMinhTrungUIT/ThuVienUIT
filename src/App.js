import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hello from "./components/Hello";
import Navigation from "./components/Navigation";
import NewsBulletin from "./components/NewsBulletin/NewsBulletin";
import ContentNews from "./components/NewsBulletin/ContentNews/ContentNews";
import Service from "./components/Service/Service";
import Login from "./components/Login/Login";
import Forum from "./components/Forum/forum";
import Contacts from "./components/Contacts/contacts";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

/* npm install */
/* npm install react-icons --save */
/* npm install node-sass --save */
/* npm install react-router-dom --save */

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeApp />} />
            <Route path="/Service" element={<ServiceApp />} />
            <Route
              path="/NewsBulletin/ContentNews"
              element={<ContentNewsApp />}
            />
            <Route path="/NewsBulletin" element={<NewsBulletinApp />} />
            <Route path="/Login" element={<LoginApp />} />
            <Route path="/Contacts" element={<ContactsApp />} />
            <Route path="/Forum" element={<ForumApp />} />
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
      <Navigation />
      <Footer />
    </div>
  );
}

function NewsBulletinApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <NewsBulletin />
      <Footer />
    </div>
  );
}

function ServiceApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <Service />
      <Footer />
    </div>
  );
}

function ContentNewsApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <ContentNews />
      <Footer />
    </div>
  );
}

function LoginApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <Login />
      <Footer />
    </div>
  );
}

function ForumApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <Forum />
      <Footer />
    </div>
  );
}

function ContactsApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
