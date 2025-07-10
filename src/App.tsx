import { useEffect, useState } from 'react';
import './App.css';
import { getAllBooks } from './utils/api';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import { Route, Routes } from 'react-router-dom';
import PageBooks from './components/PageBooks';
import PageUsers from './components/PageUsers';
import PageCheckout from './components/PageCheckout';
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
                <Route path="/books" element={<PageBooks allBooks={allBooks} />} />
                <Route path="/users" element={<PageUsers />} />
                <Route path="/checkout" element={<PageCheckout />} />
            </Routes>
            {errorMessage ? <FooterBar errorMessage={errorMessage} /> : null}
        </div>
    );
}

export default App;
