import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
