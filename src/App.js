import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Singers from './components/Singers';
import Albums from './components/Albums';

function App() {
  return (
    <div className="App">
      <Home/>
      <NavBar/>
      <Singers/>
      <Albums/>
    </div>
  );
}

export default App;
