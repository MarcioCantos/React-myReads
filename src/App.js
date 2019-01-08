import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './apis/BooksAPI';
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
      console.log('recarreguei')
      setBookList(bookList);
      setLoading(false);
    });
  }, []);

  //TODO: atualiza o livro recebido (book) na prateleira (bookList)
  const updateBookShelf = (updatedBook) => {
    BooksAPI.update(updatedBook, updatedBook.shelf)
    .then(setBookList(bookList.map(book => book.id === updatedBook.id ? updatedBook : book)));
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
      <Route path='/search' render={({history}) => (
          <Search
            updateBookShelf={(book) => {
              updateBookShelf(book);
              history.push('/')
            }}
          />
        )}
      />
    </div>
  )
}