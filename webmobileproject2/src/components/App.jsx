import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Main from './Main';
import Navbar from './Navbar';
import Recipe from './Recipe';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route element={<Contact />} path='/contact'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;