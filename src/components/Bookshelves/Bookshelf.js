import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {

  const { bookList, updateBookShelf } = props;

  console.log('bookshelf: ', bookList)
    return (
      <div className="bookshelf-books">
        {bookList.length > 0
          ? (
            <ol className="books-grid">
              {bookList.map((book) => (
                  <li key={book.id}>
                    <Book book={book}/>
                  </li>
              ))}
            </ol>
          ) : (
            'Bookshelf empty'
          )
        }
      </div>
    )
}
export default Bookshelf;