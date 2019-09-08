import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BookListComponent from './BookListComponent';

function App() {
  // bring data from api
  const [books, setBooks] = useState([]);
  const API_URL = 'https://kob-e.github.io/react-book-store/books-data/books.json';
  (async ()=> {
    const resp = await fetch(API_URL)
    const _books = await resp.json();
    setBooks(_books);
  })()

  return (
        <BookListComponent books={books}/>
  );
}

export default App;
