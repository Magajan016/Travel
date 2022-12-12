import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar';
import './Pages/Style.css'
import Contact from './Pages/Contact';
function App() {
  return (
   <Router>
        <Navbar/>
        <Contact/>
   </Router>
  );
}
export default App;