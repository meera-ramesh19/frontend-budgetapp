import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
      
        <nav className='nav'>
             <h2> 
   <Link to='/logs'>Budgeting App</Link> 
       </h2> 
       <button> 
    <Link to='/logs/new'>New Transaction</Link>
       </button>
            </nav>
    )
}
export default NavBar