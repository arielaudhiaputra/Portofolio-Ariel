import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
