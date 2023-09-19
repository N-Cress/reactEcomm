import Nav from './components/Nav.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books.jsx';
import BooksPage from './pages/BooksPage.jsx';
import { books } from "./data";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home books={books}/>} />
        <Route path="/books" element={<Books books={books}/>} />
        <Route path="/books/1" element={<BooksPage books={books}/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;

// <Landing /> 
//       <Highlights /> 
//       <Featured />
//       <Discounted /> 
//       <Explore />