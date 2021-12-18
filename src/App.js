import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />     
      </header>
      
      <Navigation />
      <Hello />
      <Footer />
    </div>
  );
}

export default App;
