import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar className="navbar" />
      <Hero />
      <Footer className="footer" />
    </div>
  );
}

export default App;
