import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <h2>
        <Link to='/transactions'>Transactions</Link>
      </h2>
      <button>
        <Link to='/logs/new'>New Transactions</Link>
      </button>
    </nav>
  );
};
export default NavBar;
