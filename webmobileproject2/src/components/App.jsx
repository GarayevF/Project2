import '../styles/App.css';
import Main from './Main';
import Navbar from './Navbar'
import Recipe from './Recipe';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Recipe/>
      <Main/>
    </div>
  );
}

export default App;
