import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import Bookshelves from '../Bookshelves/Bookshelves';

const Home = (props) => {

  Home.propTypes = {
    bookList: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  const { bookList, updateBookShelf, loading } = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelves
          bookList={bookList}
          updateBookShelf={updateBookShelf}
          loading={loading}
        />
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