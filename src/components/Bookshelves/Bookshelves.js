import React, { useState } from 'react';
import Bookshelf from './Bookshelf';

const Bookshelves = (props) => {

  const { bookList, updateBookShelf, loading } = props;

  const shelves = [
    {id : 0, name : 'Currently Reading', ref : 'currentlyReading'},
    {id : 1, name : 'Want to Read', ref : 'wantToRead'},
    {id : 2, name : 'Read', ref : 'read'},
    {id : 3, name : 'Without Classification', ref : 'none'},
  ];

  return (
    <div>
      {shelves.map(shelf => (
        <div key={shelf.id} className="bookshelf">
          <h2 className="bookshelf-title">{shelf.name}</h2>
            <Bookshelf
              bookList={bookList.filter(book => book.shelf === shelf.ref)}
              updateBookShelf={updateBookShelf}
              loading={loading}
            />
        </div>
      ))}
    </div>
  )
}

export default Bookshelves;
