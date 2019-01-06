import React from 'react';
import Bookshelf from './Bookshelf';

const Bookshelves = (props) => {

  const { bookList, updateBookShelf } = props;

  const shelves = [
    {id : 0, name : 'Currently Reading'},
    {id : 1, name : 'Want to Read'},
    {id : 2, name : 'Read'},
  ];

  return (
    <div>
      {shelves.map(shelf => (
        <div key={shelf.id} className="bookshelf">
          <h2 className="bookshelf-title">{shelf.name}</h2>
          <div className="bookshelf-books">
            <Bookshelf
              bookList={() => bookList.filter(book => book.shelf === shelf)}
              updateBookShelf={updateBookShelf}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bookshelves;
