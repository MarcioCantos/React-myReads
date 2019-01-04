import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelves from '../Bookshelves/Bookshelves';

const Home = (props) => {

  console.log(props.books)
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelves />
      </div>
      <div className="open-search">
      <Link
        to='/search'
        className="btn-search"
      >Add a book</Link>
      </div>
    </div>
  )
}

export default Home;