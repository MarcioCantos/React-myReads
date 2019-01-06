import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    return (
      <ol className="books-grid">
        <li>
          <Book/>
        </li>
      </ol>
    )
}
export default Bookshelf;
