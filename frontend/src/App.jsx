import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegisterButtons from './components/RegisterButtons';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar className="navbar" />
      <Hero />
      <RegisterButtons />
      <Footer className="footer" />
    </div>
  );
}

export default App;
