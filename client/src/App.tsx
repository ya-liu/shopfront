import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
