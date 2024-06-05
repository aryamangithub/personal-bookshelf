import React from 'react'
import BookCard from '../BookCard/BookCard'
import './BookList.css'

const BookList = ({books, onAdd}) => {
  return (
    <div className='book-list'>
        {books.map((book) => (
            <BookCard key={book.key} book={book} onAdd={onAdd}/>
        ))}
    </div>
  )
}

export default BookList
