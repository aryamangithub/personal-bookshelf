import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList/BookList'

const BookShelfPage = () => {

    const [bookshelf, setBookshelf] = useState([])
    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || []
        setBookshelf(storedBookshelf)
        console.log('Bookshelf loaded:', storedBookshelf);
    }, [])

    return (
        <div className='container'>
            <h1>My Bookshelf</h1>
            <BookList books={bookshelf}></BookList>
            <button className="btn"><a href="/">Back to Search</a></button>
        </div>
    )

}

export default BookShelfPage
