import { useEffect, useState } from 'react';
import './App.css';
import { getAllBooks } from './utils/api';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Users from './components/Users';
import Checkout from './components/Checkout';
import type { Book } from './types/Book';

function App() {
    const [allBooks, setAllBooks] = useState<Book[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        getAllBooks()
            .then((response) => {
                setAllBooks(response.data);
            })
            .catch((err) => setErrorMessage(err.message));
    }, []);
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/books" element={<Books allBooks={allBooks} />} />
                <Route path="/users" element={<Users />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            {errorMessage ? <FooterBar errorMessage={errorMessage} /> : null}
        </div>
    );
}

export default App;
