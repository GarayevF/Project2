import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Recipes from './pages/recipe/Recipes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Recipes />} path='/recipes'/>
        <Route element={<Contact />} path='/contact'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
