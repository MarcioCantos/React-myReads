import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../apis/BooksAPI';

//components
import Book from '../Bookshelves/Book'

export default function Search(props) {

  Search.propTypes = {
    updateBookShelf: PropTypes.func.isRequired
  }

  //set state / Hooks  / props
  const [bookName, setBookName] = useState('');
  const [listResult, setListResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const {updateBookShelf} = props;
  const delay = 1000;

  //TODO: aguarda 1s para ativar a busca na api
  // baseado no código de: xnimorz (https://github.com/xnimorz/use-debounce)
  useEffect(
    () => {
      bookName === '' && setListResult([])
      const handler = setTimeout(() => {
        if(bookName.length > 3) {
          updateBookList(bookName);
          setIsLoading(true);
          setError(false);
        }
      }, delay);
      return () => clearTimeout(handler);
    }, [bookName, delay]
  );

  function handleInputChange(e){
    setBookName(e);
  }

  // TODO: retorna um array com o resultado da busca
  const updateBookList = () => {
    setListResult([]);
     BooksAPI.search(bookName)
      .then((result) =>  {
        result.error ? setError(true) : listVerified(result);
        setIsLoading(false);
      })
  }

  // TODO: Recupera a categoria (prateleira) dos livros.
  const listVerified = (list = []) => {
    const keeper = []
    list.map((book) => (
      BooksAPI.get(book.id)
      .then((result) => {
        book = result ? result : book
        keeper.push(book)
        setListResult(keeper)
      })
    ))
    setError(false);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={bookName}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
      {error && (
        <div>
          <h2>Termo de busca inválido. Désolé...</h2>
        </div>
      )}
      {isLoading ? 'Loading...' : (
        <ol className="books-grid">
          {(listResult.length > 0 && bookName !== '') && (
            listResult.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              </li>
            ))
          )}
        </ol>
      )}
      </div>
    </div>
  )
}