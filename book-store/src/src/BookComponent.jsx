import React from 'react';
import { container, ACTIONS } from './Store'

function BookComponent(props) {
    const source = 'https://kob-e.github.io/react-book-store/books-data/'
    
    return (
        <div>
            <h2>{props.book.title}</h2>
            <img src={source + props.book.imageLink} alt=""/>
            <h3>Price: 50$</h3>
            <button onClick = {()=>{container.dispatch(ACTIONS.ADD, {'bookid':props.id})}}>Add</button>
            <hr/>
        </div>
    )  
}

export default BookComponent;
