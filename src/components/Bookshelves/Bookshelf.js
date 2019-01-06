import React, {useState, useEffect} from 'react';
import Book from './Book';

const Bookshelf = (props) => {

  //set state
  const [loading, setLoading] = useState('Loading...')

  const { bookList, updateBookShelf } = props;

  useEffect(() =>{
    return (()=> setLoading('Bookshelf empty'))
  }, [])

  console.log('bookshelf: ', bookList)
    return (
      <div className="bookshelf-books">
        {bookList.length > 0
          ? (
            <ol className="books-grid">
              {bookList.map((book) => (
                  <li key={book.id}>
                    <Book book={book} updateBookShelf={updateBookShelf}/>
                  </li>
              ))}
            </ol>
          ) : (
            loading
          )
        }
      </div>
    )
}
export default Bookshelf;