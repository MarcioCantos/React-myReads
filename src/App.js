import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './apis/BooksAPI'
import './App.css';

import Home from './components/Home/Home';
import Search from './components/Search/Search';

class BooksApp extends React.Component {

  state = {
    booksList : [],
    book : null,
  }

  //TODO: monta lista com todos os livros recuperados na API
  componentDidMount(){
    BooksAPI.getAll()
      .then((bookList) => {
        this.updateStateBookList(bookList)
      })
  }

  //TODO: atualiza o licro recebido (book) na lista de livros (bookList)
  updateBookShelf = (book) => {
    this.searchBookByID(book.id)
  };

  //TODO: busca livro específico pela ID
  searchBookByID = (id) => {
    BooksAPI.get('nggnmAEACAAJ')
    .then((book) => {
      this.updateStateBook(book)
    })
  };

  //TODO: Atualiza o state 'library' com o array de books recebido
  updateStateBookList = (bookList) => (
    this.setState(() => ({bookList}))
  );

  //TODO: Atualiza o state 'book' com o book recebido
  updateStateBook = (book) => (
    this.setState(() => ({book}))
  );

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            books={this.state.bookList}
            updateBookShelf={this.updateBookShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
          books={this.state.books}
          updateBookShelf={this.updateBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;
