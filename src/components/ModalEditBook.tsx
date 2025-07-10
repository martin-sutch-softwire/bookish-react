import React, { useEffect, useState } from 'react';
import type { Book } from '../types/Book';

type ModalEditBookProps = {
    book?: Book;
    setShowModal: (s: boolean) => void;
}

const ModalEditBook: React.FC<ModalEditBookProps> = ({book, setShowModal}) => {
    const [bookDetails, setBookDetails] = useState({title: '',
        author: '',
        isbn: '',
        edition: '',
        publisher: ''
    });
    const [numCopies, setNumCopies] = useState(1);
    useEffect(() => {
        if (book) {
            setBookDetails({title: book.title,
                author: book.author,
                isbn: book.isbn,
                edition: book.edition,
                publisher: book.publisher
            });
        }
    }, [book])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setBookDetails(prev => ({...prev,[name]:value}));
    }
    const handleSubmit = () => {
        console.log('submit');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {Object.keys(bookDetails).map((field) => {
                    return (
                    <div key={field}>
                        <label>
                            {field}
                            <input type='text' name={field} value={(bookDetails as any)[field]} onChange={handleChange}></input>
                        </label>
                    </div>
                )})}
            </form>
        </div>
    )
};

export default ModalEditBook;
