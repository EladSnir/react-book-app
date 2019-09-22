import React from 'react';
import BookComponent from './BookComponent';

function BookListComponent(props) {
    return (
        <>
        <div>
            {props.books.map((b) => <BookComponent {...b}/>)}
        </div><hr/>
        </>
    )
}
export default BookListComponent;
