import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './apis/BooksAPI';
import './App.css';

// Components
import Home from './components/Home/Home';
import Search from './components/Search/Search';

export default function App() {

  const lista = useListBook();
  const loading = (true);

  //TODO: atualiza o livro recebido (book) na prateleira (bookList)
  const updateBookShelf = (updatedBook) => {
    BooksAPI.update(updatedBook, updatedBook.shelf)
    .then( () => lista );
  };

  return (
    <div className="app">
      <Route exact path='/' render={() => (
          <Home
            bookList={lista}
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

// TODO: Carrega a lista de livros da API
function useListBook() {
  const [bookList, setBookList] = useState([])
  useEffect(() => {
    BooksAPI.getAll().then((bookList) => {
      setBookList(bookList);
    });
  });

  return bookList;

}