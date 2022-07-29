import { Link } from 'react-router-dom';
import logo from '../asset/dollar-sign-symbol-12.gif'
const NavBar = () => {
  return (
    <nav className='nav'>
      <div>
      <img  style={{width:'50px',height:'50px'}} src={logo} alt="Dollar sign"/>
    </div>
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
