import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './apis/BooksAPI'
import './App.css';

// Components
import Home from './components/Home/Home';
import Search from './components/Search/Search';

export default function App() {

  // set States
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  //TODO: monta a lista inicial
  useEffect(() => {
    BooksAPI.getAll().then((bookList) => {
      setBookList(bookList);
      setLoading(false);
    });
  }, []);

  //TODO: atualiza o livro recebido (book) na prateleira (bookList)
  const updateBookShelf = (updatedBook) => {

    setBookList(bookList.map(book => book.id === updatedBook.id ? updatedBook : book));
    BooksAPI.update(updatedBook.id, updatedBook.shelf)
  };

  return (
    <div className="app">
      <Route exact path='/' render={() => (
          <Home
            bookList={bookList}
            updateBookShelf={updateBookShelf}
            loading={loading}
          />
        )}
      />
      <Route path='/search' render={() => (
          <Search updateBookShelf={updateBookShelf} />
        )}
      />
    </div>
  )
}