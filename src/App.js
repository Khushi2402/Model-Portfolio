import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing/Landing';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;