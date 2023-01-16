import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import API from './API';
import About from './About';
import Vinyl from './Vinyl';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/catalog/:id" element={<Vinyl />}/>
        <Route path="/api" element={<API />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default Pages;
