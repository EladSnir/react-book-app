import React, { useState } from 'react';

function BookView({ match }) {
    const [book, setBook] = useState(null);
    if (!book) {
        fetch(`http://localhost:3004/books/${match.params.id}`)
            .then(res => res.json().then(res => setBook(res)));
    }

    if (book)
        return (
            <div>
                <ul>
                    <li>
                        Author: {book.author}</li>
                    <li>
                        Country: {book.country}</li>
                    <li>
                        ImageLink: {book.imageLink}</li>
                    <li>
                        Language: {book.language} </li>
                    <li>
                        Link: {book.link}</li>
                    <li>
                        Pages: {book.pages}</li>
                    <li>
                        Year: {book.year}</li>
                    <li>
                        Id: {book.id}</li>
                </ul>
            </div>
        )
    else return (<div>Loading</div>)
}


export default BookView;