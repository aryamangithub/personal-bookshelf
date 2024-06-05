import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookShelfPage from './pages/BookShelfPage';
import BookSearchPage from './pages/BookSearchPage/BookSearchPage';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage/>}></Route>
        <Route path="/bookshelf" element={<BookShelfPage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App


