import React from 'react';
import frigidairesLogo from '../Image/frigidaires_logo.png';
import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';
import ItemDetailCart from '../Cart/ItemDetailCart'


const Navbar = () => (
  <nav className='nav'>
    <div className='logo-frigidaires'>
      <Link to="/">
        <img 
        className='logo-frigidaires-logo'
        src={frigidairesLogo}
        alt='Logo de FrigidAires'
        />
      </Link> 
      <p className='logo-frigidaires-texto'>FrigidAires</p>
    </div>
    <React.Fragment> 
    <ul className='navbar-menu'>
      <li>
        <NavLink to='/' className='nave-item nav-link' >Home</NavLink>
      </li>
      <li>
        <NavLink to='/productos' className='nave-item nav-link' >Refrigeradores</NavLink>
      </li>
    </ul>
    </React.Fragment>
    <ItemDetailCart />
  </nav>
);

export default Navbar;