import React, { useState } from 'react';
import PropTypes from 'prop-types';

// imagem temporária para os livros sem capa
import cover from '../../assets/imgs/no_image_book.jpg';

export default function Book(props) {

  Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  }

  //set state / props
  const [shelf, setShelf] = useState(props.book.shelf)
  const {book, updateBookShelf} = props;
  // const URL_THUMBNAIL = 'http://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&source=gbs_api';
  // const URL_THUMBNAIL = '../../assets/imgs/no_image_book.jpg';

  const thumbnail = () => {
    if(book.imageLinks === undefined) {
      return cover;
    }
    return book.imageLinks.thumbnail
  }

  function handleChange(e) {
    book.shelf = e
    updateBookShelf(book);
    setShelf(e);
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail()})`, backgroundSize:'cover' }}></div>
        <div className="book-shelf-changer">
          <select value={shelf ? shelf : 'none'} onChange={e => handleChange(e.target.value)}>
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