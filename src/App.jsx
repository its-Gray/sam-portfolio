import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: 'var(--bg)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
