import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Books from './Books';
import BookView from './BookView';

function App() {
  return (
    <Router>
      <div>
        <h1>My Store</h1>
          <ul>
            <li>
              <Link to = '/'>Home</Link></li>
            <li>
              <Link to ='/About'>About</Link></li>
              <li>
              <Link to ='/Books'>Books</Link></li>
          </ul>
          <Route exact path ='/' component ={Home}/>
          <Route path ='/About' component ={About}/>
          <Route exact path ='/books' component ={Books}/>
          <Route exact path ='/books/:id' component ={BookView}/>
      </div>
    </Router>
  );
}

export default App;
