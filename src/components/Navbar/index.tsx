import { useCallback, useState } from 'react';

import NavItems from './NavItems';
import './Navbar.scss';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsSidebarOpen(val => !val);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Tanmay Thole</div>
      <div className="nav-items">
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
          <span className='close-btn' onClick={toggleMobileMenu}>x</span>
          <div className="nav-links">
            {NavItems.map(({key, label, link}) => (
              <a key={key} href={link}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
