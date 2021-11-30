import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />        
      </header>

      <Content />
      <Slidebar />
      <Footer />
    </div>
  );
}

export default App;
