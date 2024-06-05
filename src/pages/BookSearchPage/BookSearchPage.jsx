import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';

const BookSearchPage = () => {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([])

    useEffect(() => {
        if(query){
            const fetchBooks = async () => {
                try{
                    const response = await axios.get(`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`)
                    console.log('Books fetched', response.data.docs);
                    setBooks(response.data.docs)
                } 
                catch(error){
                    console.error('Error fetching books:', error);
                }
            }
            fetchBooks();
        }
    }, [query])

    const addToBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || []
        localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]))
        console.log('Book added to bookshelf:', book);
    }

    return(
        <div className='container'>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>
            <BookList books={books} onAdd={addToBookshelf}></BookList>
            <a href="/bookshelf">Go to My Bookshelf</a>
        </div>
    )
}

export default BookSearchPage
