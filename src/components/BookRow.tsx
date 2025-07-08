import React from 'react'
import type { Book } from '../types/Book'

type BookRowProps = {
    book: Book
}

const BookRow: React.FC<BookRowProps> = ({book}) => {


    return (
        <p>{book.title}</p>
    )
}

export default BookRow