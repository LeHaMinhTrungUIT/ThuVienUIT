import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import NewsBulletin from './components/NewsBulletin/NewsBulletin';
import ContentNews from './components/NewsBulletin/ContentNews/ContentNews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />        
      </header>
      <ContentNews/>
      <NewsBulletin/>
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
