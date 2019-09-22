import React, { useState} from 'react';
import Cart from './Cart';
import BookListComponent from './BookListComponent';

function Books() {  
    // bring data from api
    const [books, setBooks] = useState([]);
    if (books.length === 0) {
    const API_URL = 'http://localhost:3004/books';
        (async () => {
            const resp = await fetch(API_URL)
            const _books = await resp.json();
            setBooks(_books);
        })()
    }
    


    return (
        <div>
            <Cart />
            <BookListComponent books={books} />
        </div>
    )
}


export default Books;