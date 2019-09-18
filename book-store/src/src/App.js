import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BookListComponent from './BookListComponent';
import Cart from './Cart';
import { directive } from '@babel/types';

function App() {
  // bring data from api
  const [books, setBooks] = useState([]);
  const API_URL = 'https://kob-e.github.io/react-book-store/books-data/books.json';
  (async () => {
    const resp = await fetch(API_URL)
    const _books = await resp.json();
    setBooks(_books);
  })()

  return (
    <div>
      <h1>My Store</h1>
      <Cart />
      <BookListComponent books={books} />
    </div>
  );
}

export default App;
