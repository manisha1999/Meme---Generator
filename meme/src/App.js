
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Mymemes from './components/Mymemes';
import About from './components/About'
function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mymemes" element={<Mymemes />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
