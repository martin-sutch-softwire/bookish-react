import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {


    return(
    <div>
        <Link to="/books">Books</Link>
        <Link to="/users">Users</Link>
        <Link to="/checkout">Checkout</Link>
    </div>)
}

export default NavBar