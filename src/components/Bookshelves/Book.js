import React, { useState } from 'react';

const Book = (props) => {

  //set state
  const [shelf, setShelf] = useState(props.book.shelf)
  const {book, updateBookShelf} = props;

  function handleChange(e) {
    book.shelf = e
    updateBookShelf(book);
    setShelf(e);
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={shelf ? shelf : 'move'} onChange={e => handleChange(e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors &&
        book.authors.map((name, index) =>
          <div key={index}>
            {name}
          </div>
        )}
      </div>
    </div>
  )
}

export default Book;