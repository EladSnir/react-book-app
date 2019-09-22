import React from 'react';
import { Link } from 'react-router-dom'
import { container, ACTIONS } from './Store'

function BookComponent(props) {
    const source = 'https://kob-e.github.io/react-book-store/books-data/'
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={source + props.imageLink} alt=""/>
            <h3>Price: 50$</h3>
            <button onClick = {()=>{container.dispatch(ACTIONS.ADD, {'bookid':props.id})}}>Add</button>
            <Link to ={`/books/${props.id}`}>Details</Link>
            <hr/>
        </div>
    )  
}

export default BookComponent;
