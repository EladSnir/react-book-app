import React from 'react';
import BookComponent from './BookComponent';

function BookListComponent(props) {
    return (
        <>
        <div>
            {props.books.map((b) => <BookComponent book={b} id={b.key}/>)}
        </div><hr/>
        </>
    )
}
export default BookListComponent;
