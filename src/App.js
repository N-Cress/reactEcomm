import Nav from './components/Nav.jsx';
import './App.css';
import Landing from './components/Landing.jsx';
import Highlights from './components/Highlights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';
import Explore from './components/Explore.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing /> 
      <Highlights /> 
      <Featured />
      <Discounted /> 
      <Explore />
    </div>
  );
}

export default App;
