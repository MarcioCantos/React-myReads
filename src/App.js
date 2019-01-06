import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './apis/BooksAPI'
import './App.css';

// Components
import Home from './components/Home/Home';
import Search from './components/Search/Search';

export default function BooksApp() {

  // set States
  const [bookList, setBookList] = useState([]);

  //TODO: monta a lista inicial
  useEffect(() => {
    BooksAPI.getAll().then((bookList) => {
      setBookList(bookList);
    });
  }, []);

  //TODO: atualiza o livro recebido (book) na lista de livros (bookList)
  const updateBookShelf = (updatedBook) => {
    console.log(updatedBook)
    setBookList(bookList.map(book => book.id === updatedBook.id ? updatedBook : book));
    BooksAPI.update(updatedBook.id, updatedBook.shelf)
  };

  return (
    <div className="app">
      <Route exact path='/' render={() => (
          <Home
            bookList={bookList}
            updateBookShelf={updateBookShelf}
          />
        )}
      />
      <Route path='/search' render={() => (
          <Search
          books={bookList}
          updateBookShelf={updateBookShelf}
          />
        )}
      />
    </div>
  )
}