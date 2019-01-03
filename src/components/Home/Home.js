import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelves from '../Bookshelves/Bookshelves';

export default class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelves />
        </div>
        <div className="open-search">
        <button
          to='/search'
          className="btn-search"
        >Add a book</button>
        </div>
      </div>
    )
  }
}