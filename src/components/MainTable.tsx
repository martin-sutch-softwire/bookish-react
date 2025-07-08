import React from 'react'
import type { Book } from '../types/Book'
import BookRow from './BookRow'

type BooksProps = {
    allBooks: Book[]
}

const MainTable: React.FC<BooksProps> = ({allBooks}) => {
    console.log(allBooks)

    return(
        <div>
            {allBooks.map(book => <BookRow key={book.bookID} book={book}/>)}
        </div>
    )
}

export default MainTable