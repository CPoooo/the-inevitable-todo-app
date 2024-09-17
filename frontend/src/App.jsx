import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer.jsx';
import Signup from './components/Signup';

function App() {
  return (
    <Router >
    <div>
      <Navbar className="navbar" />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer className="footer" />
    </div>
    </Router>
  );
}

export default App;
