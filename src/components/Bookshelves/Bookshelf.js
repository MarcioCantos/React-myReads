import React from 'react';

// Components
import Book from './Book';

const Bookshelf = (props) => {
  const { bookList, updateBookShelf, loading } = props;

  console.log(loading)

  return (
    <div className="bookshelf-books">
      {bookList.length > 0
        ? (
          <ol className="books-grid">
            {bookList.map((book) => (
                <li key={book.id}>
                  <Book book={book} updateBookShelf={updateBookShelf}/>
                </li>
            ))}
          </ol>
        ) : (
          loading ? 'Loading...' : 'Empty'
        )
      }
    </div>
  )
}
export default Bookshelf;