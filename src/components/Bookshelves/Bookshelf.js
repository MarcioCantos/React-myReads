import React from 'react';
import PropTypes from 'prop-types';

// Components
import Book from './Book';

const Bookshelf = (props) => {

  Bookshelf.propTypes = {
    bookList: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

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