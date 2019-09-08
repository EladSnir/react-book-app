import React from 'react';
import BookComponent from './BookComponent';

function BookListComponent(props) {
    return (
        <>
        <h1>My Store</h1>
        <div>
            {props.books.map((b) => <BookComponent book={b}/>)}
        </div><hr/>
        </>
    )
}
export default BookListComponent;
