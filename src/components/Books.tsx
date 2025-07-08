import React from 'react'
import MainTable from './MainTable'
import type { Book } from '../types/Book'

type BooksProps = {
    allBooks: Book[]
}

const Books: React.FC<BooksProps> = ({allBooks}) => {


    return(
    <div>
        <MainTable allBooks={allBooks}/>
    </div>)
}

export default Books